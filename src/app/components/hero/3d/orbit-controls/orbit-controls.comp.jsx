import React, { useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { useRender, extend, useThree } from 'react-three-fiber'

extend({ OrbitControls })

const Controls = () => {

    const orbitRef = useRef()
    const { camera, gl } = useThree()

    useRender(() => {
        orbitRef.current.update()
        // console.log(`[Controls]`, camera.rotation)
    })

    return (
        <orbitControls
            ref={orbitRef}
            args={[camera, gl.domElement]}
            // maxPolarAngle={Math.PI / 3}
            // minPolarAngle={Math.PI / 3}
            // autoRotate
            // rotateSpeed={10}
            enableDamping
            dampingFactor={0.1}
            enableZoom={true}
        />
    )
}

export default Controls