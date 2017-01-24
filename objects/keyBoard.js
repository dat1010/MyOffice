KeyBoard = function(renderer,scene){
  var group = new THREE.Group();
  var texture = THREE.ImageUtils.loadTexture('image/bumpy-black-plastic-texture.png', {}, function() {
    renderer.render(scene);
  });
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 1 );
  var frontTexture = THREE.ImageUtils.loadTexture('image/keyboard.png', {}, function() {
    renderer.render(scene);
  });


  frontTexture.wrapS = THREE.RepeatWrapping;
  frontTexture.wrapT = THREE.RepeatWrapping;
  frontTexture.repeat.set( 1, 1 );
  // For using solid colors
  //  var gateMaterial = new THREE.MeshBasicMaterial({ color: 0x8833ff });
  var cubeMaterialArray = [];
  cubeMaterialArray.push( new THREE.MeshBasicMaterial( {map: texture}  ) );
  cubeMaterialArray.push( new THREE.MeshBasicMaterial( {map: texture}  ) );
  cubeMaterialArray.push( new THREE.MeshBasicMaterial( {map: frontTexture}  ) );
  cubeMaterialArray.push( new THREE.MeshBasicMaterial( {map: texture}  ) );
  //Front
  cubeMaterialArray.push( new THREE.MeshBasicMaterial( {map: texture} ) );
  cubeMaterialArray.push( new THREE.MeshBasicMaterial( {map: texture}  ) );
  var cubeMaterials = new THREE.MeshFaceMaterial( cubeMaterialArray );
  var geometryKeyboard = new THREE.BoxGeometry(28,0.3,8.5);
  var keyboard = new THREE.Mesh(geometryKeyboard, cubeMaterials);

  group.add(keyboard);
  return group;
}
