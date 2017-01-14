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
      light.position.set(0, 0, 0);
      scene.add(light);

      /*var light2 = new THREE.SpotLight(0xff99944);
      light2.position.set(-1, -1, -1);
      scene.add(light2);*/
  var sky = new THREE.Mesh(
            new THREE.SphereGeometry(10000, 32, 320),
            new THREE.MeshPhongMaterial({
                map: THREE.ImageUtils.loadTexture('image/sky_offworld2.png')
            })
        );
  sky.material.side = THREE.BackSide;
  //sky.rotation.x = -Math.PI;
  //sky.rotation.x = Math.PI/2;
  scene.add(sky);

  //This really isn't the world just the foundation or cement of the parking lot.
  //Maybe later I wont be lazy and changed the name.
  var world = new World(renderer,scene);
  scene.add(world);
  world.position.y = -45;
  var isFloor = new ISFloor(renderer,scene);
  scene.add(isFloor);
  isFloor.position.y = - 44;

  var walls = new MainWalls(renderer,scene);
  scene.add(walls);
  walls.rotation.y = Math.PI/2
  walls.position.y = 100;
  camera.position.z = 500;

  var devDesk = new DogBoneDesk(renderer,scene);
  scene.add(devDesk);
  //devDesk.position.y = 45;
  devDesk.position.z = -50;
  devDesk.position.x = -450;
  devDesk.rotation.y = 11*Math.PI/6;

  var qaDesk = new DogBoneDesk(renderer,scene);
  scene.add(qaDesk);
  //qaDesk.position.y = 45;
  qaDesk.position.x = 100;
  qaDesk.position.z = -15;
  qaDesk.rotation.y = Math.PI/2;

  var zarbeckCabinet = new FilingCabinet(renderer,scene);
  scene.add(zarbeckCabinet);
  zarbeckCabinet.position.x = -600;
  zarbeckCabinet.position.z = -215;
  zarbeckCabinet.rotation.y = -Math.PI/3;

  var myMainMonitor = new Monitor(renderer,scene,'image/MyComputer.png',45,30);
  scene.add(myMainMonitor);
  myMainMonitor.position.x = -358;
  myMainMonitor.position.z = 17;
  myMainMonitor.position.y = 65;
  myMainMonitor.rotation.y = -Math.PI/4;

  var mySecondMonitor = new Monitor(renderer,scene,'image/mySecondScreem.png',45,30);
  scene.add(mySecondMonitor);
  mySecondMonitor.position.x = -394;
  mySecondMonitor.position.z = -11;
  mySecondMonitor.position.y = 65;
  mySecondMonitor.rotation.y = -Math.PI/6;

  var anthoniesMonitor = new Monitor(renderer,scene,'image/overwatch.png',45,30);
  //scene.add(anthoniesMonitor);
  var anthonyConitorGroup = new THREE.Group();
  anthoniesMonitor.position.x = -22.5;
  anthoniesMonitor.position.z = 5;
  anthoniesMonitor.rotation.y = Math.PI/4;
  anthonyConitorGroup.add(anthoniesMonitor);
  var anthonies2ndMonitor = new Monitor(renderer,scene,'image/mySecondScreem.png',45,30);
  anthonies2ndMonitor.position.x = 18;
  anthonies2ndMonitor.position.z = -5;
  anthonyConitorGroup.add(anthonies2ndMonitor)
  scene.add(anthonyConitorGroup);
  anthonyConitorGroup.position.x = -555;
  anthonyConitorGroup.position.z = -95;
  anthonyConitorGroup.position.y = 65;
  anthonyConitorGroup.rotation.y = -Math.PI/6;


  var jHallMonitor = new Monitor(renderer,scene,'image/theLongMonitor.png',30,50);
  //scene.add(anthoniesMonitor);
  var jHallMonitorGroup = new THREE.Group();
  jHallMonitor.position.x = -40;
  //jHallMonitor.position.z = 5;
  //jHallMonitor.rotation.y = Math.PI/4;
  jHallMonitor.rotation.x = -Math.PI/10;
  jHallMonitorGroup.add(jHallMonitor);
  var jHall2ndMonitor = new Monitor(renderer,scene,'image/lolDefeat.png',45,30);
  //jHall2ndMonitor.position.x = 18;
  //jHall2ndMonitor.position.z = -5;
  jHallMonitorGroup.add(jHall2ndMonitor)
  scene.add(jHallMonitorGroup);
  jHall2ndMonitor.rotation.y = -Math.PI/6;
  jHall2ndMonitor.position.z = 15;
  var jHall3rdMonitor = new Monitor(renderer,scene,'image/mySecondScreem.png',45,30);
  jHallMonitorGroup.position.x = -570;
  jHallMonitorGroup.position.z = -149;
  jHallMonitorGroup.position.y = 65;
  jHallMonitorGroup.rotation.y = (3*Math.PI)/4;


  var brandonMonitor = new Monitor(renderer,scene,'image/makinBacon.png',45,30);
  var brandonMonitorGroup = new THREE.Group();
  brandonMonitorGroup.add(brandonMonitor);

  var brandon2ndMonitor = new Monitor(renderer,scene,'image/mySecondScreem.png',45,30);
  brandon2ndMonitor.position.x = -45
  brandon2ndMonitor.rotation.y = Math.PI/7;
  brandon2ndMonitor.position.z = 10;
  brandonMonitorGroup.add(brandon2ndMonitor);
  brandonMonitorGroup.rotation.y =  (3*Math.PI)/3.5;
  brandonMonitorGroup.position.x = -365;
  brandonMonitorGroup.position.y = 65;
  brandonMonitorGroup.position.z = -12;

  scene.add(brandonMonitorGroup);


  controls = new THREE.OrbitControls( camera, renderer.domElement );
    controls.userPan = false;
    controls.userPanSpeed = 0.0;
    controls.maxDistance = 12500;
    //controls.maxPolarAngle = Math.PI /3;
    /*controls.movementSpeed = 70;
    controls.lookSpeed = 0.05;
    controls.noFly = true;
    controls.lookVertical = false;*/
  var render = function () {
    //controls.update();
    requestAnimationFrame( render );
  	renderer.render(scene, camera);

  };

  render();
}
