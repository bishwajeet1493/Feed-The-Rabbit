var garden, rabbit, apple, orangeLeaf, redLeaf;
var gardenImg, rabbitImg, appleImg, orangeLeafImg, redLeafImg;
var edges;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
  redLeafImg = loadImage("redImage.png");
}


function setup(){
  createCanvas(400,400);
  
  garden = createSprite(200,200);
  garden.addImage(gardenImg);

  rabbit = createSprite(160,340,20,20);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  rabbit.x = World.mouseX;
  
  edges = createEdgeSprites();
  rabbit.collide(edges);
  
  var select_sprites = Math.round(random(1,3));
  
  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createApples();
    } else if (select_sprites == 2) {
      createOrangeLeaf();
    }else {
      createRedLeaf();
    }
  }
  
  drawSprites();
}

function createApples() {
  apple = createSprite(random(50, 350),40, 10, 10);
  apple.addImage(appleImg);
  apple.scale = 0.07;
  apple.velocityY = 3;
  apple.lifetime = 150;
  
}

function createOrangeLeaf() {
  orangeLeaf = createSprite(random(50, 350),40, 10, 10);
  orangeLeaf.addImage(orangeLeafImg);
  orangeLeaf.scale = 0.08;
  orangeLeaf.rotationSpeed = 10;
  orangeLeaf.velocityY = 3;
  orangeLeaf.lifetime = 100;
}

function createRedLeaf() {
  redLeaf = createSprite(random(50, 350),40, 10, 10);
  redLeaf.addImage(redLeafImg);
  redLeaf.scale = 0.06;
  redLeaf.rotationSpeed = 10;
  redLeaf.velocityY = 3;
  redLeaf.lifetime = 100;
}
