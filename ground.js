class Ground{
    constructor( x, y, width, height){ 
      var ground_options={
        isStatic : true 
     }
     this.ground = Bodies.rectangle(450,580,900,20,ground_options)
     World.add(world,this.ground);
   }
   display(){
      noStroke(); 
      fill("black");
      rectMode(CENTER); 
      rect(this.ground.position.x,this.ground.position.y,900,20);
 }
}