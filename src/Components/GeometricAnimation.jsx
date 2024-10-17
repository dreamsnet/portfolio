// src/Particles.js
import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = () => {
  const count = 1000; // Nombre de particules
  const particlesRef = useRef();

  useEffect(() => {
    const positions = new Float32Array(count * 3); // x, y, z pour chaque particule
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10; // Position x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10; // Position y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // Position z
    }
    
    // Vérifie si particlesRef.current existe avant de définir la géométrie
    if (particlesRef.current) {
      particlesRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    }
  }, [count]);

  // Animation des particules
  useFrame(() => {
    // Vérifie si particlesRef.current et sa géométrie sont définis avant d'accéder aux propriétés
    if (particlesRef.current && particlesRef.current.geometry) {
      const positions = particlesRef.current.geometry.attributes.position.array;
      for (let i = 0; i < count; i++) {
        positions[i * 3 + 1] += Math.sin(Date.now() * 0.001 + positions[i * 3]) * 0.01; // Animation verticale
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true; // Indiquer que les positions ont changé
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry />
      <pointsMaterial size={0.1} color="white" />
    </points>
  );
};

const ParticleCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <Particles />
    </Canvas>
  );
};

export default ParticleCanvas;
