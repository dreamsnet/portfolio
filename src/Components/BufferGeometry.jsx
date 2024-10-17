import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleCanvas() {
  const pointsRef = useRef();

  const points = useMemo(() => {
    const p = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos((Math.random() * 2) - 1);
      const radius = 5; // Agrandit la sphère en augmentant le rayon

      p[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      p[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      p[i * 3 + 2] = radius * Math.cos(phi);
    }
    return p;
  }, []);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    pointsRef.current.rotation.y = time * 0.2;
  });

  return (
    <Points ref={pointsRef} positions={points} stride={3}>
      <PointMaterial size={0.05} color="aqua" />
    </Points>
  );
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
      <ambientLight />
      <ParticleCanvas />
    </Canvas>
  );
}
