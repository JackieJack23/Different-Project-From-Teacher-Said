
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;

function preload()
{

}

function setup() {
	createCanvas(800, 700);

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2,
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Matter.Bodies.circle(100, 200, 20, ball_options)
	World.add(world, ball)

	Engine.run(engine);
  
	ground = new Ground(200,390,400,20);

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



