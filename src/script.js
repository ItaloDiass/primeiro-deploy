import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x993399 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

let time = Date.now()
const clock = new THREE.Clock()
gsap.to(mesh.position, { duration: 5, delay: 1, x: 2, y: 2, z: -4})


//Animations
const tick = () => {
    //console.log('tick')

    //const elapsedTime = clock.getElapsedTime()

    // Time
        //const currentTime = Date.now()
        //const deltaTime = currentTime - time
        //time = currentTime 

    //mesh.position.x = Math.cos(elapsedTime)
    //mesh.position.y = Math.sin(elapsedTime)
    //camera.lookAt(mesh.position)
    //mesh.rotation.y += 0.01 * deltaTime
    //mesh.rotation.y = elapsedTime
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()