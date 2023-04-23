//let snowFlakePosY =  0;
//let snowFlakePosX
let snowFlakeSpeed = 1;
let flocons = [] ;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //snowFlakePosX = random(width);
  
  for(let cmpt= 0; cmpt < 100; cmpt ++ ){ 
    flocons.push(new Flake());
  } //new sert à invoquer le constructeur
}

function draw() {
  background(246,72,72);
  for(let cmpt= 0; cmpt < 100; cmpt ++ ){ 
    flocons[cmpt].display();
  }


  if (mouseIsPressed == true) {
    fill(255); // White
  }
  else {
    fill(0);   // Black
  }
  ellipse(700,350, 200, 160);

  textSize(40);
  textFont('Georgia');
  text('Click Me', 620,250);

    textSize(30);
    fill(0);
  text('Happy', 650,330);

      textSize(35);
    fill(0);
  text('Christmass', 610,360);

        textSize(35);
    fill(0);
  text('<3', 675,400);

}
  //flocon.display(); a été remplacé par for...));
  /*fill(255);
  noStroke();
  ellipse(snowFlakePosX, snowFlakePosY, 15, 15);
  snowFlakePosY = snowFlakePosY + snowFlakeSpeed*/ //Tt est à l'intériere de la "Class Flake"

class Flake {
  constructor(){
    this.posX = random(width);
    this.posY = random(height);
  }
  display(){
    fill(255);
    noStroke();
    ellipse(this.posX, this.posY, 15, 15);
    this.posY = this.posY + snowFlakeSpeed;
  } 
}