/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 Keyboard.glb -t -T 
Files: Keyboard.glb [140.1KB] > Keyboard-transformed.glb [58.08KB] (59%)
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Keyboard1: THREE.Mesh
  }
  materials: {
    lambert3SG: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Keyboard(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Keyboard-transformed.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Keyboard1.geometry} material={materials.lambert3SG} />
    </group>
  )
}

useGLTF.preload('/Keyboard-transformed.glb')
