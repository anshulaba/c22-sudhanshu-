const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var canvas,engine,world,object;

function setup()
{
canvas=createCanvas(400,400);
engine=Engine.create();
world=engine.world;

var ground_options= { isStatic:true}
ground=Bodies.rectangle(200,390,200,20,ground_options);
World.add(world,ground);

var object_options= { 'restitution': 1.0  }
object=Bodies.rectangle(200,100,50,50,object_options);
World.add(world,object);

var cobject_options= { 'restitution': 1.0  }
cobject=Bodies.circle(200,200,20,cobject_options);
World.add(world,cobject);

}

function draw()
{
background("gold");
Engine.update(engine);
rectMode(CENTER);
ellipseMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);
rect(object.position.x,object.position.y,50,50);
circle(cobject.position.x,cobject.position.y,50,50);
}