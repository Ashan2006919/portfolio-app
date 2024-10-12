import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

useGLTF.preload("/robot.glb");

export default function Model() {
  const group = useRef<Group>(null);
  const { animations, scene } = useGLTF("/robot.glb");
  const { actions } = useAnimations(animations, scene);
  const scroll = useScroll();

  useEffect(() => {
    console.log(actions);
    // @ts-expect-error
    actions["Experiment"].play().paused = true;
  }, [actions]);

  useFrame(() => {
    // @ts-expect-error
    actions["Experiment"].time =
      // @ts-expect-error
      (actions["Experiment"].getClip().duration * scroll.offset) / 4;
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}
