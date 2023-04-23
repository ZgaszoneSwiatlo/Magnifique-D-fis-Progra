function setup() {
  createCanvas(500, 400);
}

function draw() {

var current= new Date();
var day_night=current.getHours();

if(day_night <= 19){ //Si l'utilisateur ouvre le script entre 6h et 20h il vera ça..
  background(95, 166, 223);
  
  //le jardin
  noStroke();
  fill(95, 181, 82);
    rect(0, 300, 500, 400); //grass

  fill(255, 226, 92);
    circle(410, 60, 70, 70); //soleil


  //la maison
  fill(188, 189, 192);
    rect(140, 160, 200, 160); //le mur

  fill(254, 81, 81);
    triangle(350, 170, 240, 50, 130, 170); //toit

  fill(134, 117, 100);
    rect(270, 220, 50, 100); //porte

  fill(255);
    rect(175, 210, 70, 70); //fenetre 

  fill(66, 66, 66);
    rect(180, 215, 60, 60); //l'interieur de la fenetre

  fill(255);
    rect(207, 210, 5, 70); //la bout de morceau blanc de la fenetre

  fill(109, 104, 101);
    rect(275, 270, 10, 4); //la poignet

}else{ // ..Sinon il vera ça.
  background(28, 49, 66);

  //le jardin
  noStroke();
  fill(47, 90, 41);
    rect(0, 300, 500, 400); //grass

  fill(228, 228, 228);
    circle(410, 60, 70, 70); //lune

  //la maison
  fill(90, 90, 92);
    rect(140, 160, 200, 160); //le mur

  fill(161, 50, 50);
    triangle(350, 170, 240, 50, 130, 170); //toit

  fill(82, 72, 61);
    rect(270, 220, 50, 100); //porte

  fill(177, 177, 177);
    rect(175, 210, 70, 70); //fenetre 

  fill(148, 148, 148);
    rect(180, 215, 60, 60); //l'interieur de la fenetre

  fill(162, 161, 129);
    circle(210, 245, 60, 60); //lumiere

  //La personne
  fill(246, 215, 197);
    circle(195, 255, 20, 20); //tete

  fill(246, 215, 197);
    rect(193, 263, 5, 5); //le cou

  fill(140, 197, 187);
    rect(188, 267, 15, 8);

  fill(48, 48, 48);
    circle(191, 255, 4, 4);
  fill(48, 48, 48);
    circle(198, 255, 4, 4);

  //la maison
  fill(177, 177, 177);
    rect(207, 210, 5, 70); //la bout de morceau blanc de la fenetre

  fill(35, 33, 32);
    rect(275, 270, 10, 4); //la poignet
}
}