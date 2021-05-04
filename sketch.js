var speed,weight;
var wall,thickness;
var bullet;



function setup() {
  createCanvas(800,400);
  speed = random(55,90);
  weight = random(400,1500);
  thickness=random(22,83);

  wall = createSprite(700,200,thickness,height/2);
  wall.shapeColor = "pink" 

  bullet = createSprite(50,200,40,2);
  bullet.shapeColor = "lightbrown";
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;

  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  textSize(24);
  fill("black");
  text("damage: "+ damage, 100,60);


   if(damage<10){
     wall.shapeColor = "green";
   }
   if(damage>10){
     wall.shapeColor = "red";
   }
  }
  drawSprites();
}

function hasCollided(lbullet,lwall){

  bulletRightEdge=lbullet.x+ lbullet.width;
  wallLeftEdge=lwall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  else{
    return false;
  }
}