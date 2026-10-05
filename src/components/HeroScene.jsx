import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Center,
  Text3D,
  TorusKnot,
  Points,
  PointMaterial,
} from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";
import { useTheme } from "../theme";

const FONT = "/fonts/helvetiker_bold.typeface.json";

function StarField({ color }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const n = 2400;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const r = 4 + Math.random() * 9;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.04;
    ref.current.rotation.x += delta * 0.015;
    ref.current.rotation.y += state.pointer.x * delta * 0.2;
    ref.current.rotation.x += state.pointer.y * delta * 0.2;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={0.035}
        sizeAttenuation
        depthWrite={false}
        opacity={0.9}
      />
    </Points>
  );
}

// The central 3D extruded "S" that rotates toward the cursor and
// spins gently on its own.
function Initial({ hex }) {
  const group = useRef();
  const mesh = useRef();

  useFrame((state, delta) => {
    if (!group.current) return;
    const { x, y } = state.pointer;
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      x * 0.8,
      0.06
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -y * 0.5,
      0.06
    );
    if (mesh.current) mesh.current.rotation.z += delta * 0.05;
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.6} floatIntensity={1.4}>
        <Center ref={mesh}>
          <Text3D
            font={FONT}
            size={2.4}
            height={0.7}
            curveSegments={24}
            bevelEnabled
            bevelThickness={0.12}
            bevelSize={0.07}
            bevelSegments={8}
          >
            S
            <meshStandardMaterial
              color={hex.accent}
              emissive={hex.accent2}
              emissiveIntensity={0.45}
              roughness={0.1}
              metalness={0.95}
            />
          </Text3D>
        </Center>
      </Float>
    </group>
  );
}

function OrbitBits({ hex }) {
  return (
    <>
      <Float speed={3} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[3, 1.4, -1]}>
          <TorusKnot args={[0.3, 0.1, 128, 16]} />
          <meshStandardMaterial
            color={hex.accent3}
            roughness={0.2}
            metalness={0.8}
            emissive={hex.accent3}
            emissiveIntensity={0.6}
          />
        </mesh>
      </Float>
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[-3.1, -1.1, -1.5]}>
          <dodecahedronGeometry args={[0.45]} />
          <meshStandardMaterial
            color={hex.accent2}
            roughness={0.15}
            metalness={0.9}
            emissive={hex.accent2}
            emissiveIntensity={0.6}
          />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[2.6, -1.8, 0.5]}>
          <octahedronGeometry args={[0.38]} />
          <meshStandardMaterial
            color={hex.accent}
            roughness={0.2}
            metalness={0.85}
            emissive={hex.accent}
            emissiveIntensity={0.6}
          />
        </mesh>
      </Float>
    </>
  );
}

function Rig() {
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      state.pointer.x * 0.7,
      0.04
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      state.pointer.y * 0.7,
      0.04
    );
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function HeroScene() {
  const { theme } = useTheme();
  const { hex } = theme;

  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.6} color={hex.accent2} />
        <directionalLight position={[-5, -3, 2]} intensity={1.2} color={hex.accent3} />
        <pointLight position={[0, 0, 4]} intensity={1.4} color={hex.accent} />
        <Initial hex={hex} />
        <OrbitBits hex={hex} />
        <StarField color={hex.accent} />
        <Rig />
        <EffectComposer disableNormalPass>
          <Bloom
            intensity={1.1}
            luminanceThreshold={0.15}
            luminanceSmoothing={0.9}
            mipmapBlur
          />
          <Vignette eskil={false} offset={0.2} darkness={0.9} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
