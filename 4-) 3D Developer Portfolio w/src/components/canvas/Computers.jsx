import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  console.log(computer);
  return (
      <mesh>
          <hemisphereLight intensity={0.15} groundColor="black" />
          <pointLight intensity={1} />
          <spotLight 
            position={[-20,50,10]}
            angle={.15}
            penumbra={1}
            intensity={.85}
            castShadow
            shadow-mapSize={1024}  
          />
          <primitive
              object={computer.scene}
              scale={0.75}
              position={[0, -3.4, -1]}
              rotation={[-0.01, -0.2, -0.1]}
          />
      </mesh>
  );
};

const ComputersCanvas = () => {
  return (
      <Canvas
          frameloop="demand"
          shadows
          camera={{
              position: [20, 3, 0],
              fov: 25,
          }}
          gl={{ preserveDrawingBuffer: true }}>
          <Suspense fallback={<CanvasLoader />}>
              <OrbitControls
                  enableZoom={false}
                  maxPolarAngle={Math.PI / 2}
                  minPolarAngle={Math.PI / 2}
              />
              <Computers />
          </Suspense>
          <Preload all />
      </Canvas>
  );
};
export default ComputersCanvas;