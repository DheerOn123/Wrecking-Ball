const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var ground;
var ball;
var rope


var score = 0;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


   
    ground=new Ground(600,400,1200,20)

    box1 = new Box(400,100,70,70);
    box2 = new Box(400,180,70,70);
   
    box3 = new Box(600,100,70,70);
    box4 = new Box(600,180,70,70);
   

   


    ball = new Ball(100,300,50,50);
    rope = new Rope(ball.body,{x:200,y:100})
   
}

function draw(){
    background("cyan")
    
        noStroke();
        textSize(35)
        fill("Black")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);


    ground.display();
    box1.display();
    box2.display();
    
   rope.display();

    box3.display();
    box4.display();
    
    

    
   

    ball.display();
   
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}






