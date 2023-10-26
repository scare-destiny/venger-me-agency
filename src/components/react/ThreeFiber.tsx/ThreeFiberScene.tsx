import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const SpinningCube: React.FC = () => {
  const meshRef = React.useRef<Mesh>(null!);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'blue'} />
    </mesh>
  );
};

const ThreeFiberScene: React.FC = () => (
  <Canvas>
    <SpinningCube />
  </Canvas>
);

export default ThreeFiberScene;
