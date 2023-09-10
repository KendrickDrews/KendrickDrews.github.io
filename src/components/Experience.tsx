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
import { CameraController } from './CameraController'

export default function Experience() {

    // const { position, rotation, scale } = useControls({
    //     position: {
    //         value: {
    //             x: 1.4,
    //             y: 2,
    //             z: -2.4
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
    //         value: 0.5,
    //         steps: 0.1
    //     }
    // })
    
    const [zoom, setZoom] = React.useState(false)

    const cameraConfig = {
        position: {
            one: { x: -2.5, y: 2.0, z: 6 },
            two: { x: 1.2, y: 1.925, z: -1.9 }
        },
        target: {
            one: { x: 4.6, y: 1.2, z: -1 },
            two: { x: 1.2, y: 1.925, z: -2.4 }
        }
    }

    const [camPosition, setCamPosition] = React.useState(cameraConfig.position.one)
    const [camTarget, setCamTarget] = React.useState(cameraConfig.target.one);
    // const presentationRotation = [0.23, 0.5, 0.1]
    const presentationRotation = {x: 0, y: 0.2, z: 0 }

    const linkedInUrl = "https://www.linkedin.com/in/kendrickdrews/";
    const githubUrl = "https://github.com/KendrickDrews"


    const zoomButtonConfig = { pos: { x: 0.7, y: 2.362, z: -2.6 }, rotation: { x: 0.0, y: -0.2, z: 0 } }
    const resumeConfig = { pos: { x: 1.803, y: 1.92, z: -2.355 }, rotation: { x: 0.0, y: -0.2, z: 0 }, scale: 0.391 }

    const computerRef = React.useRef<any>()

    const cam = useThree((state) => state.camera) 

    function focusScreen() {

        if (zoom) {
            
            setCamTarget(cameraConfig.target.one)
            setCamPosition(cameraConfig.position.one)
            
            cam.updateProjectionMatrix()
            setZoom(!zoom);

        }
        else {

            setCamTarget(cameraConfig.target.two)
            setCamPosition(cameraConfig.position.two)
            
            cam.updateProjectionMatrix()
            setZoom(!zoom);
            
        }
    }

    return <>

        <Environment preset="city" />

        <color args={ [ '#241a1a' ] } attach="background" />
        {/* <PerspectiveCamera 
            makeDefault 
            ref={cameraRef}
            position={[1.4, 1.9, 8]}
            rotation={[0, -0.2, 0]}
        /> */}
        <CameraController position={camPosition} target={camTarget} />
        <PresentationControls 
            global 
            rotation={ [ presentationRotation.x, presentationRotation.y, presentationRotation.z ] }
            polar={ [ -1, 1] }
            azimuth={ [ -2, 1] }
            // config={ { mass: 2, tension: 200 } }
            // snap={{ mass: 4, tension: 200 } }
        >
                {/* Light from Computer */}
                <group position={[0,0,0]}>

                <DesktopScene />
                {/* <mesh visible scale={0.2}  position={[position.x, position.y, position.z]} >
                  <sphereGeometry args={[1, 16, 16]} />
                  <meshStandardMaterial color="#FFFFED" transparent />
                </mesh> */}
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
                    occlude="blending"
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
                    occlude="blending"
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