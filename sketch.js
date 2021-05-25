const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine
var world

var ground

//var options1
//var options2
var ball

function setup() {
  
  createCanvas(400,400);
  var options1 = 
  {
    isStatic:true
  }
  var options2 = 
  {
    restitution:1.0
  }

  engine = Engine.create()
  world = engine.world
  ground = Bodies.rectangle(200,390,200,20,options1)
  World.add(world,ground)
  ball = Bodies.circle(200,100,20,options2)
  World.add(world,ball)
 

}

function draw() {
  background(0); 
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20)
  
  
}