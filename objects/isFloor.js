ISFloor = function(renderer,scene,microcache){
  var group = new THREE.Group();

  var texture =   microcache.getSet('floorCacheTexture', new THREE.TextureLoader().load('image/betterCheckered.png'));
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set( 4, 4 );
  var gateMaterial = new THREE.MeshBasicMaterial({map: texture});
  var geometrySquare = new THREE.BoxGeometry(1500,10,1000);
  var square = new THREE.Mesh(geometrySquare, gateMaterial);

  group.add(square);
  return group;
}
