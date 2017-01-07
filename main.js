if ( ! Detector.webgl ) {

    Detector.addGetWebGLMessage();
    document.getElementById( 'container' ).innerHTML = "";

}
init();
function init() {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.5, 1000000);

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

 var  light = new THREE.HemisphereLight(0xffffbb, 0x080820, 2);
      light.color.setHSL(1, 1, 1);
      light.position.set(0, 100, 0);
      scene.add(light);

      /*var light2 = new THREE.SpotLight(0xff99944);
      light2.position.set(-1, -1, -1);
      scene.add(light2);*/
  var sky = new THREE.Mesh(
            new THREE.SphereGeometry(10000, 32, 320),
            new THREE.MeshPhongMaterial({
                map: THREE.ImageUtils.loadTexture('textures/skyboxsun25degtest.jpg')
            })
        );
  sky.material.side = THREE.BackSide;
  sky.rotation.x = -Math.PI * 0.5;
  scene.add(sky);

  //This really isn't the world just the foundation or cement of the parking lot.
  //Maybe later I wont be lazy and changed the name.
  var world = new World();
  scene.add(world);

  var isFloor = new ISFloor();
  scene.add(isFloor);
  isFloor.position.y = 1;

  var walls = new MainWalls();
  scene.add(walls);
  walls.rotation.y = Math.PI/2

  camera.position.z = 50;
  controls = new THREE.OrbitControls(camera, renderer.domElement);
    //controls.userPan = false;
    //controls.userPanSpeed = 0.0;
    controls.maxDistance = 12500;
    controls.maxPolarAngle = Math.PI /3;
  var render = function () {
    requestAnimationFrame( render );
  	renderer.render(scene, camera);
  };

  render();
}
