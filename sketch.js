var character;
var road;
var ground;
var sprite;
function preload(){
 road = loadImage("track.png");
 sprite = loadImage("sprite.png");
}
function setup(){
    createCanvas(displayWidth - 30,displayHeight - 80); 
    ground = createSprite(width/2,height/2,width,height *2);
    ground.addImage(road);
    
    ground.scale = 2;
    ground.velocityY = 2;
    character = new Character();
    //character.move();
}
function draw(){
    background("black");
    //character.adjestcamera();
    if (frameCount % 400 === 0){
      var coin = new Coin()
    }
      
    
  if(ground.y > height){
    ground.y = ground.height/2
  }
 // character.body.collide(ground);
  
   
    if(keyWentDown(RIGHT_ARROW)) {
      if(character.body.x < 1020 )
       { character.moveRight();}
      }
      if(keyWentDown(LEFT_ARROW)) {
        if(character.body.x > 225)
       { character.moveLeft();}
      }
    
      console.log(character.body.x)
      drawSprites();
}


