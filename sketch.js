var caixa;

function setup() {
  createCanvas(800,800);
  caixa = createSprite (400,400,20,20);
  caixa.shapeColor = (255);
}


function draw() 
{
  background(20);
  movimento();
  drawSprites();
  createEdgeSprites();
  //caixa.bouceOff(edges);
}

function movimento(){

  if (keyDown("d")){
    caixa.x = caixa.x+10
  }
  if (keyDown("a")){
    caixa.x = caixa.x-10
  }
  if (keyDown("w")){
    caixa.y=caixa.y-10
  }
  if (keyDown("s")){
    caixa.y=caixa.y+10
  }
}
 



