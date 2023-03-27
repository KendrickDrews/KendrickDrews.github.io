import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { fullScreen } from './src/fullscreen'
import * as dat from 'dat.gui'
import gsap from 'gsap'

const parameters = {
  color: 0xff0000,
  spin: () => { 
    gsap.to(cube1.rotation, { duration: 1, y: cube1.rotation.y + 10 })
  }
}

// Canvas
const canvas = document.querySelector('canvas.webgl')
// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

// Cursor
const cursor = {
  x: 0,
  y: 0
}
window.addEventListener('mousemove', (event) => {
  cursor.x = event.clientX / sizes.width - 0.5
  cursor.y = -(event.clientY / sizes.height - 0.5)
})

// Scene
const scene = new THREE.Scene()

const group = new THREE.Group()
// group.rotation.y = 2
scene.add(group)

// Lights
const ambientLight = new THREE.AmbientLight()
ambientLight.color = new THREE.Color(0xffffff)
ambientLight.intensity = 0.5
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0x00fffc, 0.3)
directionalLight.position.set(2,2,-1)
directionalLight.castShadow = true
scene.add(directionalLight)

const hemisphereLight = new THREE.HemisphereLight(0xff0000, 0x0000ff, 0.3)
scene.add(hemisphereLight)

// Material
const material = new THREE.MeshStandardMaterial()
material.roughness = 0.4
// const light = new THREE.DirectionalLight( 0xffffff, 0.35 );
// 	light.position.set( 1, 1, 1 ).normalize();
// 	scene.add( light );
//   // const light2 = new THREE.DirectionalLight( 0xff00ff, 0.45 );
// 	// light2.position.set( -1, -1, -1 ).normalize();
// 	// scene.add( light2 );
//   const light3 = new THREE.AmbientLight( 0x45bbcc ); // soft white light
// scene.add( light3 );

// Geometry
// Plane
const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(20,20),
  material
)
floor.receiveShadow = true
scene.add(floor)
floor.rotation.x =  - Math.PI * 0.5

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  material
)
cube1.position.set(0,1,1)
group.add(cube1)

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  material
)
cube2.position.set(-2,1,1)
group.add(cube2)

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  material
)
cube3.position.set(2,1,1)
group.add(cube3)

cube1.castShadow = true
cube2.castShadow = true
cube3.castShadow = true

// Particles
// const particleGeometry = new THREE.SphereBufferGeometry(1,32,32)
const particleGeometry = new THREE.BufferGeometry()

// random buffer Geo
const count = 5000

const positions = new Float32Array(count * 3)
const colors = new Float32Array(count * 3)

for (let i = 0; i < count * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 10
  colors[i] = Math.random()
}

particleGeometry.setAttribute( 'position', new THREE.BufferAttribute(positions, 3) )
particleGeometry.setAttribute( 'color', new THREE.BufferAttribute(colors, 3) )

const particlesMaterial = new THREE.PointsMaterial({
  size: 0.02,
  sizeAttenuation: true,
  // color: '#ff88cc',
  transparent: true,
  // alphaMap: particletexture,
  alphaTest: 0.001,
  vertexColors: true
})

const particles = new THREE.Points(particleGeometry, particlesMaterial)
scene.add(particles)

// Texture
// const textureLoader = new THREE.TextureLoader()
// const texture = textureLoader.load('/textures/door/color.jpg')

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000)
// const aspectRatio = sizes.width/sizes.height
// const camera = new THREE.OrthographicCamera(-1 * aspectRatio, 1 * aspectRatio, 1 ,-1, 0.1, 100)

camera.position.y = 4
camera.position.z = 12
scene.add(camera)


// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
console.log(group)
renderer.shadowMap.enabled = true

const rotateChildren = function () {
  group.children.forEach((element, index) => {
    element.rotation.x += 0.01 * (index +1)
    
  });
}
// GSAP Animation example
// gsap.to(group.position, {duration: 1, delay: 1, x: 2})
// gsap.to(group.position, {duration: 1, delay: 2, x: 0})

const clock = new THREE.Clock()

// Animations
const loop = () => {
  // Will keep rotation at a constant framerate. Helps account for Hardware.
  const elapsedTime = clock.getElapsedTime();
  // Update Objects
  // group.rotation.y =  elapsedTime
  rotateChildren()

  // Update camera
  // camera.position.x = Math.sin(cursor.x * Math.PI * 2 ) * 5
  // camera.position.z = Math.cos(cursor.x * Math.PI * 2 ) * 5
  // camera.position.y = cursor.y * 5
  // camera.lookAt(cube1.position)

  // Update Particles
  // particles.rotation.y = elapsedTime * 0.2
  

  // update controls
  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(loop)
}

// Camera Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

loop()


window.addEventListener('resize', () => {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

});

// DoubleClick to fullscreen
// window.addEventListener('dblclick', fullScreen)

// Debug UI
const gui = new dat.GUI();
gui.add(cube1.position, 'y', -3, 3, 0.01)
gui.addColor(parameters, 'color').onChange(() => { cube1.material.color.set(parameters.color); })
gui.add(parameters, 'spin')