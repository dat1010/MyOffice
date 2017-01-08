DogBoneDesk = function(){
  var group = new THREE.Group();
  var texture = THREE.ImageUtils.loadTexture('image/walltexture.png', {}, function() {
    renderer.render(scene);
  });
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set( 5, 5 );
  var gateMaterial = new THREE.MeshBasicMaterial({map: texture});
  var geometrySquare = new THREE.BoxGeometry(50,84,0.5);
  var middleLeg = new THREE.Mesh(geometrySquare, gateMaterial);

  group.add(middleLeg);
  return group;
}
