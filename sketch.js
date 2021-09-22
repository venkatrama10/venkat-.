function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  //level one
  block1= new Block (120,275,30,40)
  block2= new Block (150,275,30,40)
  block3= new Block (180,275,30,40)
  block4= new Block (210,275,30,40)
  block5= new Block (240,275,30,40)
  block6= new Block (270,275,30,40)
  block7= new Block (300,275,30,40)
  //leveal two
  block8=new Block (330,235,30,40)
  block9=new Block (360,235,30,40)
  block10=new Block (390,235,30,40)
  block11=new Block (420,235,30,40)
  block12=new Block (450,235,30,40)
  //leveal theree
  block13=new Block (360,195,30,40)
  block14=new Block (390,195,30,40)
  block15=new Block (420,195,30,40)
  //top
  block16=new Block (390,155,30,40)
  }

function draw() {
  background(255,255,255);  
  drawSprites();
}