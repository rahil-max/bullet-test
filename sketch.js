var bullet,wall,thickness;
var speed,weight;
var damage;





function setup() {
  createCanvas(800,400);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 100, 50);
  wall = createSprite(400, 200,thickness, height/2);

  speed = random(223,321);
  weight = random(30,52);
  
}

function draw() {
  background(255,255,255); 

  bullet.shapeColor = color(0,0,255);
  
  if (keyDown("space")) {
    bullet.velocityX = speed;
   
  }

  damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

  if (isTouching(bullet,wall) && damage<=10 && damage>5){
    wall.shapeColor= color(230,230,0);
    bullet.velocityX = 0;
  
  }

  else if (isTouching(bullet,wall) && damage<=5 ){
    wall.shapeColor = color(0,255,0);
    bullet.velocityX = 0;
    
  
  }

  else if (isTouching(bullet,wall) && damage>10){
    wall.shapeColor = color(255,0,0);
    bullet.velocityX = 1;
   
  }

  

  drawSprites();
}