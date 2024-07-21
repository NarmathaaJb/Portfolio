import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas, extend } from '@react-three/fiber';
import { Suspense } from 'react';
import * as THREE from 'three';
import CanvasLoader from '../Loader';

extend(THREE);

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={1}/>
      <primitive
        object={computer.scene}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas frameloop='demand' shadows camera={{position: [20, 3, 5], fov: 25}}
      gl={{preserveDrawingBuffer: true}}>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers/>
      </Suspense>

      <Preload all/>
    </Canvas>
  )
}

export default Computers