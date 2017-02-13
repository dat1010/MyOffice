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

  var dellDesk = new THREE.BoxGeometry(200,84,0.5);

  group.add(bradDesk);
  group.add(mainTop);
  return group
}
