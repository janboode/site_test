import React, { useState } from 'react'
import { Route, Link } from 'react-router-dom'

import * as THREE from 'three'
import { Canvas } from 'react-three-fiber'
import Controls from './components/hero/3d/orbit-controls/orbit-controls.comp'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUserPlus } from '@fortawesome/free-solid-svg-icons'

import Hero from './components/hero/hero.comp'
import Me from './components/hero/3d/me3d.comp'

import style from './App.scss'

import Logo from '../assets/svg/bryte_logo.svg'

const App = () => {

    const [rotation, setRotation] = useState(45 * Math.PI / 180)

    const handleMouseOver = (e) => {
        // console.log(e.target);
        setRotation(Math.random() * 45 * (Math.PI / 180))
    }

    return (
        <div className={style.App}>
            <div className={style.Container}>
                <header>
                    <Logo />
                    <nav>
                        <ul>
                            <li onMouseOver={handleMouseOver}><a href="#">Over Bryte</a></li>
                            <li><a href="#">Cursussen</a></li>
                            <li><a href="#">Bryte Mod</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <div className={style.search}>
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                        <div className={style.signUp}>
                            <FontAwesomeIcon
                                icon={faUserPlus}
                                style={{ color: 'white', paddingRight: '5px' }}
                            />
                            Schrijf je in!
                         </div>
                    </nav>
                </header>
            </div>
            <div className={style.bottomBorder}></div>
            <div className={style.content}>
                <Canvas
                    pixelRatio={window.devicePixelRatio}
                    camera={{ position: [0, 0, 0] }}
                    onCreated={({ gl }) => {
                        gl.shadowMap.enabled = true
                        gl.shadowMap.type = THREE.PCFSoftShadowMap
                    }}>{({ camera, scene }) => (
                        <>
                            <Controls />
                            <spotLight intensity={1} position={[0, 5, 10]} penumbra={1} castShadow />
                            {/* <fog attach='fog' args={['white', 60, 100]} /> */}
                            <ambientLight intensity={2.2} />
                            {/* <Me sequence={sequence} camera={camera} scene={scene} /> */}
                            <Me camera={camera} rotation={rotation} />
                        </>
                    )}
                </Canvas>
            </div>
            <Hero />
        </div>
    )
}

export default App