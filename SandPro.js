class Sand{
    constructor(x, y) {
        var options = {
            'restitution':1.3,
            'friction':5,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 50, options);
        this.radius = 5;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}