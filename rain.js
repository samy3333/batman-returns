class Drops{
constructor(x, y, rad){
var options= {
    isStatic: false, 
    'restitution':0.8,
   'friction':0.1,
    'density':1.0
}
this.rad= rad;
this.drop= Bodies.circle(x,y, rad, options);
World.add(world, this.drop);
}
display(){
    fill("white");
    circle(this.drop.position.x,this.drop.position.y, 15);
      
}

}
