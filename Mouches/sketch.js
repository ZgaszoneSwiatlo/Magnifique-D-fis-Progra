function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(255);
  
  translate(mouseX, mouseY);

  fill(0);

  rotate(millis()/10);
  ellipse(0,50,7,3);

  rotate(millis());
  translate(100,0);
  rotate(millis()/50);
  ellipse(0,70,7,3);

  
  translate(50,0);
  rotate(millis()/30);
  ellipse(0,100,7,3);



}