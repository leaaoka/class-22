const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var ourengine,ourworld,ground

function setup() {
  createCanvas(400,400);
  ourengine = Engine.create();
  ourworld = ourengine.world;

  var ground_options = {
    isStatic: true

  }

  ground = Bodies.rectangle(200,390,400,20,ground_options)
  World.add(ourworld,ground)
  console.log(ground)

  var ball_options = {

    'restitution': 0.8
  }


  ball = Bodies.circle(200,200,20,ball_options)
  World.add(ourworld,ball)
  
  box = Bodies.rectangle(150,100,100,50)
  World.add(ourworld,box)
}

function draw() {
  background(0);  
  Engine.update(ourengine)
  rectMode(CENTER);
 
  rect(ground.position.x,ground.position.y,400,20)

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  
  rect(box.position.x,box.position.y,100,50)
}