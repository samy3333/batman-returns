class Boy{
constructor(x,y, width, height){
    var options= {
        isStatic: true,
        'density':1.0
    }
    this.width= width;
    this.height= height;
    this.boy = Bodies.rectangle(x, y, options);
    this.animation = loadAnimation("walking_1.png", "walking_2.png", "walking_3.png", "walking_4.png", "walking_5.png", "walking_6.png", "walking_7.png", "walking_8.png");
World.add(world, this.boy);
}
display(){
        translate(this.boy.position.x, this.boy.position.y);
       // imageMode(CENTER);
        animation(this.animation, 0, 0, width, height);
}
}