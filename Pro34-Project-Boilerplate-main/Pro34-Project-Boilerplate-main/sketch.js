
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hydro;
var mario;
var score = 0;


function preload (){

}

function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;
  player = new box (50, 350, 85,85) 
}


function draw() 
{
  
  Engine.update(engine);
  player.show ()
  
}

