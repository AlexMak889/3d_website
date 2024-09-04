import React from 'react'
import { useGLTF } from '@react-three/drei'
                
export function Model(props) {
 const { nodes, materials } = useGLTF('models/scene.glb')
 return (
  <group {...props} dispose={null}>
    <mesh geometry={nodes.Sphere.geometry} material={materials['Material.003']} position={[-2.318, 1.219, 2.344]} />
    <mesh geometry={nodes.Cube.geometry} material={materials['Material.001']} position={[0.635, 1.454, -3.365]} />
    <mesh geometry={nodes.Sphere001.geometry} material={materials['Material.002']} position={[-1.529, 2.411, -0.9]} />
   </group>
 )
}
useGLTF.preload('models /scene.glb');
