var bk,bkImg;
var ship,shipImg;
var danger,dangerImg,dangerGroup;
var danger2,danger2Img,danger2Group;
var score = 0;
var blast,blastImg;
var getReady,getReadyImg;
var PLAY = 1;
var END = 0;
var gameState = "PLAY";
var power,powerImg,powergroup;





function preload(){
bk = loadImage("space/space.jpg");
shipImg = loadImage("battleship2.png");
dangerImg = loadImage("alienballs.png");
danger2Img = loadImage("enemy2.png");
blastImg = loadImage("explosion.png");
getReadyImg = loadImage("getready.png");
powerImg = loadImage("energy.png");
}



function setup(){
createCanvas(1536,753);

ship = createSprite(750,400);
ship.addImage("ship",shipImg);
ship.scale = 0.7;
ship.visible = false;

getReady = createSprite(750,400);
getReady.addImage("getReady",getReadyImg);
getReady.scale = 2;
getReady.visible = true;

score = 0;

blast = createSprite(750,400);
  blast.addImage(blastImg);
  blast.scale = 2;
  blast.visible = false;

  dangerGroup = new Group();
  powergroup = new Group();
  danger2Group = new Group();
}






function draw(){
background(bk);
if (gameState==="PLAY"){
  textSize(30);
  fill("orange");
  text("**your mission is completed while returning you were attacked by aliens ** ",22 ,50,);
  text("**you do not have any weapons you just have to escape from there and save your self ALL THE BEST  **",22,80);
  text("**press space to play*",22,110);
  text("# Score #: "+ score, 90,700);

  

  var select_danger = Math.round(random(1,1));
  
  if (World.frameCount % 100 == 0) {
    if (select_danger == 1) {
      danger();
    
    }
  }  

  
  var select_power = Math.round(random(1,1));
  
  if (World.frameCount % 100 == 0) {
    if (select_power == 1) {
      power1();
    
    }
  }  

  var select_danger2 = Math.round(random(1,1));
  
  if (World.frameCount % 100 == 0) {
    if (select_danger2 == 1) {
      dangerr2();
    
    }
  }  

  

  edges= createEdgeSprites();
  ship.collide(edges);

  
  
  if(keyDown("LEFT_ARROW")){
    
    ship.x = ship.x-20;
  }
  
  if(keyDown("RIGHT_ARROW")){
    ship.x = ship.x+20;
  }
  
  if(keyDown("UP_ARROW")){
    ship.y = ship.y-20;
  
  }
  
  if(keyDown("DOWN_ARROW")){
    ship.y = ship.y+20;
  }
  
  if(keyDown("space")){
    ship.visible = true;
    getReady.visible = false;
    dangerGroup.visible = true;
    gameState = "PLAY";
  }
  
  if(powergroup.isTouching(ship)){
    score = score + 1;
    power.visible = false;

    
}


  if(dangerGroup.isTouching(ship)){
    gameState = "END";
    
}

if(danger2Group.isTouching(ship)){
  gameState = "END";
  
}
  
}
else if (gameState === "END") {
  blast.x = ship.x;
  blast.y = ship.y;
  blast.visible = true;
  ship.velocity = 0;
  dangerGroup.setVelocityXEach(0);
  dangerGroup.setLifetimeEach(-1);
  danger.visible = false;
  textSize(35);
  text("# Score #: "+ score, 90,700);

  }


drawSprites();

}

function danger() {
  var danger = createSprite(Math.round(random(100, 2000)),0, 20, 20);
  danger.addImage(dangerImg);
  danger.velocityY = 20;
  danger.visible = true;
  danger.lifetime = 150;
  danger.scale = 0.3;
  dangerGroup.add(danger);
  


  
}

function power1() {
   power = createSprite(Math.round(random(50, 1000)),0, 10, 10);
  power.addImage(powerImg);
  power.velocityY = 20;
  power.visible = true;
  power.lifetime = 150;
  power.scale = 2;
  powergroup.add(power);
  power.visible = true;


  
}
 
function dangerr2() {
  danger2 = createSprite(Math.round(random(300, 1000)),0, 30, 30);
  danger2.addImage(danger2Img);
  danger2.velocityY = 25;
  danger2.visible = true;
  danger2.lifetime = 150;
  danger2.scale = 0.4;
 danger2Group.add(danger2);


 
}

