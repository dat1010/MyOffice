DogBoneDesk = function(){
  var group = new THREE.Group();
  var texture = THREE.ImageUtils.loadTexture('image/deskTexture.png', {}, function() {
    renderer.render(scene);
  });
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set( 5, 5 );
  var gateMaterial = new THREE.MeshBasicMaterial({map: texture});
  var geometrySquare = new THREE.BoxGeometry(250,84,0.5);
  var middleLeg = new THREE.Mesh(geometrySquare, gateMaterial);

  var endLegGeometry = new THREE.BoxGeometry(70,84,0.5);
  var endLeg1 = new THREE.Mesh(endLegGeometry,gateMaterial);
  endLeg1.position.x = 150;
  endLeg1.position.z = -23;
  endLeg1.rotation.y = Math.PI/4

  var endLeg2 = new THREE.Mesh(endLegGeometry,gateMaterial);
  endLeg2.position.x = 150;
  endLeg2.position.z = 23;
  endLeg2.rotation.y = -Math.PI/4

  var rightLegGroup = new THREE.Group();
  rightLegGroup.add(endLeg1);
  rightLegGroup.add(endLeg2);

  var leftLegGroup = new THREE.Group();
  leftLegGroup = rightLegGroup.clone();
  leftLegGroup.rotation.y = Math.PI;


  var geometryCylinder = new THREE.CylinderGeometry(32,32,2,32);
  var endCircle1 = new THREE.Mesh(geometryCylinder, gateMaterial);
  endCircle1.position.y = 42;
  endCircle1.position.x = 155;
  endCircle1.position.z = 35;

  var endCircle2 = new THREE.Mesh(geometryCylinder, gateMaterial);
  endCircle2.position.y = 42;
  endCircle2.position.x = 155;
  endCircle2.position.z = -35;

  var rightCircleGroup = new THREE.Group();
  rightCircleGroup.add(endCircle1);
  rightCircleGroup.add(endCircle2);
  var leftCircleGroup = new THREE.Group()
  leftCircleGroup = rightCircleGroup.clone();
  leftCircleGroup.rotation.y = Math.PI;

  var gateMaterial = new THREE.MeshBasicMaterial({map: texture});
  var geometrySquare = new THREE.BoxGeometry(340,2,70);
  var square = new THREE.Mesh(geometrySquare, gateMaterial);
  square.position.y = 42;

  group.add(middleLeg);
  group.add(rightLegGroup);
  group.add(leftLegGroup);
  group.add(rightCircleGroup);
  group.add(leftCircleGroup);
  group.add(square);
  return group;
}
