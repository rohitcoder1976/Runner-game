var Runner;
var RunnerImage;
var Road;
var RoadImage;


function preload(){
 RunnerImage=loadAnimation("Runner-1.png","Runner-2.png");
 RoadImage=loadImage("path.png");
}

function setup(){
  createCanvas(400,400);

  //Creating road
  Road=createSprite(200,200,100,400);
  Road.addImage("path",RoadImage);
  Road.velocityY=+4;
  Road.scale=1;

  //Creating runner
  Runner=createSprite(200,355,20,20);
  Runner.addAnimation("Running",RunnerImage);
  Runner.scale=0.04;

  
  

}

function draw() {
  background(0);

  //Making Runner move with arrow keys
  if (keyWentDown("left")&&Runner.x==200) {
    Runner.x=110;
  }

  if (keyWentDown("right")&&Runner.x==200) {
    Runner.x=300;  
  }

  if (keyWentDown("left")&&Runner.x==300) {
    Runner.x=200;
  }

  if (keyWentDown("right")&&Runner.x==110) {
    Runner.x=200;
  }


  //Making the road infinite
  if (Road.y > 400) {
  Road.y=Road.width/2;
  }

  drawSprites();
}
