import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";

function ParticleField({ count = 500 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Particle distribution
      const r = Math.pow(Math.random(), 0.6) * 14;
      const theta = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 8;
      arr[i * 3] = Math.cos(theta) * r;
      arr[i * 3 + 1] = y;
      arr[i * 3 + 2] = Math.sin(theta) * r - 4;
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.03;
    const t = state.clock.elapsedTime;
    ref.current.position.y = Math.sin(t * 0.3) * 0.2;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        sizeAttenuation
        color={new THREE.Color("#f5d597")}
        transparent
        opacity={0.85}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function AuroraRibbons() {
  const g1 = useRef<THREE.Mesh>(null);
  const g2 = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    const t = s.clock.elapsedTime;
    if (g1.current) {
      g1.current.rotation.z = t * 0.05;
      g1.current.position.x = Math.sin(t * 0.2) * 1.5;
    }
    if (g2.current) {
      g2.current.rotation.z = -t * 0.04;
      g2.current.position.x = Math.cos(t * 0.18) * 1.2;
    }
  });
  return (
    <>
      <mesh ref={g1} position={[0, 0, -3]}>
        <planeGeometry args={[18, 6, 1, 1]} />
        <meshBasicMaterial color="#1ca7a7" transparent opacity={0.18} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
      <mesh ref={g2} position={[2, -1, -2]}>
        <planeGeometry args={[14, 4, 1, 1]} />
        <meshBasicMaterial color="#d49a3a" transparent opacity={0.14} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
    </>
  );
}

function CameraSway() {
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    state.camera.position.x = Math.sin(t * 0.15) * 0.6;
    state.camera.position.y = Math.cos(t * 0.12) * 0.3;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.2]}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 6], fov: 55 }}
    >
      <color attach="background" args={["#0a0c11"]} />
      <fog attach="fog" args={["#0a0c11", 6, 18]} />
      <ambientLight intensity={0.4} />
      {/* <AuroraRibbons /> */}
      <ParticleField />
      <CameraSway />

    </Canvas>
  );
}
