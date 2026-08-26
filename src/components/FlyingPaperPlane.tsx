"use client";

import React, { useRef, useLayoutEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Float } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function PlaneMesh() {
  const mesh = useRef<any>();
  // Note: /paper_plane.glb must be in the public/ folder. 
  // If unavailable, this will throw an error. 
  // Using a simple box as a placeholder for GLTF loader.
  const { scene } = useGLTF("/paper_plane.glb", true); 

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      mesh.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  useLayoutEffect(() => {
    if (!mesh.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "main",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    tl.to(mesh.current.position, { x: -3, y: 2, z: 0 }, 0)
      .to(mesh.current.rotation, { x: 0.2, y: 0.5, z: -0.2 }, 0)
      .to(mesh.current.position, { x: 3, y: -0.5, z: 1 }, 0.5)
      .to(mesh.current.rotation, { x: -0.2, y: -0.8, z: 0.3 }, 0.5)
      .to(mesh.current.position, { x: 0, y: -3, z: 2 }, 1)
      .to(mesh.current.rotation, { x: 0, y: 0, z: 0 }, 1);
  }, []);

  return <primitive ref={mesh} object={scene} scale={0.5} />;
}

export default function FlyingPaperPlane() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <PlaneMesh />
        </Float>
      </Canvas>
    </div>
  );
}