import React, { useRef } from 'react';
import { useFrame, Canvas } from '@react-three/fiber';
import { Mesh } from 'three';

const AnimatedCircle: React.FC = (props) =>{
    const meshRef = useRef<Mesh>(null!);
    useFrame((state, delta)=>{
      if (meshRef.current) {
         const scale =  Math.cos(state.clock.elapsedTime) * 0.2 + 1;

      // Mutate the object's properties directly
      meshRef.current.rotation.x += delta;
            // Rotate around X axis
      //meshRef.current.rotation.z += delta * 0.5; // Rotate around Y axis slower
    }
    })
    return(
    <mesh {...props} ref={meshRef}>
        <planeGeometry args={[10,10, 10, 10]} />
        <meshStandardMaterial color="white" emissive="gray" wireframe={true}/>

    </mesh>
    )
};

const AnimatedBox: React.FC = (props) => {
  // Get a reference to the mesh object
  const meshRef = useRef<Mesh>(null!);

  // useFrame runs on every animation frame
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Mutate the object's properties directly
      meshRef.current.rotation.x += delta; // Rotate around X axis
      meshRef.current.rotation.y += delta * 0.5; // Rotate around Y axis slower
    }
  }); // The delta ensures consistent speed regardless of the frame rate

  return (
    <mesh {...props} ref={meshRef}>
      <sphereGeometry  args={[2, 10, 10]}/>
      <meshStandardMaterial color="gray" wireframe={false} />
    </mesh>
  );
};
':'
const AnimatedCanvas: React.FC = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[20, 15, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[10, 5, 0]} />
      <AnimatedBox position={[0, 0, 0]} />
      {/*<AnimatedCircle position= {[0, -2, 1]}/>*/}
    </Canvas>
  );
};

export default AnimatedCanvas;

