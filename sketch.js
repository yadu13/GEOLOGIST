const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone,stoneImg, iron,rubber,hammer,hammerImg;
var sand1,sand2,sand3,sand4;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    plane = new Plane(600,height,1200,20)
    stone = new Stone(700,320,100,100);
    iron = new Iron(300,350);
    rubber=new Rubber(900,450,70);
    hammer = new Hammer(10,100);
    sand1 = new Sand(505,450,10);
    sand2 = new Sand(510,410,10);
    sand3 = new Sand(535,380,10);
    sand4 = new Sand(575,0,10);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    stone.display();
    plane.display();
    iron.display();
    rubber.display();

    hammer.display();
    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();
}