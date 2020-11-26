
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var mango1,mango2,mango3,mango4;
var boySprite,boyIMG,slingShot;

function preload()
{
	boyIMG=loadImage("sprites/boy.png")

}

function setup() {
	createCanvas(800, 700);
	//boySprite=createSprite(50, 500,20,20);
//boySprite.addImage(boyIMG);
//boySprite.scale=0.6


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	tree=new Tree(700,520,500,500)


	mango1=new Mango(650,400,25)
	mango2=new Mango(550,300,25)
	mango3=new Mango(450,400,25)
	mango4=new Mango (350,500,25)

	stone=new Stone(600,100,20)

	slingShot=new SlingShot(stone.body,{x:140, y:550})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  tree.display()
  mango1.display();
  mango2.display()
  mango3.display();
  mango4.display();
 slingShot.display();
  stone.display();
image(boyIMG,200,630,200,300);

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  
  drawSprites();
}

function detectcollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
	Matter.Body.setStatic(lmango.body,false)
	}
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235,y:420})
		launcherObject.attach(stone.body)
	}
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingShot.fly()
}
