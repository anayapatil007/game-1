class Character{
    constructor(){
        this.body  = createSprite(490,350,20,20);
        this.body.addImage(sprite);
       // this.body.addImage()
    }

    move(){
        this.body.velocityY = -4;
        
    }
    adjestcamera(){
        camera.position.y = this.body.y;
        camera.position.x = width / 2
    }
    moveRight(){
        //this.body.velocityY = 0;
        this.body.x += 265; 
    }
    moveLeft(){
       // this.body.velocityY = 0;
        this.body.x -= 265; 
    }
}