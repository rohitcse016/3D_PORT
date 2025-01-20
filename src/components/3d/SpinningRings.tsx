import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Torus } from '@react-three/drei';

export const SpinningRings = () => {
  const group = useRef();

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.x = state.clock.elapsedTime * 0.3;
      group.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={group}>
      {[0, 1, 2].map((ring) => (
        <Torus
          key={ring}
          args={[3 + ring * 0.5, 0.2, 16, 100]}
          rotation={[Math.PI / 2, 0, ring * Math.PI / 3]}
        >
          <meshStandardMaterial
            color={`hsl(${ring * 100}, 70%, 50%)`}
            wireframe
            transparent
            opacity={0.3}
          />
        </Torus>
      ))}
    </group>
  );
};