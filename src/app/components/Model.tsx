"use client";

import { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { SkinnedMesh, Group } from "three";
import type { ThreeElements } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

interface AvatarMeshProps {
  url: string;
  position: ThreeElements["group"]["position"];
}

const mouse = { x: 0, y: 0 };

if (typeof window !== "undefined") {
  window.addEventListener("mousemove", (e) => {
    mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
    mouse.y = (e.clientY / window.innerHeight - 0.5) * -2;
  });
}

function AvatarMesh({ url, position }: AvatarMeshProps) {
  const { nodes } = useLoader(GLTFLoader, url);
  const groupRef = useRef<Group>(null);

  const hair = nodes.Wolf3D_Hair as SkinnedMesh;
  const eyeL = nodes.EyeLeft as SkinnedMesh;
  const eyeR = nodes.EyeRight as SkinnedMesh;
  const head = nodes.Wolf3D_Head as SkinnedMesh;

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y +=
      (mouse.x * 0.4 - groupRef.current.rotation.y) * 0.05;
    groupRef.current.rotation.x +=
      (-mouse.y * 0.1 - groupRef.current.rotation.x) * 0.05;
  });

  return (
    <group ref={groupRef} position={position} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        geometry={hair.geometry}
        material={hair.material}
        skeleton={hair.skeleton}
      />
      <skinnedMesh
        name="EyeLeft"
        geometry={eyeL.geometry}
        material={eyeL.material}
        skeleton={eyeL.skeleton}
        morphTargetDictionary={eyeL.morphTargetDictionary}
        morphTargetInfluences={eyeL.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={eyeR.geometry}
        material={eyeR.material}
        skeleton={eyeR.skeleton}
        morphTargetDictionary={eyeR.morphTargetDictionary}
        morphTargetInfluences={eyeR.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={head.geometry}
        material={head.material}
        skeleton={head.skeleton}
        morphTargetDictionary={head.morphTargetDictionary}
        morphTargetInfluences={head.morphTargetInfluences}
      />
    </group>
  );
}

export default function Model() {
  return (
    <Canvas
      camera={{ position: [0.2, 0.6, 6.25], fov: 4 }}
      className="model"
      style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
      data-cursor="View project"
    >
      <ambientLight intensity={0.6} />
      <directionalLight intensity={1.2} position={[5, 5, 5]} />
      <directionalLight intensity={0.4} position={[-5, 2, -5]} />
      <Suspense fallback={null}>
        <AvatarMesh url="/models/model.glb" position={[0, -1.7, 0]} />
      </Suspense>
      <OrbitControls
        enableRotate={false}
        enablePan={false}
        enableZoom={false}
      />
    </Canvas>
  );
}
