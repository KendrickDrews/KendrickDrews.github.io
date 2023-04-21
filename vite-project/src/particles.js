/**
 * Particles Boilerplate
 */

// Geometry
const particlesCount = 200
const positions = new Float32Array(particlesCount * 3)

// Create a loop and add random coordinates to the positions array:

for(let i = 0; i < particlesCount; i++)
{
    positions[i * 3 + 0] = Math.random() // x
    positions[i * 3 + 1] = Math.random() // y
    positions[i * 3 + 2] = Math.random() // z
}

// Instantiate the BufferGeometry and set the position attribute:

const particlesGeometry = new THREE.BufferGeometry()
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

// Create the material using PointsMaterial:

// Material
const particlesMaterial = new THREE.PointsMaterial({
    color: parameters.materialColor,
    sizeAttenuation: true,
    size: 0.03
})
// Create the particles using Points:

// Points
const particles = new THREE.Points(particlesGeometry, particlesMaterial)
scene.add(particles)