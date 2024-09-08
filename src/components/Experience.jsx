import React, { useRef, useEffect } from 'react';
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { PointLight, PointLightHelper } from 'three';
import { Room } from './Test';

const LightWithHelper = () => {
  const pointLightRef = useRef();
  const { scene } = useThree();

  useEffect(() => {
    if (pointLightRef.current) {
      const helper = new PointLightHelper(pointLightRef.current, 1);
      scene.add(helper);
      
      return () => {
        scene.remove(helper);
      };
    }
  }, [scene]);

  return (
    <pointLight 
      ref={pointLightRef} 
      position={[0, 0, 0]} 
      distance={50}
      intensity={10} 
      decay={5} 
      color={"#FFFF00"}
    />
  );
};

export const Experience = () => {
  return (
    <Canvas style={{ width: '100%', height: '100%' }}>
      <ambientLight intensity={0.5} />
      <LightWithHelper />
      <Room />
      <OrbitControls />
    </Canvas>
  );
};
