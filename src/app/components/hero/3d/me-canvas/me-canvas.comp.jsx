import React from 'react'
import * as THREE from 'three'
import { Canvas } from 'react-three-fiber'
import Controls from '../orbit-controls/orbit-controls.comp'
import Me from '../me/me3d.comp'

const meCanvas = ({ rotation, controls }) => {

    return (
        <Canvas
            pixelRatio={window.devicePixelRatio}
            camera={{ position: [0, 0, 0] }}
            onCreated={({ gl }) => {
                gl.shadowMap.enabled = true
                gl.shadowMap.type = THREE.PCFSoftShadowMap
            }}>{({ camera, scene }) => (
                <>
                    {controls && <Controls />}
                    <spotLight
                        intensity={1}
                        position={[0, 5, 10]}
                        penumbra={1}
                        castShadow
                    />
                    <ambientLight intensity={2.2} />
                    <Me camera={camera} rotation={rotation} />
                </>
            )}
        </Canvas>
    )
}

export default meCanvas