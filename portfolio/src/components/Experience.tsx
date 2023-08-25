import React from 'react'
// import * as THREE from 'three'
import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF, PerspectiveCamera,  } from '@react-three/drei'
import { Button, Tooltip  } from 'antd'
import Resume from './Resume'
import { useFrame, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { CloseOutlined, FullscreenExitOutlined, FullscreenOutlined, ZoomInOutlined, ZoomOutOutlined } from '@ant-design/icons'


export default function Experience() {

    const {position} = useControls({
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
        }
    })
    
    const [zoom, setZoom] = React.useState(false)


    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    const computerPosition = {x: -0.5, y: - 1.2, z: - 1.2}
    const zoomButtonPosition = {x: -2.3, y: 1.2, z: -2.8}

    const computerRef = React.useRef<any>()

    const cameraRef = React.useRef<any>()
    const cameraZoom = zoom ? 1 : 8;

    const cam = useThree((state) => state.camera)

    function focusScreen() {

        if (zoom) {
            cam.lookAt(0,0,0);
            setZoom(!zoom);
        }
        else {
            cam.lookAt(computerRef.current.position);
            cam.rotation.set(0.1, 0.4, 0);
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
            position={[0,0, cameraZoom]}
            rotation={[0,0,0]}
        />
        <PresentationControls 
            global 
            rotation={ [0.13, 0.5, 0] }
            polar={ [ -0.4, 0.2] }
            azimuth={ [ -1, 0.75] }
            // config={ { mass: 2, tension: 200 } }
            // snap={{ mass: 4, tension: 200 } }
        >
            <Float rotationIntensity={0.4}>
                {/* Light from Computer */}
                <rectAreaLight 
                visible={true}
                    width={2.5 }
                    height={ 1.65 }
                    intensity={ 65 }
                    color={ '#ff6900' }
                    rotation={ [ 0.1, Math.PI, 0 ] }
                    position={ [ 0, (computerPosition.y + 0.55 ),(computerPosition.z - 1.15 ) ] }
                />
                {/* Computer */}
                <primitive 
                    ref={computerRef}
                    object={computer.scene} 
                    position-x={ computerPosition.x }
                    position-y={ computerPosition.y }
                    position-z={ computerPosition.z }
                >
                    <Html
                        transform
                        occlude="blending"
                        wrapperClass='htmlScreen'
                        distanceFactor={ 1.17 }
                        position={ [ 0, 1.56, -1.4 ] }
                        rotation-x={ -0.256 }
                        zIndexRange={ [100,0] }
                    > 
                        <Resume />
                        
                    </Html>
                </primitive>
                {/* Zoom Button */}
                <Html
                    transform
                    occlude="blending"
                    wrapperClass='floatingButton'
                    distanceFactor={ zoom ? 2.0 : 3.25 }
                    position={ [ zoomButtonPosition.x, zoomButtonPosition.y, zoomButtonPosition.z ] }
                    rotation-x={ -0.256 }
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

                <Text 
                    // font=""
                    fontSize={ 0.5 }
                    position={ [ 2, 0.75, 0.75 ] }
                    rotation-y={ -1.25 } 
                    maxWidth={ 2 }
                    textAlign='center'
                > Kendrick Drews </Text>
            </Float>
        </PresentationControls>

        <ContactShadows 
            position-y={ - 1.4 } 
            opacity={ 0.4 }
            scale={ 5 }
            blur={ 5.4 }
        />
        
    </>
}