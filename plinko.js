class Plinko {
    constructor(x,y,radius){
        var options={
           isStatic:true,
           radius:10

        }
        this.radius=radius;

        this.body=Bodies.circle(x,y,this.r,options);
        this.color('white');
        World.add(this.body,world);
    }
     display(){
         var pos=this.body.position;
         ellipseMode(CENTER);
         ellipse()
         ellipse(pos.x,pos.y,this.radius,this.radius);

     }
}