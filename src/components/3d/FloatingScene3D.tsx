import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import * as THREE from "three";

function FloatingNodes() {
  const groupRef = useRef<THREE.Group>(null);
  const nodes = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        position: [
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 4,
        ] as [number, number, number],
        color: ["#00e68a", "#00bcd4", "#ffaa00", "#ff4466", "#aa66ff"][i % 5],
        scale: 0.05 + Math.random() * 0.08,
        speed: 0.5 + Math.random() * 1.5,
      })),
    []
  );

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <Float key={i} speed={node.speed} rotationIntensity={0.3} floatIntensity={0.8}>
          <mesh position={node.position}>
            <icosahedronGeometry args={[node.scale, 1]} />
            <meshStandardMaterial
              color={node.color}
              emissive={node.color}
              emissiveIntensity={0.6}
              roughness={0.3}
              metalness={0.7}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function AmbientParticles() {
  const ref = useRef<THREE.Points>(null);
  const count = 100;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#00e68a" size={0.02} transparent opacity={0.3} sizeAttenuation />
    </points>
  );
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[3, 3, 3]} intensity={0.3} color="#00e68a" />
      <pointLight position={[-3, 2, -3]} intensity={0.2} color="#00bcd4" />
      <Stars radius={10} depth={30} count={800} factor={2} saturation={0} fade speed={0.3} />
      <FloatingNodes />
      <AmbientParticles />
    </>
  );
}

interface FloatingScene3DProps {
  className?: string;
}

const FloatingScene3D = ({ className = "" }: FloatingScene3DProps) => (
  <div className={`w-full h-full pointer-events-none ${className}`}>
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <SceneContent />
    </Canvas>
  </div>
);

export default FloatingScene3D;
