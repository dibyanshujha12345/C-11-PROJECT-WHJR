var runner,path,runnerImg,invisibleground1,invisibleground2;


function preload(){
  //pre-load images
runnerImg=loadAnimation("Runner-1.png","Runner-2.png");
pathImg=loadImage("path.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=10;
  path.scale=1.2;

 runner=createSprite(200,200);
 runner.addAnimation("running",runnerImg);
 runner.scale=0.06; 

 invisibleground1=createSprite(0,0,30,1000);
 invisibleground2=createSprite(400,400,30,1000);
}

function draw() {
  background(0);

if(path.y>400){
  path.y=height/2;
}
 runner.x=mouseX;
 runner.collide(invisibleground1);
runner.collide(invisibleground2);


invisibleground1.visible=false;
invisibleground2.visible=false;
 
drawSprites();
}
