var board, bunny, coin, flower, ground, heart, stair, star, tree, gi, ji;
var bunny3;
var score=0;
function preload(){
  board=loadImage("Images/board.png");
  bunny=loadAnimation("Images/bunny1.png","Images/bunny2.png","Images/bunny3.png");
  coin=loadImage("Images/coin.png");
  flower=loadImage("Images/flower.png");
  ground=loadImage("Images/ground.png");
  ground2=loadImage("Images/groundflying.png");
  heart=loadImage("Images/heart.png");
  stair=loadImage("Images/stair.png");
  star=loadImage("Images/star.png");
  tree=loadImage("Images/tree.png");
 // ji=loadImage("Images/runningman.gif");
  //gi=createImg("Images/runningman.gif");
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  score = 0;

 tree0=new Group();
 
 ground3=new Group();
 

 bunny4=createSprite(140,340);
 bunny4.addAnimation("running",bunny);
 bunny4.scale=0.5;

 board1=createSprite(50,340);
 board1.addImage(board);

 ground1=createSprite(400,400,400,20);
 ground1.addImage(ground);
 ground1.scale=1.5;
 ground1.x = ground.width/2;
  ground1.velocityX = -(6 + 3*score/100);

  invisibleGround = createSprite(400,400,400,20);
  invisibleGround.visible = false;
  
  
}

function draw() {
   background(198,241,255); 
   text("Score: "+ score, 700,25);
 
   if (ground1.x < 0){
    ground1.x = ground1.width/2;
    //back.x=back.width/2;
  }

  spawnground();

  drawSprites();
}

function spawnground() {
  //write code here to spawn the clouds
    if (frameCount % 110 === 0) {
    var ground0 = createSprite(400,150);
    ground0.y = Math.round(random(80,150));
    ground0.addImage(ground2);
    //ground0.scale = 0.5;
    ground0.velocityX = -3;
   
     //assign lifetime to the variable
     ground0.lifetime = 200;
    
    //adjust the depth
    ground0.depth = bunny4.depth;
   // trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    ground3.add(ground0);
  }
  
}

function spawntree() {
  
    if(frameCount % 90 === 0) {
    var tree1 = createSprite(250,280);
    //obstacle.debug = true;
    tree1.velocityX = -(6 + 3*score/100);
    tree1.addImage(tree);
   
    tree1.lifetime = 300;
    //add each obstacle to the group
    tree0.add(tree1);
  }
}
