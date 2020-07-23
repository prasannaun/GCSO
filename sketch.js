var car, wall
var speed, weight

function setup() {
  createCanvas(800,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(100, 200, 20, 20);
  car.shapeColor=("lime");
  wall=createSprite(700, 200, 25, height/2);
  wall.shapeColor=("blue");
}


function draw() {
  background("black");
  
  if(keyDown("space")){
     car.velocityX=speed;
    collision(); 
  }  

  drawSprites();
  
}
function collision() {
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;
    var deformation = 0.5*weight*speed/22500;

    if (deformation > 180) {
      car.shapeColor=color(255,0,0);
    }
    if (deformation > 180 && deformation > 100) {
      car.shapeColor=color(230,230,0);
    }
    if (deformation > 100) {
      car.shapeColor=color(0,255,0);
    }
  }
}