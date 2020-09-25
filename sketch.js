var manFroViewImg,manBackViewImg,manRightViewImg,manLeftViewImg;
var saniImg,virus1Img,virus2Img,virus3Img;
var man,sanitizer1,sanitizer2,sanitizer3,sanitizer4;
var virus1,virus2,virus3;
var win,lose;
var manStart,manEnd;
var gameState = "SERVE";
var sanScore = 0;
var winner,loser;
function preload(){
manFroViewImg = loadAnimation("manfroviews/manfroview1.png","manfroviews/manfroview2.png","manfroviews/manfroview3.png",
"manfroviews/manfroview4.png","manfroviews/manfroview5.png","manfroviews/manfroview6.png","manfroviews/manfroview7.png",
"manfroviews/manfroview8.png","manfroviews/manfroview9.png");

manBackViewImg = loadAnimation("mantopviews/mantopview1.png","mantopviews/mantopview2.png","mantopviews/mantopview3.png"
,"mantopviews/mantopview4.png","mantopviews/mantopview5.png","mantopviews/mantopview6.png","mantopviews/mantopview7.png"
,"mantopviews/mantopview8.png","mantopviews/mantopview9.png");

manRightViewImg  = loadAnimation("manrightviews/manrightview1.png","manrightviews/manrightview2.png",
"manrightviews/manrightview3.png","manrightviews/manrightview4.png","manrightviews/manrightview5.png",
"manrightviews/manrightview6.png","manrightviews/manrightview7.png","manrightviews/manrightview8.png",
"manrightviews/manrightview9.png");

manLeftViewImg = loadAnimation("manleftviews/manleftview1.png","manleftviews/manleftview2.png","manleftviews/manleftview3.png"
,"manleftviews/manleftview4.png","manleftviews/manleftview5.png","manleftviews/manleftview6.png","manleftviews/manleftview7.png"
,"manleftviews/manleftview8.png","manleftviews/manleftview9.png");

saniImg = loadImage("power/sanitizer.png");
virus1Img = loadImage("viruses/virus1.png");
virus2Img = loadImage("viruses/virus2.png");
virus3Img = loadImage("viruses/virus3.png");
virus4Img = loadImage("viruses/virus4.png");
maze = loadImage("maze.png");
manStart = loadImage("mantopviews/mantopview1.png");
manEnd = loadImage("manfroviews/manfroview1.png");
win = loadImage("win.png");
lose = loadImage("game.png");
}
function setup() {
  createCanvas(1000,700);
 
  wall1 = createSprite(500,695,1000,10);
  wall2 = createSprite(500,5,1000,10);
  wall3= createSprite(5,40,10,400);
  wall4= createSprite(995,100,10,300);
  wall5= createSprite(5,600,10,400);
  wall6= createSprite(995,560,10,400);
  wall7= createSprite(5,250,320,50);
  wall8= createSprite(995,250,320,50);
  wall9= createSprite(5,400,320,50);
  wall10= createSprite(995,380,320,50);
  //
  wall11= createSprite(130,75,100,50);
  wall12= createSprite(330,100,200,60);
  wall13= createSprite(860,100,100,100);
  wall14= createSprite(660,100,120,70);
  //
  wall15= createSprite(130,160,100,20);
  wall16= createSprite(860,140,40,80);
  //
  wall17= createSprite(500,50,50,100);
  //
  wall18= createSprite(500,240,50,60);
  wall19= createSprite(500,200,240,50);
  //
  wall20= createSprite(280,310,50,200);
  wall21= createSprite(340,300,100,30);
  //
  wall22= createSprite(720,290,50,200);
  wall23= createSprite(660,300,100,30);
  //
  wall24 = createSprite(210,500,30,30)
wall25 = createSprite(500,565,200,15);
//
  wall26= createSprite(660,520,100,20);
  wall27= createSprite(330,520,100,20);
 //
 wall28= createSprite(780,500,30,30);
 wall29= createSprite(340,400,30,30);
 wall30= createSprite(650,400,30,30);
 wall31= createSprite(380,240,30,30);

  wall32= createSprite(500,430,200,25);
  wall33= createSprite(500,480,45,80);
//
  wall34= createSprite(240,680,300,20);
  wall35= createSprite(270,640,45,60);
  //
  wall36= createSprite(750,680,300,20);
  wall37= createSprite(710,640,45,60);
  //
  wall38= createSprite(100,600,100,15);
  wall39= createSprite(135,570,30,50);
//
  wall40= createSprite(900,600,80,15);
  wall41= createSprite(875,570,30,50);
//
  wall42= createSprite(10,485,80,20);
  wall43= createSprite(990,480,80,20);
//New
wall44 = createSprite(500,620, 50,20);
wall45 = createSprite(515,590,20,40);
//
  box1 = createSprite(500,350,200,100);
  box2 = createSprite(500,350,180,80);
  box3 = createSprite(500,305,70,10);
 
  box1.shapeColor = "lightBlue";
  box2.shapeColor = "white";
  box3.shapeColor = "white";
  man = createSprite(450,550,20,20);
  man.debug = false;
  man.setCollider("rectangle",0,0,30,50);
  man.addImage(manStart);
  man.addImage("manend",manEnd);
 man.addAnimation("BackView",manBackViewImg);
 man.addAnimation("frontView",manFroViewImg);
 man.addAnimation("rightView",manRightViewImg);
 man.addAnimation("leftView",manLeftViewImg);
//man.scale = 0.5;
winner = createSprite(500,350);
winner.addImage(win);
winner.visible = false;

loser = createSprite(500,350);
loser.addImage(lose)
loser.visible = false;
 virus1 = createSprite(50,270,20,20);
virus1.addImage(virus1Img);
virus1.scale = 0.1;
//
 virus2 = createSprite(100,270,20,20);
 virus2.addImage(virus2Img);
 virus2.scale = 0.3;

 virus3 = createSprite(950,270,20,20);
virus3.addImage(virus3Img);
virus3.scale = 0.3;

virus4 = createSprite(950,270,20,20);
virus4.addImage(virus4Img);
virus4.scale = 0.15;

 sanitizer1 =createSprite(50,100,20,20);
 sanitizer1.addImage(saniImg);
 sanitizer1.scale = 0.15;

 sanitizer2 = createSprite(950,100,20,20);
sanitizer2.addImage(saniImg);
sanitizer2.scale = 0.15;

 sanitizer3 = createSprite(50,530,20,20);
sanitizer3.addImage(saniImg);
sanitizer3.scale = 0.15; 

 sanitizer4 = createSprite(950,530,20,20);
 sanitizer4.addImage(saniImg);
sanitizer4.scale = 0.15;

 walls = new Group();
 viruses = new Group();

  edges = createEdgeSprites();

  virus1.velocityX = 8;
  virus1.velocityY = -10;

  virus2.velocityX = 15
virus2.velocityY = -5

virus3.velocityX =-4
virus3.velocityY = -8

virus4.velocityX =10
virus4.velocityY = -20

}

function draw() {
  background("white");  
 textSize(20)
 walls.add(wall1)
  walls.add(wall2)
  walls.add(wall3)
  walls.add(wall4)
  walls.add(wall5)
  walls.add(wall6)
  walls.add(wall7)
  walls.add(wall8)
  walls.add(wall9)
  walls.add(wall10)
  walls.add(wall11)
  walls.add(wall12)
  walls.add(wall13)
  walls.add(wall14)
  walls.add(wall15)
  walls.add(wall16)
  walls.add(wall17)
  walls.add(wall18)
  walls.add(wall19)
  walls.add(wall20)
  walls.add(wall21)
  walls.add(wall22)
  walls.add(wall23)
  walls.add(wall24)
  walls.add(wall25)
  walls.add(wall26)
  walls.add(wall27)
 walls.add(wall28)
 walls.add(wall29)
 walls.add(wall30)
 walls.add(wall31)
  walls.add(wall32)
  walls.add(wall33)
  walls.add(wall34)
  walls.add(wall35)
  walls.add(wall36)
  walls.add(wall37)
  walls.add(wall38)
  walls.add(wall39)
  walls.add(wall40)
  walls.add(wall41)
  walls.add(wall42)
  walls.add(wall43)
  walls.add(wall44);
  walls.add(wall45);
  
  viruses.add(virus1);
  viruses.add(virus2);
  viruses.add(virus3);
  viruses.add(virus4);
   man.collide(walls);
text("score : "+sanScore,50,40);

if(gameState === "SERVE"){
 // clear();
 virus1.visible= false;
 virus2.visible= false;
 virus3.visible= false;
 virus4.visible= false;
  man.x = 50;
  man.y = 650;
  textSize(30);
  fill("black");
text("collect all the sanitizers & get to isolation ward",200,600);
text("press space to start",400,650);
  if(keyDown("space")){
gameState = "PLAY";
  }
}

if(gameState === "PLAY"){
  virus1.visible= true;
  virus2.visible= true;
  virus3.visible= true;
  virus4.visible= true;
  if(keyDown(UP_ARROW)){
    man.velocityY = -4;
    man.velocityX = 0;
    man.changeAnimation("BackView");
  }
 
  if(keyDown(DOWN_ARROW)){
    man.velocityY = 4;
    man.velocityX =0;
    man.changeAnimation("frontView");
  }
 
  if(keyDown(RIGHT_ARROW)){
    man.velocityX = 4;
    man.velocityY = 0;
    man.changeAnimation("leftView");
  }
 
  if(keyDown(LEFT_ARROW)){
    man.velocityX = -4;
    man.velocityY = 0;
    man.changeAnimation("rightView");
  }
 if(man.isTouching(sanitizer1)){
   sanitizer1.visible = false;
   sanScore+= 100;
 }
 if(man.isTouching(sanitizer2)){
  sanitizer2.visible = false;
  sanScore+= 100;
}
if(man.isTouching(sanitizer3)){
  sanitizer3.visible = false;
  sanScore+= 100;
}
if(man.isTouching(sanitizer4)){
  sanitizer4.visible = false;
  sanScore+= 100;
}

 if(viruses.isTouching(walls)){
  viruses.bounceOff(walls);
 }
 if(viruses.isTouching(man)){
   gameState = "END";
 }

};

viruses.bounceOff(edges);

viruses.collide(box1);
man.collide(edges[2]);
man.collide(edges[3]);

if(gameState === "END"){
  virus1.visible= false;
  virus2.visible= false;
  virus3.visible= false;
  virus4.visible= false;
  man.changeImage("manend");
man.velocityX = 0;
man.velocityY = 0;
loser.visible = true;
//viruses.setVelocityYEach(0);
//viruses.setVelocityXEach(0);
if(keyDown("r")){
  gameState = " SERVE "
  reset();

}
}
if(man.isTouching(box3)){
  gameState = "END"
 winner.visible = true;
}

  drawSprites();
}

function reset(){
 gameState = "SERVE";
sanScore = 0;
winner.visible = false;
loser.visible = false;
sanitizer1.visible = true;
sanitizer2.visible = true;
sanitizer3.visible = true;
sanitizer4.visible = true;
}