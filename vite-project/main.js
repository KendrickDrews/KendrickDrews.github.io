import * as THREE from 'three'
import gsap from 'gsap'

// Scene
const scene = new THREE.Scene()

const group = new THREE.Group()
// group.rotation.y = 2
scene.add(group)
const light = new THREE.DirectionalLight( 0xffffff, 0.35 );
	light.position.set( 1, 1, 1 ).normalize();
	scene.add( light );
const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshLambertMaterial({color: 0xff0000})
)
cube1.position.set(0,1,1)
group.add(cube1)
const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshLambertMaterial({color: 0x00ff00})
)
cube2.position.set(-2,1,1)
group.add(cube2)
const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshLambertMaterial({color: 0x0000ff})
)
cube3.position.set(2,1,1)
group.add(cube3)
// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000)
camera.position.z = 9
scene.add(camera)


window.onresize = function () {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

};
// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas.webgl')
})
renderer.setSize(sizes.width, sizes.height)
console.log(group)

const rotateChildren = function () {
  group.children.forEach((element, index) => {
    element.rotation.x += 0.01 * (index +1)
    
  });
}

gsap.to(group.position, {duration: 1, delay: 1, x: 2})
gsap.to(group.position, {duration: 1, delay: 2, x: 0})
const clock = new THREE.Clock()
// Animations
const loop = () => {
  // Will keep rotation at a constant framerate. Helps account for Hardware.
  const elapsedTime = clock.getElapsedTime();
  // Update Objects
  group.rotation.y =  elapsedTime
  rotateChildren()

  renderer.render(scene, camera)
  window.requestAnimationFrame(loop)
}

loop()