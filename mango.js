class Mango {
    constructor(x, y,radius) {
      var options = {
          isStatic:true,
          restitution:0.3,
          friction:1,
          density:1.2,
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius= radius;
    
      this.image = loadImage("sprites/mango.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill(255);
      imageMode(RADIUS);
      image(this.image, pos.x, pos.y, this.radius, this.radius);
      console.log(this.image)
      
      
    }
  };