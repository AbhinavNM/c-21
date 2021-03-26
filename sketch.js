var fixedRect, movingRect;
var r1
var r2
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  r1 = createSprite(100,200,80,30);
  r1.shapeColor = "green";
  r2=createSprite(800,600,50,80);
  r2.shapecolor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(c1(movingRect,r1)){
  movingRect.shapeColor=("orange");
  r1.shapeColor=("orange");

 }
 else if(c1(movingRect,r2)){
   movingRect.shapeColor="blue"
   r2.shapeColor="blue" 
 }
 else if(c1(movingRect,fixedRect)){
   movingRect.shapeColor="orange"
   fixedRect.shapeColor="orange"
 }
else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  r1.shapeColor = "green";
  r2.shapeColor= "green";
}

 
  drawSprites();
}
//boolean function gives true or false
function c1(movingRect,fixedRect){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
return true
}
else {
return false 
}
}