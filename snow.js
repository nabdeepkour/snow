class Snow{
    constructor(x,y){
    var options = {
        density:1.0,
        friction:0.08,
        restitution:0.001
    }
        this.image= loadImage("snow4.webp");
        this.body = Bodies.circle(x,y,100,100);
        
        World.add(world, this.body);
    }
    display(){
    var angle = this.body.angle;
    var pos = this.body.position;
    rotate(angle);
    translate(pos.x,pos.y);
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,100,100);
    }
    
    
    
    
    }