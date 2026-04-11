import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const BrainCore = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    // Complex rotation to simulate neural activity
    meshRef.current.rotation.y = time * 0.15;
    meshRef.current.rotation.z = Math.sin(time * 0.5) * 0.1;
  });

  return (
    <Float speed={3} rotationIntensity={0.5} floatIntensity={1.5}>
      <Sphere ref={meshRef} args={[1.2, 100, 100]}>
        <MeshDistortMaterial
          color="#10b981"
          speed={2.5}
          distort={0.45}
          radius={1}
          wireframe
          transparent
          opacity={0.25}
          emissive="#10b981"
          emissiveIntensity={0.8}
        />
      </Sphere>
    </Float>
  );
};

export const NeuralBrainCanvas = () => (
  <div className="h-[500px] w-full cursor-grab active:cursor-grabbing">
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} color="#10b981" intensity={2} />
      <BrainCore />
    </Canvas>
  </div>
);