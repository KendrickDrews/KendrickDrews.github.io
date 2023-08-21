// import { useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import  Experience  from './components/Experience'

function App() {

  return (
    <div id="canvas-container">
      <Canvas>
        <Experience />
      </Canvas>
    </div>
  )
}

export default App
