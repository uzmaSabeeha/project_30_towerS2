

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var grnd;
var gS ="onsling"

function preload()
{
	boyimg = loadImage("polygon.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    stand1 = new Ground(380,300,400,15);
    stand2 = new Ground(700,200,190,10);
	
	
	grnd = new Ground(600,670,1200,20);

	b1 = new Box(280,270,30,40);
	b2 = new Box(310,270,30,40);
    b3 = new Box(340,270,30,40);
    b4 = new Box(370,270,30,40);
    b5 = new Box(400,270,30,40);
    b6 = new Box(430,270,30,40);
    b7 = new Box(460,270,30,40);
    b8 = new Box(490,270,30,40);

    b9 = new Box(310,230,30,40);
    b10 = new Box(340,230,30,40);
    b11 = new Box(370,230,30,40);
    b12 = new Box(400,230,30,40);
    b13 = new Box(430,230,30,40);
    b14 = new Box(460,230,30,40);

    b15 = new Box(340,190,30,40);
    b16 = new Box(370,190,30,40);
    b17 = new Box(400,190,30,40);
    b18 = new Box(430,190,30,40);
    
    b19 = new Box(370,150,30,40);
    b20 = new Box(400,150,30,40);

    b21 = new Box(385,110,30,40);


    c1 = new Box(640,170,30,40)
    c2 = new Box(670,170,30,40)
    c3 = new Box(700,170,30,40)
    c4 = new Box(730,170,30,40)
    c5 = new Box(760,170,30,40)

    c6 = new Box(670,130,30,40)
    c7 = new Box(700,130,30,40)
    c8 = new Box(730,130,30,40)

    c9 = new Box(700,90,30,40)

    polygon = Bodies.circle(50,200,20,);
	World.add(world,polygon);
    
	sling = new SlingShot(this.polygon,{x:200,y:200});
  
}


function draw() {
  //rectMode(CENTER);
  

  background("lightgreen");
  
  textSize(25);
  text("Press Space to hit again !!",200,400)   
  Engine.update(engine);
 
  fill("brown")
  stand1.display();
  stand2.display();
  fill("black")
  grnd.display();
fill("lightblue")
    b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  fill("pink")
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  fill("orange")
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  fill("blue")
  b19.display();
  b20.display();
  fill("grey")
  b21.display();
  fill("lightblue")
  c1.display();
  c2.display();
  c3.display();
  c4.display();
  c5.display();
  fill("orange")
  c6.display();
  c7.display();
  c8.display();
  fill("pink")
  c9.display();
  
  sling.display();

  imageMode(CENTER);
    image(boyimg,polygon.position.x,polygon.position.y,40,40)


    

}




function mouseDragged(){
	if(gS === "onsling" )
	Matter.Body.setPosition(this.polygon, {x : mouseX, y: mouseY})
}

function mouseReleased(){
	sling.fly();
	gS="launched"
}
function keyPressed()
{
	if(keyCode===32){
		Matter.Body.setPosition(this.polygon, {x:200,y:200})
		sling.attach(this.polygon);
		gS="onsling"
	}
}
