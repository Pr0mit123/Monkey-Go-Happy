var score = 0;

var monkey,monkey_running;
var banana,bananaImage,bananaGroup;
var stone,stoneImage,stoneGroup;
var background,backgroundImage;
var ground;

function preload()  {
monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");  

bananaImage = loadImage("banana.png");
  
stoneImage = loadImage("stone.png");

backgroundImage = loadImage = ("jungle.png");
}

function setup() {
  createCanvas(400, 400);
  
  monkey = createSprite(50,300,10,10);
  monkey.addAnimation("running", monkey_running);
  
  stone = createSprite(400,300,10,10);
  stone.addImage(stoneImage);
  
  
  banana = createSprite(400,200,10,10);
  banana.addImage(bananaImage);
  
  background = createSprite(400,200,20,20);
  background.addImage(backgroundImage);
  background.velocityX = -4;
  
  ground = createSprite(200,290,400,25);
  ground.x = background = ground.width/2;
  ground.visible = false
}

function draw() {
  background(220);
  
  stroke ("White");
  textSize(20);
  text("score :"+ score, 240, 100);
  
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if (background.x < 0){
      background.x = ground.width/2;
    }
    
  monkey.collide(ground);
 
  if (keyDown("space")) {
    monkey.velocityY = -12;  
    }
    
    monkey.velocityY = monkey.velocityY + 0.8;
    
    if (monkey.isTouching(bananaGroup)) {
   bananaGroup.destroyEach();
   score = score +2;
      
    if (stoneGroup.isTouching(monkey))  {
      monkey.scale = 0.2;
     }
  
    bananas();
    stones();  
  
  drawSprites();
}

if (World.frameCount % 80 === 0) {
    banana = createSprite(400, 200, 10, 10);
    banana.y = randomNumber(200,280);
    banana.addAnimation("bananaImage");
    banana.velocityX = -4;
    banana.lifetime = 150;
    BananaGroup.add(banana);
    banana.scale = 0.05;
  }
}

function stones () {
  if (World.frameCount % 300 === 0) {
    var obstacle = createSprite(400, 325, 10, 10);
    obstacle.addAnimation("Stone");
    obstacle.velocityX = -4;
    obstacle.lifetime = 150;
    stoneGroup.add(obstacle);
    obstacle.scale = 0.15;
  }
} 

function size ()  {

      switch(score) {
      case 10: monkey.scale=0.12;
              break;
      case 20: monkey.scale=0.14;
              break;
      case 30: monkey.scale=0.16;
              break;
      case 40: monkey.scale=0.18;
              break;
      case 50: monkey.scale=0.20;
              break;
      default: break;
    }
}