class Zone {
    constructor(x, y) {
      var options = {
          'restitution':0,
          
      }
      this.body = Bodies.rectangle(x, y, height,width, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("pink");
      rect(x,y, this.width, this.height);
      pop();
    }
  };