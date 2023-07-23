 // Create the scene and camera
 const scene = new THREE.Scene();
 const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
 camera.position.set( 0, -3, 5 );
 camera.rotation.set( 0.5, 0, 0 );

 // Create the renderer and add it to the DOM
 const renderer = new THREE.WebGLRenderer();
 renderer.setSize(window.innerWidth, window.innerHeight);
 document.body.appendChild(renderer.domElement);

 // Create the cube grid
 const cubeSize = 0.5;
 const spacing = 0.1;
 const numCubes = 5;
 const cubes = [];
 for (let i = 0; i < numCubes; i++) {
   const row = [];
   for (let j = 0; j < numCubes; j++) {
     const cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
     const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
     const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
     cube.position.x = (i - (numCubes - 1) / 2) * (cubeSize + spacing);
     cube.position.y = (j - (numCubes - 1) / 2) * (cubeSize + spacing);
     scene.add(cube);
     row.push(cube);
   }
   cubes.push(row);
 }

 // Add a click listener to each cube
 for (let i = 0; i < numCubes; i++) {
   for (let j = 0; j < numCubes; j++) {
     const cube = cubes[i][j];
     cube.userData.isOn = false;
     cube.userData.onClick = function() {
        console.log('clicked!');
       cube.userData.isOn = !cube.userData.isOn;
       cube.material.color.set(cube.userData.isOn ? 0xff0000 : 0xffffff);
     };
     cube.addEventListener('click', cube.userData.onClick);
   }
 }
 let raycaster;
 let INTERSECTED;
 const pointer = new THREE.Vector2();
 const radius = 100;
 raycaster = new THREE.Raycaster();

 function onPointerMove( event ) {

    pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

}
function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}
 // Render the scene
 function animate() {
   requestAnimationFrame(animate);
   // find intersections

   raycaster.setFromCamera( pointer, camera );

   const intersects = raycaster.intersectObjects( scene.children, false );

   if ( intersects.length > 0 ) {

       if ( INTERSECTED != intersects[ 0 ].object ) {

           if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

           INTERSECTED = intersects[ 0 ].object;
           INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
           INTERSECTED.material.emissive.setHex( 0xff0000 );

       }

   } else {

       if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

       INTERSECTED = null;

   }

   renderer.render( scene, camera );
 }
 animate();