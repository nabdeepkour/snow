const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var sn1,sn2,bg,sn4,engine,world,snowObj;

function preload() {
bg = loadImage("snow3.jpg");



}
function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;
snowObj = new Snow(200,200);

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(bg); 
  Engine.update(engine);

  snowObj.display();
  drawSprites();
}