class Rope{ 
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX; 
        this.offsetY = offsetY; 
        //pointB = pointB; 
        var options = { 
            bodyA: bodyA, 
            bodyB: bodyB,
            pointB: {x:this.offsetX, y:this.offsetY}, 
            // stiffness: 0.4, 
            //length: 20 
        } 
        //this.pointB = pointB; 
        this.rope = Constraint.create(options); 
        World.add(world, this.rope); 
    } 
    display(){ 
        //push(); 
        var pointA = this.rope.bodyA.position; 
        var pointB = this.rope.bodyB.position; 
        strokeWeight(2); 
        //pop(); 
        var Anchor1X = pointA.x; 
        var Anchor1Y = pointA.y; 
        var Anchor2X = pointB.x + this.offsetX; 
        var Anchor2Y = pointB.y + this.offsetY; 
        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y); 
    } 
}
