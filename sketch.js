var moving;

function setup() {
  createCanvas(800, 400);
  fixed = createSprite(400, 200, 50, 50);
  moving = createSprite(200, 200, 20, 20);
  square = createSprite(300, 200, 20, 20);
}

function draw() {
  background("red");

  moving.x = mouseX;
  moving.y = mouseY; 
  
  if(isTouching(moving, square)) {
    square.shapeColor = "yellow";
  }

  drawSprites();
}

function isTouching(object1, object2) {
  if(object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object1.width/2 + object2.width/2 && object1.y - object2.y < object1.height/2 + object2.height/2
    && object2.y - object1.y < object1.height/2 + object2.height/2) {
      return true;
  }
}