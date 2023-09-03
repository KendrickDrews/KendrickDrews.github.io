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

    const { position, rotation, scale } = useControls({
        position: {
            value: {
                x: 0,
                y: 0,
                z: 0
            },
            min: -10,
            max: 10,
            steps: 0.1,
            joystick: 'invertY'
        },
        rotation: {
            value: {
                x: 0,
                y: 0,
                z: 0
            },
            min: -10,
            max: 10,
            steps: 0.1,
            joystick: 'invertY'
        },
        scale: {
            value: 1,
            steps: 0.01
        }
    })
    const desk = { pos: { x:-2.2, y:-2.2, z:-0.6 }, rotation: { x:0, y:3, z:0 }, scale: 8.5}
    const monitor = { pos: { x:0, y:0, z:0 }, rotation: { x:0, y:0, z:0 }, scale: 0.005}
    const mouse = { pos: { x:0, y:0, z:0 }, rotation: { x:0, y:0, z:0 }, scale: 0.005}
    const keyboard = { pos: { x:0, y:0, z:0 }, rotation: { x:0, y:0, z:0 }, scale: 0.005}
    const pc = { pos: { x:0, y:0, z:0 }, rotation: { x:0, y:0, z:0 }, scale: 0.005}
    const coffeeCup = { pos: { x:-0.6, y:1.4, z:-2.8 }, rotation: { x:0, y:0, z:0 }, scale: 0.6}
    const mug = { pos: { x:0, y:0.3, z:-1.5 }, rotation: { x:0, y:0, z:0 }, scale: 0.004}
    const lamp = { pos: { x:-1.4, y:1.0, z:-2.8 }, rotation: { x:0, y:0.8, z:0 }, scale: 3.2}
    const sandwhich = { pos: { x:0, y:0, z:0 }, rotation: { x:0, y:0, z:0 }, scale: 0}
    const plate = { pos: { x:0, y:0, z:0 }, rotation: { x:0, y:0, z:0 }, scale: 0}
    
    const [ zoom, setZoom ] = React.useState(false);
    const [ lightOn, setLightOn ] = React.useState(false);

    // const linkedInUrl = "https://www.linkedin.com/in/kendrickdrews/";
    // const githubUrl = "https://github.com/KendrickDrews"

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
                {/* Light from Computer */}
                {/* <rectAreaLight 
                visible={true}
                    width={2.5 }
                    height={ 1.65 }
                    intensity={ 65 }
                    color={ '#ff6900' }
                    rotation={ [ 0.1, Math.PI, 0 ] }
                    position={ [ 0, (computerPosition.y + 0.55 ),(computerPosition.z - 1.15 ) ] }
                /> */}

                <CoffeeCup 
                    position={[coffeeCup.pos.x, coffeeCup.pos.y, coffeeCup.pos.z]}
                    rotation={[coffeeCup.rotation.x, coffeeCup.rotation.y, coffeeCup.rotation.z]}
                    scale={coffeeCup.scale}
                />
                {/* <CoffeeCup 
                    position={[position.x, position.y, position.z]}
                    rotation={[rotation.x, rotation.y, rotation.z]}
                    scale={scale}
                /> */}
                <Desk 
                    position={[desk.pos.x, desk.pos.y, desk.pos.z]}
                    rotation={[desk.rotation.x, desk.rotation.y, desk.rotation.z]}
                    scale={desk.scale}
                />
                {/* <Desk 
                    position={[position.x, position.y, position.z]}
                    rotation={[rotation.x, rotation.y, rotation.z]}
                    scale={scale}
                /> */}
                <DeskLamp 
                    position={[lamp.pos.x, lamp.pos.y, lamp.pos.z]}
                    rotation={[lamp.rotation.x, lamp.rotation.y, lamp.rotation.z]}
                    scale={lamp.scale}
                />
                {/* <DeskLamp 
                    position={[position.x, position.y, position.z]}
                    rotation={[rotation.x, rotation.y, rotation.z]}
                    scale={scale}
                /> */}
                <Mug 
                    position={[mug.pos.x, mug.pos.y, mug.pos.z]}
                    rotation={[mug.rotation.x, mug.rotation.y, mug.rotation.z]}
                    scale={mug.scale}
                /> 
                {/* <Mug 
                    position={[position.x, position.y, position.z]}
                    rotation={[rotation.x, rotation.y, rotation.z]}
                    scale={scale}
                /> */}
                {/* <Keyboard 
                    position={[keybaord.pos.x, keybaord.pos.y, keybaord.pos.z]}
                    rotation={[keybaord.rotation.x, keybaord.rotation.y, keybaord.rotation.z]}
                    scale={keyboard.scale} 
                /> */}
                {/* <Keyboard 
                    position={[position.x, position.y, position.z]}
                    rotation={[rotation.x, rotation.y, rotation.z]}
                    scale={scale} 
                /> */}
                {/* <Mouse 
                    position={[mouse.pos.x, mouse.pos.y, mouse.pos.z]}
                    rotation={[mouse.rotation.x, mouse.rotation.y, mouse.rotation.z]}
                    scale={mouse.scale} 
                /> */}
                {/* <Mouse 
                    position={[position.x, position.y, position.z]}
                    rotation={[rotation.x, rotation.y, rotation.z]}
                    scale={scale} 
                /> */}
                {/* <Monitor 
                    position={[Monitor.pos.x, Monitor.pos.y, Monitor.pos.z]}
                    rotation={[Monitor.rotation.x, Monitor.rotation.y, Monitor.rotation.z]}
                    scale={monitor.scale} 
                /> */}
                {/* <Monitor 
                    position={[position.x, position.y, position.z]}
                    rotation={[rotation.x, rotation.y, rotation.z]}
                    scale={scale} 
                /> */}
                {/* <PC 
                    position={[pc.pos.x, pc.pos.y, pc.pos.z]}
                    rotation={[pc.rotation.x, pc.rotation.y, pc.rotation.z]}
                    scale={pc.scale} 
                /> */}
                {/* <PC 
                    position={[position.x, position.y, position.z]}
                    rotation={[rotation.x, rotation.y, rotation.z]}
                    scale={scale} 
                /> */}
                {/* <Plate 
                    position={[plate.pos.x, plate.pos.y, plate.pos.z]}
                    rotation={[plate.rotation.x, plate.rotation.y, plate.rotation.z]}
                    scale={plate.scale} 
                /> */}
                {/* <Plate 
                    position={[position.x, position.y, position.z]}
                    rotation={[rotation.x, rotation.y, rotation.z]}
                    scale={scale} 
                /> */}
                {/* <Sandwhich 
                    position={[sandwhich.pos.x, sandwhich.pos.y, sandwhich.pos.z]}
                    rotation={[sandwhich.rotation.x, sandwhich.rotation.y, sandwhich.rotation.z]}
                    scale={sandwhich.scale} 
                /> */}
                {/* <Sandwhich 
                    position={[position.x, position.y, position.z]}
                    rotation={[rotation.x, rotation.y, rotation.z]}
                    scale={scale} 
                />            */}
    </>
}
