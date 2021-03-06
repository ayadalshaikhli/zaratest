/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/ringGreenddd.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Round007.geometry} material={materials['Ring Material.001']} position={[-0.01, 1.49, 0]} scale={30.58} />
      <mesh geometry={nodes.Round.geometry} material={materials['Diamond.001']} position={[-0.01, 2.38, 0]} scale={[3.64, 3.63, 3.64]} />
    </group>
  )
}

useGLTF.preload('/ringGreenddd.glb')
