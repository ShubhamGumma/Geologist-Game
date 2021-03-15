class Hammer {
    constructor(x,y,width,height) {
      var options = {
          'density' :2,
          'friction':1.0,
          'restitution':2
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      rectMode(CENTER);
      fill("gold");
      rect(pos.x, pos.y, this.width, this.height);
    }
}