AddMonitors = function(renderer,scene){
  var myMainMonitor = new Monitor(renderer,scene,'image/MyComputer.png',45,30);
  scene.add(myMainMonitor);
  myMainMonitor.position.x = -358;
  myMainMonitor.position.z = 17;
  myMainMonitor.position.y = 66;
  myMainMonitor.rotation.y = -Math.PI/4;

  var mySecondMonitor = new Monitor(renderer,scene,'image/mySecondScreem.png',45,30);
  scene.add(mySecondMonitor);
  mySecondMonitor.position.x = -394;
  mySecondMonitor.position.z = -11;
  mySecondMonitor.position.y = 66;
  mySecondMonitor.rotation.y = -Math.PI/6;

  var myLaptop = new DellLapTop(renderer,scene,'image/lapTopScreen.png',28,17);
  scene.add(myLaptop);
  myLaptop.position.x = -337;
  myLaptop.position.z = 50;
  myLaptop.position.y = 60;
  myLaptop.rotation.y = -Math.PI/3;

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
  var anthoniesLaptop = new DellLapTop(renderer,scene,'image/lapTopScreen.png',28,17);
  anthonyConitorGroup.add(anthoniesLaptop);
  anthoniesLaptop.position.x = 55;
  anthoniesLaptop.position.y = -6;
  anthoniesLaptop.position.z = -3;
  scene.add(anthonyConitorGroup);
  anthonyConitorGroup.position.x = -555;
  anthonyConitorGroup.position.z = -95;
  anthonyConitorGroup.position.y = 66;
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
  jHallMonitorGroup.position.y = 66;
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
  brandonMonitorGroup.position.y = 66;
  brandonMonitorGroup.position.z = -12;

  scene.add(brandonMonitorGroup);


  var tomMonitor = new Monitor(renderer,scene,'image/theLongMonitor.png',45,30);
  //scene.add(anthoniesMonitor);
  var tomMonitorGroup = new THREE.Group();
  tomMonitor.position.x = -40;
  //jHallMonitor.position.z = 5;
  //jHallMonitor.rotation.y = Math.PI/4;
  //tomMonitor.rotation.x = -Math.PI/10;
  tomMonitorGroup.add(tomMonitor);
  var tom2ndMonitor = new Monitor(renderer,scene,'image/scubaDubaDuba.png',45,30);
  //jHall2ndMonitor.position.x = 18;
  //jHall2ndMonitor.position.z = -5;
  tomMonitorGroup.add(tom2ndMonitor)
  scene.add(tomMonitorGroup);
  tom2ndMonitor.rotation.y = -Math.PI/6;
  tom2ndMonitor.position.z = 10;
  tom2ndMonitor.position.x = 5;
  //var jHall3rdMonitor = new Monitor(renderer,scene,'image/mySecondScreem.png',45,30);
  scene.add(tomMonitorGroup);
  tomMonitorGroup.rotation.y = -Math.PI/1.9;
  tomMonitorGroup.position.y = 66;
  tomMonitorGroup.position.x = 87;
  tomMonitorGroup.position.z = 120;


  var vMonitor = new Monitor(renderer,scene,'image/theLongMonitor.png',45,30);
  //scene.add(anthoniesMonitor);
  var vMonitorGroup = new THREE.Group();
  vMonitor.position.x = -45;
  vMonitor.position.z = 10;
  vMonitor.rotation.y = Math.PI/6;
  //vMonitor.rotation.x = -Math.PI/10;
  vMonitorGroup.add(vMonitor);
  var v2ndMonitor = new Monitor(renderer,scene,'image/scubaDubaDuba.png',45,30);
  //v2ndMonitor.position.x = ;
  //v2ndMonitor.position.z = -5;
  vMonitorGroup.add(v2ndMonitor)
  scene.add(vMonitorGroup);
  vMonitorGroup.position.y = 66;
  vMonitorGroup.rotation.y = -Math.PI/2;
  vMonitorGroup.position.x = 87;
  vMonitorGroup.position.z = -100;



  var michaelMonitor = new Monitor(renderer,scene,'image/mySecondScreem.png',45,30);
  michaelMonitor.rotation.y = Math.PI/3;
  var michaelGroup = new THREE.Group();
  var michael2ndMonitor = new Monitor(renderer,scene,'image/mySecondScreem.png',45,30);
  michael2ndMonitor.position.x = 35;
  michael2ndMonitor.position.z = -20;
  michael2ndMonitor.rotation.y = -Math.PI/7;

  var michaelComputer = new DellLapTop(renderer,scene,'image/lapTopScreen.png',28,17);
  michaelComputer.position.y = -13;
  michaelComputer.position.z = -3;
  michaelComputer.position.x = 66;
  michaelComputer.rotation.y = -9*Math.PI/4.1
  michaelGroup.add(michaelComputer)

  michaelGroup.add(michael2ndMonitor);
  michaelGroup.add(michaelMonitor);
  michaelGroup.rotation.y = 5*Math.PI/4;
  michaelGroup.position.y = 65;
  michaelGroup.position.x = -580;
  michaelGroup.position.z = -150;
  scene.add(michaelGroup);



  var joshMonitor = new Monitor(renderer,scene,'image/mySecondScreem.png',45,30);
  joshMonitor.rotation.y = Math.PI/3;
  var joshGroup = new THREE.Group();
  var josh2ndMonitor = new Monitor(renderer,scene,'image/mySecondScreem.png',45,30);
  josh2ndMonitor.position.x = 35;
  josh2ndMonitor.position.z = -20;
  josh2ndMonitor.rotation.y = -Math.PI/7;

  var joshComputer = new DellLapTop(renderer,scene,'image/lapTopScreen.png',28,17);
  joshComputer.position.y = -13;
  joshComputer.position.z = -3;
  joshComputer.position.x = 66;
  joshComputer.rotation.y = -9*Math.PI/4.1
  joshGroup.add(joshComputer)

  joshGroup.add(josh2ndMonitor);
  joshGroup.add(joshMonitor);
  joshGroup.position.y = 65;
  joshGroup.position.x = -320;
  joshGroup.position.z = 60;
  joshGroup.rotation.y = Math.PI/3.5;

  scene.add(joshGroup);


  var playerMonitor = new Monitor(renderer,scene,'image/offMonitorScreen.png',45,30);
  playerMonitor.rotation.y = Math.PI/3;
  var playerGroup = new THREE.Group();
  var player2ndMonitor = new Monitor(renderer,scene,'image/offMonitorScreen.png',45,30);
  player2ndMonitor.position.x = 35;
  player2ndMonitor.position.z = -20;
  player2ndMonitor.rotation.y = -Math.PI/7;
  playerGroup.add(playerMonitor);
  playerGroup.position.y = 65;
  playerGroup.position.z = 150;
  playerGroup.position.x = 80;
  playerGroup.rotation.y = 11*Math.PI/6;
  scene.add(playerGroup);
}
