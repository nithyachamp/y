const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world,matter
var holder,ball,ground;
var stand1,stand2;
var slingShot;
var block8
var block9 
var block10
var block11
var block12
var block13
var block14
var block16
var block15
var block1
var block2
var block3
var block4
var block5
var block6
var block7

function setup(){
engine = Engine.create();
world = engine.World;
Engine.run(engine);
    ground = new Ground(600,height,1200,20);
    blocki - new Block(300,275, 30,40);

    console. log(blocki); block - new Block(330,275, 30, 40);
    block1 = new Block(330, 235,30,40);
    block2 = new Block (360, 235, 30, 40);
    block3 = new  Block(360,275,30,40);
     block4 = new Block(390,275,30,40);
    block5 = new Block(420, 275,30,40);
    block6 = new Block(450, 275,30,40); 
    block7 = new Block(480, 275, 30,40)
    block8 = new Block(330, 235,30,40);
    block9 = new Block (360, 235, 30, 40);
    block10= new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(490,235,30,40);
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);
    block16  = new Block(390,155, 30,40);

    //set 2
    block1 = new Block(640, 175, 30,40);
blocks2 = new Block(670,175, 30,40);
block3  = new Black(700,175,30 ,40);

block4 = new Block(730, 175, 0,40);

block5 =  new Block(760,175, 30,40);
blocks6 = new Block(670,135, 30,40);
 blocks7 - new Block(700, 135, 30,40);
blocks8 - new Block(730,135,30,40);
block9 = new Block(700,95,30,40);
ball = bodies.circle(50,200,20);
world.add(world,ball)
slingshot = new SlingShot(this.ball,{x:100,y:200});
}

function draw(){
   

        background(56,44,44);
        
        //Engine.update(engine);
        
        //text (mousex mousey, 10, 15);
         textsize(20); 
         fill("lightyellow"),
text("Drag the hexagonal Stone and Realese it,to launch it")


ground. display() 
strokeweight(2);
stroke(15);
fill("skyblue");
block1.display();
block2.display();
block3.display();
block4. display();
 block5.display();
block6 . display();
block7.display();
 fill("pink");   
 block8 .display();
  block9. display();
   block10.display();
    block11.display();
     block12.display();
 fill("turquoise");
 block13.display();
 block14.display();
 block15.display();
 fill("grey")
block16.display();
fill("skyblue");
blocks1.display();
 blocks2.display();
blocks3.display();
blocks4.display();
 blocks5.display();
fill("turquoise");
blocks6.display();
 blocks7.display();
blocks8.display(); 
fil1("pink");
blocks9.display();
 fill("gold");
slingshot.display();

 
}
function  mouseDragged() {


    
    Matter, Body, setPosition(this.ball,{x:mouseX,y:mouseY})




}






