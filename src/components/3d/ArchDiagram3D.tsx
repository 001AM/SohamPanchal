import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ArchNode {
  label: string;
  position: [number, number, number];
  color: string;
}

interface ArchDiagram3DProps {
  nodes: ArchNode[];
  connections: [number, number][];
  className?: string;
}

function DiagramNode({ node }: { node: ArchNode }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y =
        node.position[1] + Math.sin(state.clock.elapsedTime * 1.5 + node.position[0]) * 0.05;
    }
  });

  return (
    <mesh ref={ref} position={node.position}>
      <boxGeometry args={[0.3, 0.15, 0.15]} />
      <meshStandardMaterial
        color={node.color}
        emissive={node.color}
        emissiveIntensity={0.5}
        roughness={0.3}
        metalness={0.7}
      />
    </mesh>
  );
}

function DiagramConnections({ nodes, connections }: { nodes: ArchNode[]; connections: [number, number][] }) {
  const geometries = useMemo(() => {
    return connections.map(([a, b]) => {
      const start = new THREE.Vector3(...nodes[a].position);
      const end = new THREE.Vector3(...nodes[b].position);
      const points = [start, end];
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      return geo;
    });
  }, [nodes, connections]);

  return (
    <>
      {geometries.map((geo, i) => (
        <line key={i}>
          <bufferGeometry attach="geometry" {...geo} />
          <lineBasicMaterial color="#00e68a" transparent opacity={0.3} />
        </line>
      ))}
    </>
  );
}

function FlowParticles({ nodes, connections }: { nodes: ArchNode[]; connections: [number, number][] }) {
  const ref = useRef<THREE.Points>(null);
  const count = connections.length * 3;

  const { positions, connectionIndices, progress } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const indices: number[] = [];
    const prog: number[] = [];
    for (let i = 0; i < count; i++) {
      const ci = i % connections.length;
      indices.push(ci);
      prog.push(Math.random());
      const [a] = connections[ci];
      pos[i * 3] = nodes[a].position[0];
      pos[i * 3 + 1] = nodes[a].position[1];
      pos[i * 3 + 2] = nodes[a].position[2];
    }
    return { positions: pos, connectionIndices: indices, progress: prog };
  }, [nodes, connections, count]);

  useFrame(() => {
    if (!ref.current) return;
    const posAttr = ref.current.geometry.attributes.position;
    const arr = posAttr.array as Float32Array;
    for (let i = 0; i < count; i++) {
      progress[i] += 0.003;
      if (progress[i] > 1) progress[i] = 0;
      const [a, b] = connections[connectionIndices[i]];
      const t = progress[i];
      arr[i * 3] = nodes[a].position[0] * (1 - t) + nodes[b].position[0] * t;
      arr[i * 3 + 1] = nodes[a].position[1] * (1 - t) + nodes[b].position[1] * t;
      arr[i * 3 + 2] = nodes[a].position[2] * (1 - t) + nodes[b].position[2] * t;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#00e68a" size={0.04} transparent opacity={0.8} sizeAttenuation />
    </points>
  );
}

function SceneContent({ nodes, connections }: { nodes: ArchNode[]; connections: [number, number][] }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight position={[2, 2, 2]} intensity={0.4} color="#00e68a" />
      <pointLight position={[-2, 1, -2]} intensity={0.2} color="#00bcd4" />
      <group ref={groupRef}>
        {nodes.map((node, i) => (
          <DiagramNode key={i} node={node} />
        ))}
        <DiagramConnections nodes={nodes} connections={connections} />
        <FlowParticles nodes={nodes} connections={connections} />
      </group>
    </>
  );
}

const ArchDiagram3D = ({ nodes, connections, className = "" }: ArchDiagram3DProps) => (
  <div className={`w-full ${className}`} style={{ height: "200px" }}>
    <Canvas
      camera={{ position: [0, 0.5, 3], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <SceneContent nodes={nodes} connections={connections} />
    </Canvas>
  </div>
);

export default ArchDiagram3D;
