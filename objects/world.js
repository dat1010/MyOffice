World = function(){
  var group = new THREE.Group();
  var texture = THREE.ImageUtils.loadTexture('image/download.png', {}, function() {
    renderer.render(scene);
  });
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set( 5, 5 );
  var gateMaterial = new THREE.MeshBasicMaterial({map: texture});
  var geometrySquare = new THREE.BoxGeometry(1000,10,1000);
  var square = new THREE.Mesh(geometrySquare, gateMaterial);
  //square.rotation. = Math.PI/2
  group.add(square);
  return group;
}
