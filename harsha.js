class Harsha extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("harsha.jpg");
      this.visibility = 255;
    }
    display(){
      //console.log(this.body.speed);
      
      if(this.body.speed<5){
        super.display();
      }
      else{
       
        World.remove(world,this.body);
        push();
        this.visibility = this.visibility - 1000;
        tint(255,this.visibility);
        image(this.image,this.body.position.x,this.body.position.y,this.body.height,this.body.width);
        pop();
      }
    }
  
  };