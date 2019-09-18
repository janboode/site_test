import React, { Component } from 'react'
import * as THREE from 'three'
import { TweenMax } from 'gsap'
import GLTFLoader from 'three-gltf-loader'
import gltfPath from '../../../../../assets/gltf/me_hero.gltf'

class Me extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modelLoaded: false
        }

        this.model = null
    }

    componentDidMount() {
        console.log(`[Me componentDidMount]`)
        const loader = new GLTFLoader()
        loader.load(gltfPath,
            async (gltf) => {
                this.model = gltf.scene
                await this.setState({ modelLoaded: true })
                // console.log('loaded: ')
                console.log(this.state)
                this.initModel()
                this.initCamera()

            },
            (xhr) => {
                // called while loading is progressing
                console.log(`${(xhr.loaded / xhr.total * 100)}% loaded`);
            },
            (error) => {
                // called when loading has errors
                console.error('An error happened', error);
            })

    }

    componentDidUpdate() {
        console.log(`[componentDidUpdate]`)
        if (this.model)
            TweenMax.to(this.model.rotation, 1, { y: this.props.rotation, ease: Sine.EaseInOut })

        // this.model.rotation.y = this.props.rotation
    }

    initModel = () => {
        console.log(`[Me initModel]`)
        this.model.traverse((child) => {
            if (child.isMesh || child.isGroup) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
            const childObject = this.model.getObjectByName(child.name)
            // console.log('childObjects: ')
            // console.log(childObject)
            this[child.name] = childObject
        })
        // this.state.model.position.x = -30
        // this.state.model.position.y = 0
        // this.state.model.position.z = 0

        // this.state.model.rotation.x = -5 * Math.PI / 180
        // this.state.model.rotation.y = this.props.rotation


        this.blink()
        let interval = setInterval(this.blink, 5000)
    }

    initCamera = () => {
        const { camera } = this.props
        camera.position.x = -20;
        camera.position.y = 15;
        camera.position.z = 40;
        camera.rotation.y = -60 * Math.PI / 180
        // camera.lookAt(new THREE.Vector3(
        //     this.head.position.x,
        //     this.head.position.y,
        //     this.head.position.z
        // ))
        camera.lookAt(new THREE.Vector3(50,0,0))
    }

    blink = () => {
        this.eyeL.scale.y = this.eyeR.scale.y = 0.01
        this.eyeL.visible = this.eyeR.visible = true
        TweenMax.to(this.eyeL.scale, 0.1, { y: 1 })
        TweenMax.to(this.eyeL.scale, 0.1, { y: 0.01, delay: 0.1 })
        TweenMax.to(this.eyeR.scale, 0.1, { y: 1 })
        TweenMax.to(this.eyeR.scale, 0.1, {
            y: 0.01, delay: 0.1, onComplete: () => {
                this.eyeL.visible = this.eyeR.visible = false
            }
        })
    }

    render() {
        console.log(`[Me render]`)
        return (
            this.state.modelLoaded ?
                <primitive object={this.model} /> : null
        )
    }
}

export default Me