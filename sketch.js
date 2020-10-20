const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   
     log1 = new Log(500,260,300);

     paper1 = new Paper(600, 720, 40, 40);
     paper2 = new Paper(600, 750, 40, 40);
     paper3 = new Paper(600, 780, 40, 40);
     paper4 = new Paper(600, 800, 40, 40);
     paper5 = new Paper(600, 830, 40, 40);

     chain1 = new  Chain(paper1.body,log1.body);
     chain2 = new  Chain(paper2.body,log1.body);
     chain3 = new  Chain(paper3.body,log1.body);
     chain4 = new  Chain(paper4.body,log1.body);
     chain5 = new  Chain(paper5.body,log1.body);

}

function draw(){

    Engine.update(engine);
    
   ground.display();
   log1.display();
   paper1.display();
   paper2.display();
   paper3.display();
   paper4.display();
   paper5.display();
    chain1.display();

}
