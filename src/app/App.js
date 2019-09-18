import React, { useState } from 'react'
import Hero from './components/hero/hero.comp'
import MeCanvas from './components/hero/3d/me-canvas/me-canvas.comp'
import NavTop from './components/navigation/top/navigation-top.comp'
import style from './App.scss'
import Logo from '../assets/svg/bryte_logo.svg'

const App = () => {

    const [rotation, setRotation] = useState(45 * Math.PI / 180)

    const handleMouseOver = (e) => {
        console.log(`[random rotation:]`)
        setRotation(Math.random() * 45 * (Math.PI / 180))
    }

    return (
        <div className={style.App}>
            <div className={style.Container}>
                <header>
                    <Logo />
                    <NavTop handleMouseOver={handleMouseOver} />
                </header>
            </div>
            <div className={style.bottomBorder}></div>
            <div className={style.me3d}>
                <MeCanvas rotation={rotation} controls={false} />
            </div>
            <Hero />
        </div>
    )
}

export default App