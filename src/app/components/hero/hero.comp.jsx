import React, { Component } from 'react'
import paper from 'paper'

import './hero.style'

class Hero extends Component {

    componentDidMount() {
        this.canvas = document.querySelector(".hero")
        this.initCanvas()
    }

    initCanvas = () => {
        console.log(`[initCanvas]`)
        paper.setup(this.canvas)
        // scaleCanvas(this.canvas, this.canvas.getContext('2d'), this.canvas.clientWidth, this.canvas.clientHeight)
        this.createPath()

        // window.addEventListener("orientationchange", function () {
        //     // Announce the new orientation number
        //     this.path.remove()
        //     this.createPath()
        // }, false)
        // window.addEventListener("resize", function () {
        //     // Announce the new orientation number
        //     this.alert('fuck')
        // }, false)
    }

    createPath = () => {
        this.path = new paper.Path({
            fillColor: 'white',
            closed: true,
            strokeWidth: 0,
            strokeColor: 'red'
        })

        const amount = 6
        const maxHeight = 900
        let middlePointPositions = []
        for (let i = 0; i < amount; i++) {
            middlePointPositions.push({
                x: i * (window.innerWidth / amount),
                // y: Math.round((Math.random() * (window.innerHeight * 0.2) + (window.innerHeight * 0.5))) * ((amount - i) * 0.9)
                y: (Math.random() * ((Math.sin(i + 1)) * maxHeight * 0.1) + maxHeight * 0.7) - (i * 20)
            })
        }

        const pointPositions = [
            { x: -100, y: maxHeight * 1.2 },
            { x: -50, y: maxHeight * 0.9 },
            ...middlePointPositions,
            // { x: window.innerWidth, y: maxHeight * 0.5 },
            { x: window.innerWidth + 100, y: 200 },
            { x: window.innerWidth + 200, y: maxHeight }
        ]

        // console.log(pointPositions);

        const points = pointPositions.map((v, i, a, ) => {
            return this.path.add(new paper.Point(v.x, v.y))
        })

        // console.log(points.point);

        // paper.view.onFrame = (e) => {
        //     this.path.smooth({ type: 'catmull-rom' })
        // }

        this.path.smooth({ type: 'catmull-rom' })

        paper.view.onKeyDown = (e) => {
            if (e.key === 'space') {
                this.path.fullySelected = !this.path.fullySelected
                this.path.fillColor = this.path.fullySelected ? null : 'white'
            }
        }
        paper.view.onResize = e => {
            setTimeout(() => {
                this.path.remove()
                this.createPath()
            }, 50);
        }

    }

    render() {

        return (
            <canvas className="hero" resize='true' />
        )
    }
}

export default Hero