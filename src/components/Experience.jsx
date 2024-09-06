//Experience.jsx
import React from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Test"; // Ensure this path is correct

export const Experience = () => {
  return (
    <Canvas style={{ width: '100%', height: '100%' }}>
      <ambientLight intensity={0.5} />
      <Model />
      <OrbitControls />
  </Canvas>
  );
};
