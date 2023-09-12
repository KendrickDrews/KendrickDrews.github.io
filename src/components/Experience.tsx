import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Html, ContactShadows, PresentationControls, Float, Environment, useGLTF, PerspectiveCamera, Circle, Text, useMask, Plane  } from '@react-three/drei'
import { Button, Tooltip  } from 'antd'
import Resume from './Resume'
import { useFrame, useThree, extend } from '@react-three/fiber'
import { useSpring, animated } from '@react-spring/three'
// import { useControls } from 'leva'
import { DoubleLeftOutlined, GithubOutlined, LinkedinOutlined, ZoomInOutlined, ZoomOutOutlined } from '@ant-design/icons'
import DesktopScene from './DesktopScene'
import { useControls } from 'leva'
import { CameraController } from './CameraController'
import { invert } from 'three/examples/jsm/nodes/Nodes.js'




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
    const presentationRotation = {x: 0, y: 0.2, z: 0 }

    

    const linkedInUrl = "https://www.linkedin.com/in/kendrickdrews/";
    const githubUrl = "https://github.com/KendrickDrews"


    const zoomButtonConfig = { position: { x: 0.7, y: 2.362, z: -2.6 }, rotation: { x: 0.0, y: -0.2, z: 0 } }
    const resumeConfig = { position: { x: 1.792, y: 1.92, z: -2.355 }, rotation: { x: 0.0, y: -0.2, z: 0 }, scale: 0.378 }

    const cam = useThree((state) => state.camera) 
    const { scale } = useSpring({ scale: zoom ? 0.175 : 0.35, config: { duration: 1650, tension: 120, friction: 14 } })

    function focusScreen() {

        if (zoom) {

            setCamPosition(cameraConfig.position.one)
            setCamTarget(cameraConfig.target.one)
            
            cam.updateProjectionMatrix()
            setZoom(!zoom);
        }
        else {

            setCamPosition(cameraConfig.position.two)
            setCamTarget(cameraConfig.target.two)
            
            cam.updateProjectionMatrix()
            setZoom(!zoom);
            
        }
    }
    const stencil = useMask(1)

    return <>

        <Environment preset="city" />
        {/* color: '#241a1a'2b0717 */}
        <color args={ [ '#e0b7ff' ] } attach="background" />
        <fog attach="fog" near={15} far={20} args={['#e0b7ff', 60, 100]} />
        <CameraController position={camPosition} target={camTarget} />

        <PresentationControls 
            global 
            rotation={ [ presentationRotation.x, presentationRotation.y, presentationRotation.z ] }
            polar={ [ -1, 1] }
            azimuth={ [ -2, 1] }
            config={ { mass: 2, tension: 200 } }
            snap={{ mass: 4, tension: 200 } }
        >
            {/* <Plane args={[5,5]}/> */}
            <group position={[0,0,0]}>
            <Plane args={[250,250]} position={[0,-2.5,0]} rotation={[-1.5707,0,0]}>
                <meshStandardMaterial color="hotpink" />
            </Plane>
                
                <DesktopScene />
                <Html
                    transform
                    occlude="blending"
                    wrapperClass="htmlScreen"
                    distanceFactor={ resumeConfig.scale }
                    position={[resumeConfig.position.x, resumeConfig.position.y, resumeConfig.position.z]}
                    rotation={[resumeConfig.rotation.x, resumeConfig.rotation.y, resumeConfig.rotation.z]}
                    zIndexRange={ [100,0] }
                > 
                    <Resume />
                </Html>
                
            </group>
                {/* Zoom Button */}
                <animated.group 
                    scale={scale}
                    position={[zoomButtonConfig.position.x, zoomButtonConfig.position.y, zoomButtonConfig.position.z]}
                    rotation={[zoomButtonConfig.rotation.x, zoomButtonConfig.rotation.y, zoomButtonConfig.rotation.z]}
                >
                        <Html
                            transform
                            occlude="blending"
                            wrapperClass='floatingButton'
                            zIndexRange={ [100,2] }
                        >
                            <Button 
                                shape="circle"
                                onClick={() => focusScreen()}
                                icon={zoom ? <ZoomOutOutlined /> : <ZoomInOutlined />}
                            />
                        </Html>
                    
                </animated.group>
            <group position={[ 4.4, 2.4, 3.4 ]} rotation-y={-1.6}>
                <Text position={[0,1,0]} color={"black"}>
                    Kendrick Drews
                </Text>
                <Text position={[0, 0.25, 0]} color={"black"} scale={0.5}>
                    Front End Developer / UI / UX
                </Text>
                <group position={[0.50,-0.5,0]}>
                    <Html 
                        transform
                        occlude="blending"
                        wrapperClass="banner-resume"
                        position={[-3,0,0]}
                    >
                        <Button type="primary" className="banner-btns" onClick={() => focusScreen()}> <DoubleLeftOutlined /> View Resume</Button>
                    </Html>
                    <Html 
                        transform
                        occlude="blending"
                        wrapperClass="banner-resume"
                        position={[0,0,0]}
                    >
                        <a href={linkedInUrl} target='_blank'><Button  className="banner-btns"  > <LinkedinOutlined />  LinkedIn  </Button></a>
                    </Html>
                    <Html 
                        transform
                        occlude="blending"
                        wrapperClass="banner-resume"
                        position={[2.5,0,0]}
                    >
                        <a href={githubUrl} target='_blank'><Button  className="banner-btns"  > <GithubOutlined />   Github </Button></a>
                    </Html>
                
                </group>
            </group>

                {/* <Html 
                    transform
                    occlude="blending"
                    wrapperClass="personal-banner"
                >
                    <a href={linkedInUrl} target='_blank'> <LinkedinOutlined /> LinkedIn </a>
                    <a href={githubUrl} target='_blank'> <GithubOutlined /> Github </a>
                    <button> <DoubleLeftOutlined /> View Resume </button>
                </Html> */}
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

