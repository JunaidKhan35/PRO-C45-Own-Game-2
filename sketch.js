var spaceShip, spaceShipImg
var bgImg

function setup() {
  createCanvas(800,400);

  spaceShip = createSprite(400,328,50,50)
  spaceShip.scale = 0.5
  spaceShip.addImage(spaceShipImg)

  bulletsG = new Group();
  bulletsG2 = new Group();
  bulletsG3 = new Group();
  enemyShipG = new Group();
  enemyShipG2 = new Group();

  Edges = createEdgeSprites();
}

function preload(){
  spaceShipImg = loadImage("images/PC.png")
  bgImg = loadImage("images/space bg.png")
  bulletsImg = loadImage("images/bullets.png")
  bullets2Img = loadImage("images/bullets2.png")
  enemyShipImg = loadImage("images/enemy ship.png")
  enemyShip2Img = loadImage("images/enemy ship2.png")
}


function draw() {
  background(bgImg);
  drawSprites();

  spaceShip.collide(Edges);

  if(keyDown("LEFT_ARROW")){
    spaceShip.velocityX = spaceShip.velocityX-2
  }
  if(keyDown("RIGHT_ARROW")){
    spaceShip.velocityX = spaceShip.velocityX+2
  }

  if(keyDown("SPACE")){
    bullets = createSprite(spaceShip.x-45,spaceShip.y-30,15,15)
    bullets.addImage(bulletsImg)
    bullets.velocityY = -8    
    bulletsG.add(bullets);
}

  if(keyDown("SPACE")){
    bullets2 = createSprite(spaceShip.x+45,spaceShip.y-30,15,15);
    bullets2.addImage(bulletsImg);
    bullets2.velocityY = -8;
    bulletsG.add(bullets2);
  }

  if(frameCount%100 === 0){
    enemyShip = createSprite(Math.round(random(1,800)),-2);
    enemyShip.scale = 0.4
    enemyShip.addImage(enemyShipImg);
    enemyShip.velocityY = 2;
    
    bullets3 = createSprite(enemyShip.x-31,enemyShip.y,15,15)
    bullets3.addImage(bullets2Img)
    bullets3.velocityY = 3

    bullets4 = createSprite(enemyShip.x+35,enemyShip.y,15,15);
    bullets4.addImage(bullets2Img);
    bullets4.velocityY = 3

    enemyShipG.add(enemyShip);
    bulletsG2.add(bullets3);
    bulletsG2.add(bullets4);

  }

  if(frameCount%180 === 0){
    enemyShip2 = createSprite(Math.round(random(1,800)),-2);
    enemyShip2.scale = 0.5
    enemyShip2.addImage(enemyShip2Img)
    enemyShip2.velocityY = 3

    bullets5 = createSprite(enemyShip2.x-31,enemyShip2.y,15,15)
    bullets5.addImage(bullets2Img)
    bullets5.velocityY = 4

    bullets6 = createSprite(enemyShip2.x+35,enemyShip2.y,15,15);
    bullets6.addImage(bullets2Img);
    bullets6.velocityY = 4

    bulletsG3.add(bullets5);
    bulletsG3.add(bullets6);
    enemyShipG2.add(enemyShip2);

 }

 if(bulletsG.isTouching(enemyShipG)){
  enemyShipG.destroyEach();
  bulletsG2.destroyEach();
}

if(bulletsG.isTouching(enemyShipG2)){
  enemyShipG2.destroyEach();
  bulletsG3.destroyEach();
}
  
}