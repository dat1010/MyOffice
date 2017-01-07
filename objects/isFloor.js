ISFloor = function(){
  var group = new THREE.Group();
  var texture = THREE.ImageUtils.loadTexture('image/Classic-carpet-texture.png', {}, function() {
    renderer.render(scene);
  });
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set( 50, 50 );
  var gateMaterial = new THREE.MeshBasicMaterial({map: texture});
  var geometrySquare = new THREE.BoxGeometry(1000,10,1000);
  var square = new THREE.Mesh(geometrySquare, gateMaterial);
  //square.rotation. = Math.PI/2
  group.add(square);
  return group;
}
