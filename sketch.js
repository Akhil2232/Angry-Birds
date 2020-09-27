const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(970,300,50,50);
    box2 = new Box(840,300,50,50);
    ground = new Ground(600,height,1200,20)
    pig1 = new Pig(905,300,50,50)
    log1 = new Log(905,240,200,PI/2);
    box3 = new Box(840,230,50,50);
    box4 = new Box(970,230,50,50);
    pig2 = new Pig(905,230,50,50);
    log2 = new Log(905,220,200,PI/2);
    box5 = new Box(905,210,50,50);
    log3 = new Log(905,210,200,PI/7);
    log4 = new Log(1005,210,200,-PI/7);
    
}

function draw(){
    background(255);
    text(mouseX + ";" + mouseY, 100,100)
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
}