import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import "./App.css";
import {
  OrbitControls,
  MeshWobbleMaterial,
  useHelper,
} from "@react-three/drei";
import { DirectionalLightHelper } from "three";
const Cube = ({ position, size, color }) => {
  const ref = useRef();

  /*   useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 2.0;
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 3;
  }); */

  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={size} />
      {/*<meshStandardMaterial color={color} />*/}
      <MeshWobbleMaterial factor={2} speed={5} color={color} />
    </mesh>
  );
};

const Sphere = ({ position, size, color }) => {
  const ref = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useFrame((state, delta) => {
    const speed = isHovered ? 1 : 0.2;
    ref.current.rotation.y += delta * speed;
  });

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
      onPointerLeave={() => setIsHovered(false)}
      onClick={() => setIsClicked(!isClicked)}
      scale={isClicked ? 1.5 : 1}
    >
      <sphereGeometry args={size} />
      <meshStandardMaterial
        color={isHovered ? "orange" : "lightblue"}
        wireframe
      />
    </mesh>
  );
};

const Scene = () => {
  const directionalLightRef = useRef();

  useHelper(directionalLightRef, DirectionalLightHelper, 0.5, "white");

  return (
    <>
      <directionalLight
        position={[0, 1, 2]}
        intensity={2}
        ref={directionalLightRef}
        color={"white"}
      />
      <ambientLight intensity={0.1} />
      {/*       <group position={[0, -1, 0]}>
        <Cube position={[1, 0, 0]} color={"green"} size={[1, 1, 1]} />
        <Cube position={[-1, 0, 0]} color={"hotpink"} size={[1, 1, 1]} />

        <Cube position={[-1, 2, 0]} color={"blue"} size={[1, 1, 1]} />
        <Cube position={[1, 2, 0]} color={"yellow"} size={[1, 1, 1]} />
      </group> */}
      <Sphere position={[0, 0, 0]} args={[1, 20, 30]} color={"orange"} />
      {/*       <Cube position={[0, 0, 0]} color={"blue"} size={[1, 1, 1]} />
       */}{" "}
      <OrbitControls />
    </>
  );
};

const App = () => {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
};

export default App;
