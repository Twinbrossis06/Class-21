var fixedRect, movingRect;
var box1,box2;
var ball,wall;

function setup() {
  createCanvas(800,600);
  fixedRect1=createSprite(300, 200, 50, 50);
  fixedRect1.shapeColor="red";
  
  wall=createSprite(100, 400, 20, 150);
  wall.shapeColor="purple";

  ball=createSprite(700, 400,30,30);
  ball.shapeColor="lime";
  ball.velocityX=-2;

  fixedRect2=createSprite(600, 200, 50, 50);
  fixedRect2.shapeColor="red";
  movingRect=createSprite(200, 200, 80, 30);
  movingRect.shapeColor="red";

  box1=createSprite(200, 100, 50, 50);
  box1.shapeColor="purple";
  box1.velocityX=2;
  box2=createSprite(600, 100, 50, 50);
  box2.shapeColor="lime";
  box2.velocityX=-2
}

function draw() {
  background(0);  
movingRect.x=mouseX;
movingRect.y=mouseY;

isTouching(movingRect,fixedRect2);
bounce(box1,box2);
bounceOff(wall,ball);
  drawSprites();
}

