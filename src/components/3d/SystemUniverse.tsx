import { useRef, useMemo, useState, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Text, OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

// ─── Node data ────────────────────────────────────────────────
const SYSTEM_NODES = [
  { id: "ai", label: "AI Systems", position: [0, 2, 0] as [number, number, number], color: "#00e68a", projects: ["LLM Monitoring", "AI Job Matcher"] },
  { id: "data", label: "Data Pipelines", position: [-3, 0.5, -1] as [number, number, number], color: "#00bcd4", projects: ["Zerodha Pipeline", "Market ETL"] },
  { id: "scraping", label: "Scraping Infra", position: [3, 0.8, -1.5] as [number, number, number], color: "#ffaa00", projects: ["Twitter Scraper", "News Scraper"] },
  { id: "trading", label: "Trading Systems", position: [-2, -1.5, 0.5] as [number, number, number], color: "#ff4466", projects: ["Backtesting Engine", "Trading Pipeline"] },
  { id: "devtools", label: "Dev Tools", position: [2.5, -1.2, 1] as [number, number, number], color: "#aa66ff", projects: ["Token Calculator", "Prompt Manager"] },
];

const CONNECTIONS: [number, number][] = [
  [0, 1], [0, 2], [1, 3], [2, 3], [0, 4], [1, 4], [2, 4],
];

// ─── Glowing Node ─────────────────────────────────────────────
function SystemNode({
  node,
  onHover,
  onUnhover,
  isActive,
}: {
  node: typeof SYSTEM_NODES[0];
  onHover: (id: string) => void;
  onUnhover: () => void;
  isActive: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const scale = isActive ? 1.3 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
    }
    if (glowRef.current) {
      const s = isActive ? 2.5 : 1.8;
      glowRef.current.scale.lerp(new THREE.Vector3(s, s, s), 0.1);
      (glowRef.current.material as THREE.MeshBasicMaterial).opacity =
        0.08 + Math.sin(state.clock.elapsedTime * 2) * 0.03 + (isActive ? 0.08 : 0);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group position={node.position}>
        {/* Core sphere */}
        <mesh
          ref={meshRef}
          onPointerEnter={() => onHover(node.id)}
          onPointerLeave={onUnhover}
        >
          <icosahedronGeometry args={[0.2, 2]} />
          <meshStandardMaterial
            color={node.color}
            emissive={node.color}
            emissiveIntensity={isActive ? 1.5 : 0.8}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        {/* Glow sphere */}
        <mesh ref={glowRef}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshBasicMaterial color={node.color} transparent opacity={0.1} />
        </mesh>

        {/* Label */}
        <Text
          position={[0, 0.45, 0]}
          fontSize={0.12}
          color={isActive ? node.color : "#667788"}
          anchorX="center"
          anchorY="middle"
          font="/fonts/JetBrainsMono-Regular.woff"
          characters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 "
        >
          {node.label}
        </Text>

        {/* Project labels on hover */}
        {isActive &&
          node.projects.map((p, i) => (
            <Text
              key={p}
              position={[0, -0.35 - i * 0.18, 0]}
              fontSize={0.08}
              color="#556677"
              anchorX="center"
              anchorY="middle"
            >
              → {p}
            </Text>
          ))}
      </group>
    </Float>
  );
}

// ─── Connection lines with flowing particles ──────────────────
function ConnectionLines({ activeNode }: { activeNode: string | null }) {
  const linesRef = useRef<THREE.Group>(null);

  const lineGeometries = useMemo(() => {
    return CONNECTIONS.map(([a, b]) => {
      const start = new THREE.Vector3(...SYSTEM_NODES[a].position);
      const end = new THREE.Vector3(...SYSTEM_NODES[b].position);
      const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
      mid.y += 0.3;
      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      const points = curve.getPoints(50);
      return { points, fromId: SYSTEM_NODES[a].id, toId: SYSTEM_NODES[b].id };
    });
  }, []);

  return (
    <group ref={linesRef}>
      {lineGeometries.map((line, i) => {
        const isActive = activeNode === line.fromId || activeNode === line.toId;
        return (
          <line key={i}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={line.points.length}
                array={new Float32Array(line.points.flatMap((p) => [p.x, p.y, p.z]))}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial
              color={isActive ? "#00e68a" : "#1a2a3a"}
              transparent
              opacity={isActive ? 0.6 : 0.2}
              linewidth={1}
            />
          </line>
        );
      })}
    </group>
  );
}

// ─── Flowing Data Particles ───────────────────────────────────
function DataParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 200;

  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
      vel[i * 3] = (Math.random() - 0.5) * 0.005;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.005;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.005;
    }
    return [pos, vel];
  }, []);

  useFrame(() => {
    if (!particlesRef.current) return;
    const posAttr = particlesRef.current.geometry.attributes.position;
    const arr = posAttr.array as Float32Array;
    for (let i = 0; i < count; i++) {
      arr[i * 3] += velocities[i * 3];
      arr[i * 3 + 1] += velocities[i * 3 + 1];
      arr[i * 3 + 2] += velocities[i * 3 + 2];
      // Wrap around
      if (Math.abs(arr[i * 3]) > 5) velocities[i * 3] *= -1;
      if (Math.abs(arr[i * 3 + 1]) > 4) velocities[i * 3 + 1] *= -1;
      if (Math.abs(arr[i * 3 + 2]) > 3) velocities[i * 3 + 2] *= -1;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00e68a"
        size={0.015}
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

// ─── Ambient Grid Floor ───────────────────────────────────────
function GridFloor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
      <planeGeometry args={[30, 30, 30, 30]} />
      <meshBasicMaterial color="#0a1520" wireframe transparent opacity={0.15} />
    </mesh>
  );
}

// ─── Camera Auto-Rotate ───────────────────────────────────────
function CameraRig() {
  useFrame((state) => {
    const t = state.clock.elapsedTime * 0.05;
    state.camera.position.x = Math.sin(t) * 0.3;
    state.camera.position.y = Math.cos(t * 0.5) * 0.2 + 0.5;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

// ─── Main Scene ───────────────────────────────────────────────
function Scene({ onNodeHover }: { onNodeHover: (id: string | null) => void }) {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const handleHover = useCallback(
    (id: string) => {
      setActiveNode(id);
      onNodeHover(id);
    },
    [onNodeHover]
  );

  const handleUnhover = useCallback(() => {
    setActiveNode(null);
    onNodeHover(null);
  }, [onNodeHover]);

  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#00e68a" />
      <pointLight position={[-5, 3, -5]} intensity={0.3} color="#00bcd4" />
      <pointLight position={[0, -3, 3]} intensity={0.2} color="#aa66ff" />

      <Stars radius={15} depth={50} count={2000} factor={2} saturation={0} fade speed={0.5} />

      {SYSTEM_NODES.map((node) => (
        <SystemNode
          key={node.id}
          node={node}
          onHover={handleHover}
          onUnhover={handleUnhover}
          isActive={activeNode === node.id}
        />
      ))}

      <ConnectionLines activeNode={activeNode} />
      <DataParticles />
      <GridFloor />
      <CameraRig />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
}

// ─── Exported Component ───────────────────────────────────────
interface SystemUniverseProps {
  onNodeHover?: (id: string | null) => void;
  className?: string;
}

const SystemUniverse = ({ onNodeHover, className = "" }: SystemUniverseProps) => {
  const handleNodeHover = useCallback(
    (id: string | null) => {
      onNodeHover?.(id);
    },
    [onNodeHover]
  );

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 1, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene onNodeHover={handleNodeHover} />
      </Canvas>
    </div>
  );
};

export default SystemUniverse;
