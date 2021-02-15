
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new Dustbin(600,680,100,20);
	dustbun2 = new Dustbin(550,665,20,50);
	dustbun3 = new Dustbin(650,665,20,50);

	paperBall = new Paper(50,650,70);

	ground = new Ground(width/2,height-5,width,20);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("0");

  paperBall.display();

  ground.display();

  fill("red");
  dustbin1.display();
  dustbun2.display();
  dustbun3.display();

  drawSprites();
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:600,y:-800});
  }
}