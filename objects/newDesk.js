NewIsDesk = function(renderer,scene,microcache){
  var group = new THREE.Group();
  var DESK_LENGTH = 400;
  var DESK_WIDTH = 84;
  var woodTexture =  microcache.getSet('deskCacheTexture', new THREE.TextureLoader().load('image/deskTexture.png'));
  woodTexture.wrapS = THREE.RepeatWrapping;
  woodTexture.wrapT = THREE.RepeatWrapping;
  woodTexture.repeat.set( 5, 5 );
  var deskMaterial = new THREE.MeshBasicMaterial({map: woodTexture});
  var geometryTop = new THREE.BoxGeometry(DESK_WIDTH,DESK_LENGTH,0.5);
  var deskTop = new THREE.Mesh(geometryTop, deskMaterial);
  deskTop.rotation.x = Math.PI/2;
  deskTop.rotation.z = Math.PI/2;


  var geometryDeskTopLeftEnd = new THREE.BoxGeometry(250,DESK_WIDTH,0.5);
  var deskTopLeftEnd = new THREE.Mesh(geometryDeskTopLeftEnd,deskMaterial)
  deskTopLeftEnd.rotation.x = Math.PI/2;
  deskTopLeftEnd.rotation.z = Math.PI/2;
  deskTopLeftEnd.position.x = DESK_LENGTH/2 + DESK_WIDTH/2;

  var deskTopRightEnd = deskTopLeftEnd.clone();
  deskTopRightEnd.position.x = -deskTopLeftEnd.position.x

  var x = 0, y = 0;

  var heartShape = new THREE.Shape();

  heartShape.moveTo( x + 5, y + 5 );
  heartShape.bezierCurveTo(249, 250, 367, 250, 525, 200);
  //heartShape.bezierCurveTo(233, 44, 346, 35, 525, 200);
  //heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
  //heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
  //heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
  //heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );

  var geometry = new THREE.ShapeGeometry( heartShape );
  var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  var mesh = new THREE.Mesh( geometry, material ) ;


  group.add(mesh);
  group.add(deskTopRightEnd);
  group.add(deskTopLeftEnd);
  group.add(deskTop);
  group.position.y = -37;
  return group;
}
