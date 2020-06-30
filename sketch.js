const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var particles=[]
var plinkos=[]
var divisions=[]

var divisionHeight=300;
function setup() {
  createCanvas(800,480);
  engine = Engine.create();
    world = engine.world;
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
}