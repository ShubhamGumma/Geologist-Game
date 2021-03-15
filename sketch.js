const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var hammer;
var stone;
var rubber;
var iron;
var sand1,sand2,sand3,sand3,sand4,sand5,sand6;

function setup() {
	createCanvas(1000,600);;
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500,580,1000,20);
	hammer = new Hammer(300,600,60,15);
	rubber = new Rubber(900,500);
	stone = new Stone(700,500,50,50);
	iron = new Iron(200,500,50,25);
	sand1 = new Sand(204,500);
	sand2 = new Sand(206,500);
	sand3 = new Sand(208,500);
	sand4 = new Sand(210,500);
	sand5 = new Sand(212,500);
	sand6 = new Sand(213,500);

	Engine.run(engine);
}


function draw() {
  background(135,206,250);
  Engine.update(engine);
  rectMode(CENTER);
 
  ground.display();
  hammer.display();
  rubber.display();
  stone.display();
  iron.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
}