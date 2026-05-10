import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function StageBeams() {
  const group = useRef<THREE.Group>(null);
  useFrame((s) => {
    const t = s.clock.elapsedTime;
    if (!group.current) return;
    group.current.children.forEach((c, i) => {
      const m = c as THREE.Mesh;
      m.rotation.z = Math.sin(t * 0.4 + i) * 0.25;
      const mat = m.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.12 + Math.abs(Math.sin(t * 0.6 + i * 1.3)) * 0.18;
    });
  });
  const beams = Array.from({ length: 9 });
  return (
    <group ref={group} position={[0, 1, -2]}>
      {beams.map((_, i) => {
        const x = (i - 4) * 0.55;
        const color = i % 2 === 0 ? "#1ca7a7" : "#d49a3a";
        return (
          <mesh key={i} position={[x, -1.5, 0]} rotation={[0, 0, 0]}>
            <coneGeometry args={[0.35, 7, 24, 1, true]} />
            <meshBasicMaterial color={color} transparent opacity={0.2} side={THREE.DoubleSide} blending={THREE.AdditiveBlending} depthWrite={false} />
          </mesh>
        );
      })}
    </group>
  );
}

function FogPlane() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (!ref.current) return;
    const t = s.clock.elapsedTime;
    ref.current.position.x = Math.sin(t * 0.1) * 0.6;
  });
  return (
    <mesh ref={ref} position={[0, -2.4, -1]}>
      <planeGeometry args={[16, 3]} />
      <meshBasicMaterial color="#1ca7a7" transparent opacity={0.08} blending={THREE.AdditiveBlending} depthWrite={false} />
    </mesh>
  );
}

function Stage() {
  return (
    <mesh position={[0, -2.2, 0]} rotation={[-Math.PI / 2.2, 0, 0]}>
      <ringGeometry args={[1.4, 2.2, 64]} />
      <meshBasicMaterial color="#d49a3a" transparent opacity={0.6} />
    </mesh>
  );
}

export function VenueScene() {
  return (
    <Canvas
      dpr={[1, 1.2]}
      gl={{ antialias: false, alpha: true }}
      camera={{ position: [0, 0.4, 5.5], fov: 50 }}
    >
      <color attach="background" args={["#08090d"]} />
      <fog attach="fog" args={["#08090d", 4, 14]} />
      <ambientLight intensity={0.3} />
      <StageBeams />
      <FogPlane />
      <Stage />

    </Canvas>
  );
}
