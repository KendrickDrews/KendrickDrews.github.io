import React from 'react'
import { ZoomOutOutlined, ZoomInOutlined } from '@ant-design/icons'
import { useGLTF, Float, Html } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { Tooltip, Button } from 'antd'
import { useControls } from 'leva'
import { CoffeeCup } from './CoffeeCup'
import { Keyboard } from './Keyboard'
import { Monitor } from './Monitor'
import { Mouse } from './Mouse'
import { PC } from './PC'
import { Desk } from './Desk'
import { DeskLamp } from './DeskLamp'
import { Mug } from './Mug'
import { Plate } from './Plate'
import { Sandwhich } from './Sandwhich'
import Resume from './Resume'

export default function DesktopScene() {

    // const { position, rotation, scale } = useControls({
    //     position: {
    //         value: {
    //             x: 0,
    //             y: 0,
    //             z: 0
    //         },
    //         min: -10,
    //         max: 10,
    //         steps: 0.1,
    //         joystick: 'invertY'
    //     },
    //     rotation: {
    //         value: {
    //             x: 0,
    //             y: 0,
    //             z: 0
    //         },
    //         min: -10,
    //         max: 10,
    //         steps: 0.1,
    //         joystick: 'invertY'
    //     },
    //     scale: {
    //         value: 1,
    //         steps: 0.01
    //     }
    // })
    const desk = { pos: { x:-2.2, y:-2.2, z:-0.6 }, rotation: { x:0, y:3, z:0 }, scale: 8.5}
    const monitor = { pos: { x:1.8, y:1.07, z:-2.4 }, rotation: { x:0, y:-0.2, z:0 }, scale: 0.005}
    const mouse = { pos: { x:2.4, y:1.05, z:-1.0 }, rotation: { x:0, y:-3.4, z:0 }, scale: 0.1}
    const keyboard = { pos: { x:0.8, y:1.047, z:-1.2 }, rotation: { x:0, y:-0.4, z:0 }, scale: 0.005}
    const pc = { pos: { x:4.2, y:-2.2, z:0 }, rotation: { x:0, y:-4.85, z:0 }, scale: 0.02}
    const coffeeCup = { pos: { x:-0.6, y:1.45, z:-2.8 }, rotation: { x:0, y:0, z:0 }, scale: 0.6}
    const mug = { pos: { x:3.6, y:1.047, z:-1.6 }, rotation: { x:0, y:-1.0, z:0 }, scale: 0.005}
    const lamp = { pos: { x:-1.4, y:1.07, z:-2.8 }, rotation: { x:0, y:0.8, z:0 }, scale: 3.2}
    const sandwhich = { pos: { x:-1.2, y:1.2, z:-1.6 }, rotation: { x:0, y:-2.6, z:0 }, scale: 1}
    const plate = { pos: { x:-1.2, y:1.05, z:-1.6 }, rotation: { x:0, y:0, z:0 }, scale: 0.02}
    
    const [ zoom, setZoom ] = React.useState(false);
    const [ lightOn, setLightOn ] = React.useState(false);
    console.log(lightOn)
    const linkedInUrl = "https://www.linkedin.com/in/kendrickdrews/";
    const githubUrl = "https://github.com/KendrickDrews"

    // const computerPosition = {x: -0.5, y: - 1.2, z: - 1.2}
    // const zoomButtonPosition = {x: -2.3, y: 1.2, z: -2.8}


    // const cameraRef = React.useRef<any>()
    // const cameraZoom = zoom ? 1 : 8;

    // const cam = useThree((state) => state.camera)

    // function focusScreen() {

    //     if (zoom) {
    //         cam.lookAt(0,0,0);
    //         setZoom(!zoom);
    //     }
    //     else {
    //         cam.lookAt(computerRef.current.position);
    //         cam.rotation.set(0.1, 0.4, 0);
    //         cam.updateProjectionMatrix()
    //         setZoom(!zoom);
    //     }
        
    // }

    return <>
        
        <rectAreaLight 
            visible={true}
            width={5 }
            height={ 5 }
            intensity={ 12 }
            color={ '#ffffff' }
            rotation={ [ 1.8, 1.8, 0 ] }
            position={ [ 4.8, 1.4, 6.2 ] }
            // position={[ position.x, position.y, position.z]}
            // rotation={[ rotation.x, rotation.y, rotation.z]}
        />
        {/* Light from Monitor */}
        <rectAreaLight 
            visible={true}
            width={ 1.75 }
            height={ 1.15 }
            intensity={ 15 }
            color={ '#52bdc7' }
            rotation={ [ 0, -3.35, 0 ] }
            position={ [ 1.8, 1.9, -2.4 ] }
            // position={[ position.x, position.y, position.z]}
            // rotation={[ rotation.x, rotation.y, rotation.z]}
        />
                

        <CoffeeCup 
            position={[coffeeCup.pos.x, coffeeCup.pos.y, coffeeCup.pos.z]}
            rotation={[coffeeCup.rotation.x, coffeeCup.rotation.y, coffeeCup.rotation.z]}
            scale={coffeeCup.scale}
        />
        <Desk 
            position={[desk.pos.x, desk.pos.y, desk.pos.z]}
            rotation={[desk.rotation.x, desk.rotation.y, desk.rotation.z]}
            scale={desk.scale}
        />
        <group onClick={() => setLightOn(!lightOn)}>
            <DeskLamp 
                position={[lamp.pos.x, lamp.pos.y, lamp.pos.z]}
                rotation={[lamp.rotation.x, lamp.rotation.y, lamp.rotation.z]}
                scale={lamp.scale}
            />
            <mesh visible scale={0.2}  position={[-0.85, 2.37, -2.27]} >
              <sphereGeometry args={[1, 16, 16]} />
              <meshStandardMaterial color="#FFFFED" transparent />
            </mesh>
        </group>
        <Mug 
            position={[mug.pos.x, mug.pos.y, mug.pos.z]}
            rotation={[mug.rotation.x, mug.rotation.y, mug.rotation.z]}
            scale={mug.scale}
        /> 
        <Keyboard 
            position={[keyboard.pos.x, keyboard.pos.y, keyboard.pos.z]}
            rotation={[keyboard.rotation.x, keyboard.rotation.y, keyboard.rotation.z]}
            scale={keyboard.scale} 
        />
        <Mouse 
            position={[mouse.pos.x, mouse.pos.y, mouse.pos.z]}
            rotation={[mouse.rotation.x, mouse.rotation.y, mouse.rotation.z]}
            scale={mouse.scale} 
        />
        <Monitor 
            position={[monitor.pos.x, monitor.pos.y, monitor.pos.z]}
            rotation={[monitor.rotation.x, monitor.rotation.y, monitor.rotation.z]}
            scale={monitor.scale} 
        />
        <PC 
            position={[pc.pos.x, pc.pos.y, pc.pos.z]}
            rotation={[pc.rotation.x, pc.rotation.y, pc.rotation.z]}
            scale={pc.scale} 
        />
        <Plate 
            position={[plate.pos.x, plate.pos.y, plate.pos.z]}
            rotation={[plate.rotation.x, plate.rotation.y, plate.rotation.z]}
            scale={plate.scale} 
        />
        <Sandwhich 
            position={[sandwhich.pos.x, sandwhich.pos.y, sandwhich.pos.z]}
            rotation={[sandwhich.rotation.x, sandwhich.rotation.y, sandwhich.rotation.z]}
            scale={sandwhich.scale} 
        />
    </>
}
