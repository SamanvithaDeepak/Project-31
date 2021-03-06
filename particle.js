class Particle{
    constructor(x,y,r){
        var options={
            isStatic:false
         }
        
         this.r = r;
        this.body = Bodies.circle(x, y, this.r, options);
        
        World.add(world,this.body)
    }

    display(){
    var pos = this.body.position;
        var angle = this.body.angle;

        push();
        fill(random(0,255), random(0,255), random(0,255));
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
}
}