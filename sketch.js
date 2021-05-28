var movingRect
var fixedSq
var fixedSq2
var fixedSq3

var movingRect1
var movingRect2

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(200,200,40,70)
  movingRect.shapeColor="green"
  fixedSq=createSprite(400,200,40,40)
  fixedSq.shapeColor="green"
  fixedSq2=createSprite(600,200,40,40)
  fixedSq3=createSprite(100,200,40,40)

  movingRect1=createSprite(100,300,20,20)
  movingRect1.shapeColor="red"
  movingRect2=createSprite(800,300,20,20)
  movingRect2.shapeColor="blue"

  movingRect1.velocityX=5
  movingRect2.velocityX=-5
}

function draw() {
  background("black");
  console.log(movingRect.x-fixedSq.x)
  movingRect.shapeColor="green"
  fixedSq2.shapeColor ="green"

  fixedSq3.shapeColor="green"
  fixedSq.shapeColor="green"

  movingRect.x=mouseX  
  movingRect.y = mouseY






    

bouncingColor(movingRect1,movingRect2);



  if(isTouch(movingRect,fixedSq2))
{
  movingRect.shapeColor="red"
  fixedSq2.shapeColor ="red"
}
if(isTouch(movingRect,fixedSq))
{
  movingRect.shapeColor="red"
  fixedSq.shapeColor ="red"
}
if(isTouch(movingRect,fixedSq3))
{
  movingRect.shapeColor="red"
  fixedSq3.shapeColor ="red"
}

  drawSprites();
}



