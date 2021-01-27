var player, alien, wall;
var playerImage, alienImage;
var life = 3;
var gameState = "serve";

function preload(){
  playerImage = loadImage("Player.png");
  alienImage = loadImage("Alien.png");
  doorImage = loadImage("door.png")
  onImage = loadImage("on.png")
  offImage = loadImage("off.png")
}

function setup() {
  createCanvas(800,800);
  
  
  
  
  player = createSprite(30,60,100,100)
  player.addImage(playerImage)
  player.scale = 0.1
  player.setCollider("rectangle",0,0,player.width-140,player.height-100);
  
  borderUp = createSprite(400,0,800,20)
  borderUp.shapeColor = "red";
  
  borderRight = createSprite(800,400,20,800)
  borderRight.shapeColor = "red";
  
  borderLeft = createSprite(0,400,20,800)
  borderLeft.shapeColor = "red";
  
  borderDown = createSprite(400,800,800,20)
  borderDown.shapeColor = "red";
  
  wall1 = createSprite(350,150,700,10)
  wall1.shapeColor = "red";
  
  wall2 = createSprite(500,300,700,10)
  wall2.shapeColor = "red";
  
  wall3 = createSprite(155,400,10,200)
  wall3.shapeColor = "red";
  
  wall4 = createSprite(300,505,300,10)
  wall4.shapeColor = "red";
  
  wall5 = createSprite(630,505,100,10)
  wall5.shapeColor = "red";
  
  wall6 = createSprite(675,555,10,100)
  wall6.shapeColor = "red";
  
  wall7 = createSprite(745,600,150,10)
  wall7.shapeColor = "red";
  
  alien1 = createSprite(400,90,20,20)
  alien1.addImage(alienImage)
  alien1.scale = 0.2
  alien1.velocityY = random(2,4)
  
  alien2 = createSprite(300,230,20,20)
  alien2.addImage(alienImage)
  alien2.scale = 0.2
  alien2.velocityY = random(2,4)
  
  alien3 = createSprite(60,400,20,20)
  alien3.addImage(alienImage)
  alien3.scale = 0.2
  alien3.velocityX = random(2,4)
  
  alien4 = createSprite(600,415,20,20)
  alien4.addImage(alienImage)
  alien4.scale = 0.2
  alien4.velocityY = random(2,4)
  
  alien5 = createSprite(250,625,20,20)
  alien5.addImage(alienImage)
  alien5.scale = 0.2
  alien5.velocityY = random(4,8)
  
  door = createSprite(765,695,10,10)
  door.addImage(doorImage)
  door.scale = 0.7
  door.setCollider("rectangle",100,20)
  
  Key = createSprite(715,550,10,10)
  Key.addImage(offImage)
  Key.scale = 0.5
  Key.setCollider("rectangle",0,0,20,80)
  
  laser  = createSprite(670,700,5,177)
  laser.shapeColor = "blue"
}

function draw() {
  background("black");
  
  alien1.bounceOff(wall1)
  alien1.bounceOff(borderUp)
  
  alien2.bounceOff(wall1)
  alien2.bounceOff(wall2)
  
  alien3.bounceOff(wall3)
  alien3.bounceOff(borderLeft)
  
  alien4.bounceOff(wall5)
  alien4.bounceOff(wall2)
  
  alien5.bounceOff(wall4)
  alien5.bounceOff(borderDown)
  
  fill("white")
  textSize(30)
  text("Lifetime = "+life,85,45)
  
  textSize(12)
  text("Switch for Blue Laser",675,500)
  
  text(mouseX+","+mouseY,mouseX,mouseY)
  
  if(gameState === "serve"){
    fill("white")
  textSize(20)
     text("Press Space to Play",175,400)
    
    if(keyDown ("space")){
      gameState = "play";
    }
     }
  
  if(gameState === "play"){
      playerMove();
    
    if(player.isTouching(alien1) || player.isTouching(alien2) || player.isTouching(alien3) || player.isTouching(alien4) || player.isTouching(alien5) || player.isTouching(wall1) || player.isTouching(wall2) || player.isTouching(wall3) || player.isTouching(wall4) || player.isTouching(wall5) || player.isTouching(wall6) || player.isTouching(wall7) || player.isTouching(borderUp) || player.isTouching(borderRight) || player.isTouching(borderLeft) || player.isTouching(borderDown)){
     life = life-1;
     player.x = 30;
     player.y = 60;
  }   
    
    if(player.isTouching(Key)){
    laser.velocityY = 3
    Key.addImage(onImage)
  }
    
    if(player.isTouching(laser)){
      life = life - 1
      player.x = 420
    }
    
    if(player.isTouching(door)){
    
    gameState = "won"
  }
    
    if(life === 0){
      gameState = "end"
    }
  }
  
  if(gameState === "won"){
      stroke("yellow");
    strokeWeight(6);
    textSize(50)
    text("You Won!!!",200,400)
    }
  
  if(gameState === "end"){
    stroke("yellow");
    strokeWeight(6);
    textSize(50)
    text("You Lose!!!",200,400)
  }
  
  //Key.debug = true;
  
    drawSprites();
}

function playerMove(){
  if(keyDown(UP_ARROW)){
    player.y = player.y-10
  }
  
  if(keyDown(DOWN_ARROW)){
    player.y = player.y+10
  }
  
  if(keyDown(RIGHT_ARROW)){
    player.x = player.x+10
  }
  
  if(keyDown(LEFT_ARROW)){
    player.x = player.x-10
  }
}
