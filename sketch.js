var thickness,wall;
var bullet,speed,weight

function setup() {
  createCanvas(800,400);


  speed=random(231,321)
  weight=random(30,52)
  thickness=random(22,83)
  
  bullet=createSprite(50,200,50,5)
  bullet.velocityX=speed
  bullet.shapeColor=color(255)

  wall=createSprite(600,200,60,thickness,height/2)
  wall.shapeColor=color("red")
}

function draw(){

  background(0);
  if(hascollided(bullet,wall))
  {
    bullet.velocityX=0
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

  if(damage>10)
  {
    wall.shapeColor=color(255,0,0)
  }
  if(damage<10)
  {
    wall.shapeColor=color(0,255,0)
   }
  }

  
    
  

  drawSprites();
}
function hascollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false
}