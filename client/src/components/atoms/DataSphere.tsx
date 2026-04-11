import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei';
import * as THREE from 'three';

const DataSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = time * 0.2; // Constant neural rotation [cite: 71]
  });

  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1.5, 64, 64]}>
        <MeshDistortMaterial
          color="#10b981"
          speed={4}
          distort={0.6}
          radius={1}
          wireframe={true}
          transparent={true}
          opacity={0.2}
          emissive="#10b981"
          emissiveIntensity={0.5}
        />
      </Sphere>
    </Float>
  );
};

export const AnalyticsCanvas = () => (
  <div className="h-[400px] w-full">
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} color="#10b981" intensity={2} />
      <DataSphere />
    </Canvas>
  </div>
);