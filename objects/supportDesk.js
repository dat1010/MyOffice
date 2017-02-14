SupportDesk = function(renderer,scene,microcache){
  var group = new THREE.Group();
  var deskGeometry = new THREE.Geometry();
  var texture = microcache.getSet('deskCacheTexture', new THREE.TextureLoader().load('image/deskTexture.png'));
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set( 5, 5 );
  var deskMaterial = new THREE.MeshBasicMaterial({map: texture});
  var topGeometry = new THREE.BoxGeometry(600,84,0.5);
  var mainTop = new THREE.Mesh(topGeometry,deskMaterial);
  mainTop.rotation.x = Math.PI/2;
  mainTop.rotation.z = Math.PI/2;
  mainTop.position.y = -37;
  mainTop.position.x = 700;
  mainTop.position.z = 200;

  var bradDeskGeometry = new THREE.BoxGeometry(200,84,0.5);
  var bradDesk = new THREE.Mesh(bradDeskGeometry,deskMaterial);
  bradDesk.rotation.x = Math.PI/2;
  bradDesk.position.y = -37;
  bradDesk.position.x = 642;
  bradDesk.position.z = -142;

  var dellDeskGeometry = new THREE.BoxGeometry(116,84,0.5);
  var dellDesk = new THREE.Mesh(dellDeskGeometry,deskMaterial);
  dellDesk.rotation.x = Math.PI/2;
  dellDesk.position.y = -37;
  dellDesk.position.x = 600;
  dellDesk.position.z = 458;

  //var dellDeskGeometry = new THREE.BoxGeometry(116,84,0.5);
  var jasonDesk = new THREE.Mesh(dellDeskGeometry,deskMaterial);
  jasonDesk.rotation.x = Math.PI/2;
  jasonDesk.position.y = -37;
  jasonDesk.position.x = 600;
  jasonDesk.position.z = 158;

  var cabinet = new SupportCabinet(renderer,scene,microcache);
  cabinet.rotation.y = -Math.PI/2;
  cabinet.position.x = 725;
  cabinet.position.y = 50;
  cabinet.position.z = 160;


  group.add(cabinet);
  group.add(jasonDesk);
  group.add(dellDesk);
  group.add(bradDesk);
  group.add(mainTop);
  return group
}
