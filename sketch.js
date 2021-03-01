const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var boy, boyImg;
var ground;
var rain;
var maxDrops= 100;
function preload(){
   // boyImg.loadImage= 
}

function setup(){
    var canvas = createCanvas(800,590);
    engine = Engine.create();
    world = engine.world;
    
    rain= new Drops(500, 200, 5);
    ground= new Ground(400, 0, 10, 10);
    boy= new Boy(400, 200, 20, 20);
}

function draw(){
    background("indigo");
    rain.display();
    ground.display();
    boy.display();
    drawSprites();
}   

