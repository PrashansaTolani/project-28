
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint= Matter.Constraint;

var chain;
var boy;
var stone;
var tree;
var ground;
var back;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9;



function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    boy= new Boy(100,260,150,300);

	ground = new Ground(175,600,1500,20);

	tree = new Tree(300,190,400,500);

	stone = new Stone(100,500,20);

    mango1  = new Mango(275,110,40);
	mango2 = new Mango(250,160,40);
	mango3 = new Mango(300,150,40);
	mango4 = new Mango(350,150,40);
	mango5 = new Mango(325,100,40);
	mango6 = new Mango(300,125,40);
	mango7 = new Mango(380,170,40);
	mango8 = new Mango(275,170,40);
	mango9 = new Mango(350,120,40);
	
	chain = new Chain(stone.body,{x:150,y:450});

	Engine.run(engine);
  
}


function draw() {
background("yellow")
	textSize(25);
	fill("green")
	text("Press Space to get a second Chance to Play!!",50 ,50);

	boy.display();

	stone.display();
	
	ground.display();

	tree.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();

	chain.display();

	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);
	detectCollision(stone,mango6);
	detectCollision(stone,mango7);
	detectCollision(stone,mango8);
	detectCollision(stone,mango9); 

	tree.depth = stone.depth;
	stone.depth = stone.depth+1;

  drawSprites();

}
function mouseDragged()
{
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  chain.released();
 //Matter.Body.applyForce(stone.body,stone.body.position,{x:50,y:-200});
}
function keyPressed()
{
	if(keyCode == 32)
	{
			Matter.Body.setPosition(stone.body,{x:100,y:400});
			chain.attach(stone.body);
	}
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	  if(distance<=lmango.r+lstone.r){
		  Matter.Body.setStatic(lmango.body,false);
	  }
   }