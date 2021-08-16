const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ball
var ball1;
var ball2;
var ball3;
var ball4;
var engine;
var world;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var ball_options = {
		isStatic: false, 
	restitution: 0.8,
	friction: 0,
	density: 0.8
	}


	ball = Bodies.circle(320,380,20,ball_options);
	World.add(world,ball);

	ball1 = Bodies.circle(360,380,20,ball_options);
	World.add(world,ball1);

	ball2 = Bodies.circle(400,380,20,ball_options);
	World.add(world,ball2);

	ball3 = Bodies.circle(440,380,20,ball_options);
	World.add(world,ball3);

	ball4 = Bodies.circle(480,380,20,ball_options);
	World.add(world,ball4);

	rope1 = new rope(ball,roof,-80,0);
	World.add(world,rope1);

	rope2 = new rope(ball1,roof,-80,0)
	World.add(world,rope2);

	rope3 = new rope(ball2,roof,-80,0)
	World.add(world,rope2);

	rope4 = new rope(ball3,roof,-80,0)
	World.add(world,rope2);

	rope5 = new rope(ball4,roof,-80,0)
	World.add(world,rope2);

	

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("purple");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  rope1.display()
  rope2.display() 
  rope3.display()
  rope4.display()
  rope5.display()
  
  //create ellipse shape for multiple bobs here
  ellipse(ball.position.x,ball.position.y,20,20);
  ellipse(ball1.position.x,ball1.position.y,20,20);
  ellipse(ball2.position.x,ball2.position.y,20,20);
  ellipse(ball3.position.x,ball3.position.y,20,20);
  ellipse(ball4.position.x,ball4.position.y,20,20);

  //line(roof.position.x,roof.position.y,ball.position.x,ball.position.y)
  line(320,100,ball.position.x,ball.position.y)
  line(360,100,ball1.position.x,ball1.position.y)
  line(400,100,ball2.position.x,ball2.position.y)
  line(440,100,ball3.position.x,ball3.position.y)
  line(480,100,ball4.position.x,ball4.position.y)
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed() {
	if(keyCode===RIGHT_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:-50,y:-45})
	}
}