
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var invisible_ground;
var survivalTime = 0;
function preload(){
  createCanvas (600,200)
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
monkey = createSprite(80,315,20,20);
  monkey .addAnimation("moving", monkey_running);
monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
   ground.velocityX = -4 ; 
 
 invisible_ground = createSprite(400,170,900,10)
  invisible_ground.velocityX = - 4
  invisible_ground.visible = false;
}


function draw() {
background("white")
 
    
         
 if (keyDown("space")){
   monkey.velocityY= -10
 }
  monkey.velocityY= monkey.velocityY+0.5;
 if(ground.x>0){
   ground.x = ground. width/2
 }
  if(invisible_ground.x>0){
    invisible_ground.x =invisible_ground.width/2
  }
  monkey.collide(ground)
  monkey.collide(invisible_ground)
  
  spawnObstacle () ;
  spawnFood();
     
   stroke("white")
  textSize(20)
  fill("white")
  text("Score: "+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time :"+ survivalTime,100,50);
 drawSprites(); 
}

function spawnObstacle () {
  if(frameCount%300 === 0){
   obstacle= createSprite(400,315,20,20);
    obstacle.addImage("po",obstacleImage);
    obstacle.scale = 0.2
   obstacle.velocityX= -5
    obstacle.lifetime = 300
  }
  }
 function spawnFood (){
  if(frameCount%80 === 0 ){
   banana = createSprite(300,0)
     banana.addImage("moving",bananaImage);
     banana.scale = 0.6
     banana.velocityX= -5
    banana.y = Math.round(random(100,315));
     banana.lifetime = 300 ;
    banana.scale = 0.1
  } 
   
 } 
function SurvivalTime () {

  
  
  
  
  
}









