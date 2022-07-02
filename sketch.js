const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const constraint = Matter.constraint;

var ground ,tower,cannon,cannon1;
var world,engine,background,backgroundImg,towerImage;

function preload(){
    backgroundImg = loadImage("./assets/background.gif");
    towerImage = loadImage("./assets/tower.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    angleMode(DEGREES);
    angle = 15;

    var options = {
        isStatic :true
    };
    
ground = Bodies.rectangle(0,height-1,width*2,1,options);
World.add(world,ground);

tower = Bodies.rectangle(160,350,160,310,options);
World.add(world,tower);

cannon1 = new Cannon(180,110,130,110,angle);

}
function draw(){
   // background(189);
    image(backgroundImg,0,0,1200,600);
    Engine.update(engine);

    rect(ground.position.x,ground.position.y,width*2,1);

    push();
    imageMode(CENTER);
    image(towerImage,tower.position.x,tower.position.y,160,310);
    pop();

    cannon1.display();
}