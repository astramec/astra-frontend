import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Stars, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Sun() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1.5, 32, 32]} position={[0, 0, 0]}>
      <meshStandardMaterial 
        color="#FDB813" 
        emissive="#FDB813" 
        emissiveIntensity={0.3}
        roughness={0.5}
      />
      <pointLight intensity={0.8} distance={50} decay={2} />
    </Sphere>
  );
}

interface OrbitingPlanetProps {
  orbitRadius: number;
  size: number;
  color: string;
  speed: number;
  offset: number;
  mouseSpeed: number;
}

function OrbitingPlanet({ orbitRadius, size, color, speed, offset, mouseSpeed }: OrbitingPlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const angle = useRef(offset);
  
  useFrame(() => {
    if (meshRef.current) {
      // Update angle based on base speed and mouse influence
      angle.current += speed * mouseSpeed;
      
      // Calculate position based on orbit
      const x = Math.cos(angle.current) * orbitRadius;
      const z = Math.sin(angle.current) * orbitRadius;
      
      meshRef.current.position.x = x;
      meshRef.current.position.z = z;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Sphere ref={meshRef} args={[size, 32, 32]}>
      <meshStandardMaterial color={color} roughness={0.4} metalness={0.6} />
    </Sphere>
  );
}

export const InteractiveSolarSystem = () => {
  const [mouseSpeed, setMouseSpeed] = useState(1);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    // Map mouse X position to speed: left (-1) = faster reverse, right (1) = faster forward
    // Range: -2 to 2
    setMouseSpeed(x * 2);
  };

  return (
    <div 
      className="absolute inset-0 -z-10"
      onMouseMove={handleMouseMove}
    >
      <Canvas camera={{ position: [0, 8, 15], fov: 60 }}>
        <ambientLight intensity={0.2} />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        {/* Sun */}
        <Sun />
        
        {/* Planets - Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune */}
        <OrbitingPlanet orbitRadius={3} size={0.25} color="#8C7853" speed={0.02} offset={0} mouseSpeed={mouseSpeed} />
        <OrbitingPlanet orbitRadius={4.5} size={0.4} color="#FFC649" speed={0.015} offset={1} mouseSpeed={mouseSpeed} />
        <OrbitingPlanet orbitRadius={6} size={0.45} color="#4A90E2" speed={0.012} offset={2} mouseSpeed={mouseSpeed} />
        <OrbitingPlanet orbitRadius={7.5} size={0.35} color="#E27B58" speed={0.01} offset={3} mouseSpeed={mouseSpeed} />
        <OrbitingPlanet orbitRadius={10} size={0.9} color="#C88B3A" speed={0.006} offset={4} mouseSpeed={mouseSpeed} />
        <OrbitingPlanet orbitRadius={12} size={0.8} color="#FAD5A5" speed={0.004} offset={5} mouseSpeed={mouseSpeed} />
        <OrbitingPlanet orbitRadius={14} size={0.6} color="#4FD0E7" speed={0.003} offset={6} mouseSpeed={mouseSpeed} />
        <OrbitingPlanet orbitRadius={16} size={0.55} color="#4166F5" speed={0.002} offset={0.5} mouseSpeed={mouseSpeed} />
        
        <OrbitControls enableZoom={true} enablePan={false} minDistance={10} maxDistance={30} />
      </Canvas>
    </div>
  );
};
