import Three from 'three.js'

view Main {
  let start = 1000
  let cube, material, geometry, renderer, scene, camera
  let rotX = 0
  let rotY = 0
  let rotZ = 0
  function render(el) {
    if (el === null) return
    console.log('el is ', el)
    scene = new Three.Scene()
    camera = new Three.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 1,10000);
    renderer = new Three.WebGLRenderer();
    geometry = new Three.BoxGeometry(700, 700, 700, 10, 10, 10);
    material = new Three.MeshBasicMaterial({color: '#c9625c', wireframe: true});
    cube = new Three.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = start

    requestAnimationFrame(() => {
      console.log('renderer is', renderer)
      el.appendChild(renderer.domElement);
      renderer.setSize(window.innerWidth, window.innerHeight);

      renderer.render(scene, camera)

      on.frame(onAnimate)
    })
  }

  function onAnimate() {
    rotX = Math.sin(Date.now()/1000)
    
    cube.rotation.y = rotY
    cube.rotation.x = rotX
    cube.rotation.z = rotZ

    renderer.render(scene, camera)

  }

  <cube ref={render}></cube>

  $ = { background: 'black'}
}