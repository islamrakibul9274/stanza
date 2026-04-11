import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

const NeuralSphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    sphereRef.current.rotation.y = time * 0.1;
    sphereRef.current.rotation.x = time * 0.05;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={sphereRef} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#10b981"
          speed={3}
          distort={0.4}
          radius={1}
          wireframe
          transparent
          opacity={0.3}
        />
      </Sphere>
    </Float>
  );
};

const HeroCanvas = () => {
  return (
    <div className="absolute inset-0 -z-10 h-screen w-full opacity-40">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#10b981" intensity={2} />
        <NeuralSphere />
      </Canvas>
    </div>
  );
};

export default HeroCanvas;