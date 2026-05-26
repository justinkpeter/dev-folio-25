"use client";

import { Suspense, useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { SkinnedMesh, Group } from "three";
import type { ThreeElements } from "@react-three/fiber";

const MODEL_URL = "/models/model.glb";

interface AvatarMeshProps {
  position: ThreeElements["group"]["position"];
}

function AvatarMesh({ position }: AvatarMeshProps) {
  const { nodes } = useGLTF(MODEL_URL);
  const groupRef = useRef<Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * -2;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const { hair, eyeL, eyeR, head } = useMemo(
    () => ({
      hair: nodes.Wolf3D_Hair as SkinnedMesh,
      eyeL: nodes.EyeLeft as SkinnedMesh,
      eyeR: nodes.EyeRight as SkinnedMesh,
      head: nodes.Wolf3D_Head as SkinnedMesh,
    }),
    [nodes],
  );

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y +=
      (mouse.current.x * 0.4 - groupRef.current.rotation.y) * 0.05;
    groupRef.current.rotation.x +=
      (-mouse.current.y * 0.1 - groupRef.current.rotation.x) * 0.05;
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

useGLTF.preload(MODEL_URL);

export default function Model() {
  return (
    <Canvas
      camera={{ position: [0.2, 0.6, 6.25], fov: 4 }}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        inset: 0,
        zIndex: 1,
      }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight intensity={1.2} position={[5, 5, 5]} />
      <directionalLight intensity={0.4} position={[-5, 2, -5]} />
      <Suspense fallback={null}>
        <AvatarMesh position={[0, -1.7, 0]} />
      </Suspense>
      <OrbitControls
        enableRotate={false}
        enablePan={false}
        enableZoom={false}
      />
    </Canvas>
  );
}
