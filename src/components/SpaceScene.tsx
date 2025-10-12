import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Stars } from "@react-three/drei";
import * as THREE from "three";

function Planet({ position, size, color }: { position: [number, number, number]; size: number; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[size, 32, 32]} position={position}>
      <meshStandardMaterial color={color} roughness={0.4} metalness={0.6} />
    </Sphere>
  );
}

export const SpaceScene = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <Planet position={[-4, 2, -5]} size={0.8} color="#8b5cf6" />
        <Planet position={[5, -2, -8]} size={1.2} color="#3b82f6" />
        <Planet position={[3, 3, -6]} size={0.6} color="#06b6d4" />
      </Canvas>
    </div>
  );
};
