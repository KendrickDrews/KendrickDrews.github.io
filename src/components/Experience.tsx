import React from 'react'
import * as THREE from 'three'
import { Html, ContactShadows, PresentationControls, Float, Environment, useGLTF, PerspectiveCamera,  } from '@react-three/drei'
import { Button, Tooltip  } from 'antd'
import Resume from './Resume'
import { useFrame, useThree } from '@react-three/fiber'
// import { useControls } from 'leva'
import { ZoomInOutlined, ZoomOutOutlined } from '@ant-design/icons'
import DesktopScene from './DesktopScene'
import { useControls } from 'leva'
import { Vector3 } from 'three'

export default function Experience() {

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
            value: 0.5,
            steps: 0.1
        }
    })
    
    const [zoom, setZoom] = React.useState(false)
    const [camPosition, setCamPosition] = React.useState([1.2, 1.4, -1])

    const linkedInUrl = "https://www.linkedin.com/in/kendrickdrews/";
    const githubUrl = "https://github.com/KendrickDrews"

    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    const computerPosition = {x: -0.5, y: - 1.2, z: - 1.2}
    const zoomButtonConfig = { pos: { x: 0.6, y: 2.2, z: -2.6 }, rotation: { x: 0.0, y: -0.2, z: 0 } }
    const resumeConfig = { pos: { x: 1.803, y: 1.92, z: -2.4 }, rotation: { x: 0.0, y: -0.2, z: 0 }, scale: 0.391 }
    const zoomPosition = {x:1.8, y:1.07, z:-2.4}

    const computerRef = React.useRef<any>()

    const cameraRef = React.useRef<any>()
    const cameraZoom = zoom ? -1 : 10;
    const camX = zoom ? 0 : 1.2;
    const camY = zoom ? 0 : 2.0;

    const cam = useThree((state) => state.camera)

    function focusScreen() {

        if (zoom) {
            cam.position.set(0, 0, 8)
            cam.lookAt(0,0,0);
            
            cam.updateProjectionMatrix()
            setZoom(!zoom);
        }
        else {
            
            cam.lookAt(resumeConfig.pos.x, resumeConfig.pos.y, resumeConfig.pos.z)
            // cam.position.set(1.3, 1.8, -1)
            cam.updateProjectionMatrix()
            setZoom(!zoom);
        }
    }

    return <>

        <Environment preset="city" />

        <color args={ [ '#241a1a' ] } attach="background" />
        <PerspectiveCamera 
            makeDefault 
            ref={cameraRef}
            position={[1.4, 1.9, 8]}
            rotation={[0, -0.2, 0]}
        />
        <PresentationControls 
            global 
            rotation={ [0.13, 0.5, 0] }
            polar={ [ -1, 1] }
            azimuth={ [ -2, 1] }
            // config={ { mass: 2, tension: 200 } }
            // snap={{ mass: 4, tension: 200 } }
        >
                {/* Light from Computer */}
                <group position={[0,0,0]}>

                <DesktopScene />
                
                <Html
                    ref={computerRef}
                    transform
                    occlude="blending"
                    wrapperClass="htmlScreen"
                    distanceFactor={ resumeConfig.scale }
                    position={[resumeConfig.pos.x, resumeConfig.pos.y, resumeConfig.pos.z]}
                    rotation={[resumeConfig.rotation.x, resumeConfig.rotation.y, resumeConfig.rotation.z]}
                    zIndexRange={ [100,0] }
                > 
                    <Resume />
                        
                </Html>
                    
                {/* Zoom Button */}
                <Html
                    transform
                    // occlude="blending"
                    wrapperClass='floatingButton'
                    distanceFactor={ zoom ? 2.0 : 3.25 }
                    position={[zoomButtonConfig.pos.x, zoomButtonConfig.pos.y, zoomButtonConfig.pos.z]}
                    rotation={[zoomButtonConfig.rotation.x, zoomButtonConfig.rotation.y, zoomButtonConfig.rotation.z]}
                    zIndexRange={ [100,0] }
                >
                    <Tooltip title={zoom ? "Zoom Out" : "Zoom In"}>
                        <Button 
                            shape="circle"
                            onClick={() => focusScreen()}
                            icon={zoom ? <ZoomOutOutlined /> : <ZoomInOutlined />}
                        />
                    </Tooltip>
                </Html>
                </group>
                <Html 
                    transform
                    // occlude="blending"
                    wrapperClass="personal-banner"
                    position={ [ 4.4, 2.4, 4.4 ] }
                    rotation-y={-1.6}
                >
                    <h1> Kendrick Drews </h1>
                    <h3> Front End Developer / UI / UX </h3>
                    <a href={linkedInUrl} target='_blank'>LinkedIn </a>
                    <a href={githubUrl} target='_blank'> Github </a>
                    <button> View Resume </button>
                </Html>
        </PresentationControls>

        {/* <ContactShadows 
            position-y={ - 2.4 } 
            rotation={[1,0,0]}
            opacity={ 0.4 }
            scale={ 5 }
            blur={ 5.4 }
        /> */}
        
    </>
}