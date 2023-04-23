function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES); //pour instaurer les degrés
}

function draw() {
  background(124, 182, 157);

  translate(width/2, height/2);
  rotate(-90);

//cercle beige/jaune
  noStroke();
  fill(255, 243, 199);
  circle(0, 0, 250);

//cercle au milieu
  fill(124, 182, 157);
  circle(0, 0, 50);


  let hr = hour(); //hour() est une fonction qui montre l'heure actuelle
  let mn = minute(); //minute() montre les minutes actuelles
  let sc = second(); //second() montre les secondes actuelles

  strokeWeight(10); //l'épaisseur des lignes
  noFill();

  // Dessiner l'aiguille des heures
  stroke(45, 62, 77);
  let hrAngle = map(hr % 12, 0, 12, 0, 360); //on soustrait l'heure actuel par 12 pour pouvoir avoir un chiffre de 0 à 11.
  arc(0, 0, 260, 260, 0, hrAngle);

  // Dessiner l'aiguille des minutes
  stroke(37, 142, 118);
  let mnAngle = map(mn, 0, 60, 0, 360); //mn = minutes actuels, 0,60 c'est de 0 à 60 minutes (intervalle), dernière 0 à 360 c'est l'intervalle de cercle.
  arc(0, 0, 280, 280, 0, mnAngle);

  // Dessiner l'aiguille des secondes
  stroke(248, 176, 77);
  let scAngle = map(sc, 0, 60, 0, 360); //même chose que les minutes.
  arc(0, 0, 300, 300, 0, scAngle);

  push();
  rotate(hrAngle); //faire tourner la fonction qui s'occupe de l'aiguille.
  stroke(45, 62, 77);
  line(0, 0, 50, 0); //ligne qui se dessine, les premiers valeurs 0, 0 désigne les points de départ et (50, 0) le point d'arrivée. La ligne mesure 50px
  pop();

  push();
  rotate(mnAngle);
  stroke(37, 142, 118);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(scAngle);
  stroke(248, 176, 77);
  line(0, 0, 100, 0);
  pop();

  stroke(80);
  strokeWeight(13);
  point(0, 0);
  fill(10);
}
