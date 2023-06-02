const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var groundTop, groundBottom, groundLeft, groundRight;
var btn1, btn2;



//Crear espacio de nombre para Engine
//Crear espacio de nombre para World
//Crear espacio de nombre para Bodies
//Crear espacio de nombre para Body


function setup() {
  createCanvas(400,400);
//crear engine
  //Agregar world a engine
  engine = Engine.create();
  world = engine.world;
  

  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  groundTop = new Box (200,-40,400,100)
  groundLeft = new Box (-40,200,100,400)
  groundRight = new Box (435,200,100,400)
  groundBottom = new Box (200,440,400,100)
  
//crear un fondo
//agregarlo a world

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  btn1 = createImg("greenArrow.png")
  btn1.position(20,30)
  btn1.size(50,50)
  btn1.mouseClicked(Vforce)

  btn2 = createImg("blueArrow.png")
  btn2.position(315,25)
  btn2.size(65,65)
  btn2.mouseClicked(Hforce)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background("black");
  Engine.update(engine);
  
  
  strokeWeight(5);
  stroke("white");
  fill("black");
  ellipse(ball.position.x,ball.position.y,20);
  //escribir una función rectangle para mostrar el suelo.
 
groundTop.show()
groundLeft.show()
groundRight.show()
  groundBottom.show()
  
}
function Vforce(){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.1})
}

function Hforce(){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.1, y:0})
}