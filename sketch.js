var helicopterIMG, helicopterSprite, packageSprite,packageIMG;

var packageBody,ground



const Engine = Matter.Engine;

const World = Matter.World;

const Bodies = Matter.Bodies;

const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);

	
    
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	
	
	log1 = createSprite (width/2 , 655,220,10);
	log1.shapeColor = color ("red");

	log2 = createSprite ( 510 , 590,10,150);
	log2.shapeColor = color ("red");

	log3 = createSprite (290, 590,10,150);
	log3.shapeColor = color ("red");



	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	 
    log1 = Bodies.rectangle (width/2 , 650,150,10, {isStatic:true} );
	 World.add (world , log1);

    log2 = Bodies.rectangle (300 , 600,10,150, {isStatic:true} );
	 World.add (world , log1);

    log3 = Bodies.rectangle ( 150, 600,10,150, {isStatic:true} );
	 World.add (world , log1);



	Engine.run(engine);
  
}


function draw() {
  
  background(0);

  

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	
	Matter.Body.setStatic(packageBody, false)

	
    
  }
}