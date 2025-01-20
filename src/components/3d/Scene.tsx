import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float, Text3D, Center } from '@react-three/drei';
import { Suspense } from 'react';
import { FloatingCube } from './FloatingCube';
import { ParticleField } from './ParticleField';
import { SpinningRings } from './SpinningRings';

export const Scene = () => {
  return (
    <Canvas className="fixed top-0 left-0 w-full h-screen -z-10">
      <OrbitControls 
        enableZoom={false} 
        autoRotate 
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <ParticleField />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <group position={[0, 0, -5]}>
          <SpinningRings />
          <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
            <FloatingCube />
          </Float>
        </group>
      </Suspense>
    </Canvas>
  );
};