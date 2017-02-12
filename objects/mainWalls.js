MainWalls = function(renderer,scene,microcache) {
  var group = new THREE.Group();

  var texture = microcache.getSet('wallTexture', new THREE.TextureLoader().load('image/walltexture.png'));
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set( 2, 2 );
  var gateMaterial = new THREE.MeshBasicMaterial({map: texture});
  var geometrySquare = new THREE.BoxGeometry(1500,280,5);
  var northWall = new THREE.Mesh(geometrySquare, gateMaterial);
  northWall.rotation.y = Math.PI/2;
  northWall.position.x = 500;


  var otherTexture = microcache.getSet('greenWallTexture', new THREE.TextureLoader().load('image/greenTexture.png'));
  var otherMaterial = new THREE.MeshBasicMaterial({map: otherTexture});
  //TODO will need to add windows to this later.
  var southWall = new THREE.Mesh(geometrySquare, gateMaterial);
  southWall.rotation.y = Math.PI/2;
  southWall.position.x = -500;

  var southBoilergeometrySquare = new THREE.BoxGeometry(680,280,5);
  var southBoilerWall = new THREE.Mesh(southBoilergeometrySquare, otherMaterial);
  southBoilerWall.rotation.y = Math.PI/2;
  southBoilerWall.position.x = -250;
  southBoilerWall.position.z = -450;


  var westEastGeometry = new THREE.BoxGeometry(1000,280,5);
  var westWall = new THREE.Mesh(westEastGeometry, gateMaterial);
  westWall.position.z = 750;

  var eastWall = new THREE.Mesh(westEastGeometry, otherMaterial);
  eastWall.position.z = -750;

  var southBoilergeometrySquare = new THREE.BoxGeometry(247,280,5);
  var eastBoilerWall = new THREE.Mesh(southBoilergeometrySquare, gateMaterial);
  eastBoilerWall.position.z = -113;
  eastBoilerWall.position.x = -376;

  group.add(northWall);
  group.add(southBoilerWall);
  group.add(eastBoilerWall);
  group.add(southWall);
  group.add(westWall);
  group.add(eastWall);
  return group;
}
