const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, slingShot;
var backgroundImg, platform;

function preload() {
  backgroundImg = loadImage("/bg.jpg")
}

function setup() {
  var canvas = createCanvas(1200, 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, height, 1200, 20);
  platform = new Ground(150, 305, 300, 170);

  box1 = new Gautham(700, 320, 70, 70);
  box2 = new Ajithesh(920, 320, 70, 70);

  box3 = new Suhaas(700, 240, 70, 70);
  box4 = new Harsha(920, 240, 70, 70);

  // box5 = new Box(810, 190, 70, 70);

  me = new Me(100, 100);

  slingShot = new SlingShot(me.body, { x: 200, y: 50 });
  
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  console.log(box2.body.position.x);
  console.log(box2.body.position.y);
  console.log(box2.body.angle);
  box1.display();
  box2.display();
  ground.display();
  
  box3.display();
  box4.display();

  
  

  // box5.display();
  

  me.display();
  platform.display();
  slingShot.display();
}
function mouseDragged() {
  Matter.Body.setPosition(me.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(me.body);
      Matter.Body.setPosition(me.body,{x:200,y:50});
  }

}