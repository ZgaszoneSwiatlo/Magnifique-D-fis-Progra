let nbrCarres1 = 50; // nombre de carrés
let rayon1 = 60; // rayon du cercle
let angle = 0; // angle initial

let nbrCarres2 = 170; // nombre de carrés
let rayon2 = 160; // rayon du cercle

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  angle += 0.02; // vitesse de rotation
  let angleCarre1 = TWO_PI / nbrCarres1; // angle de chaque carré
  for (let i = 0; i < nbrCarres1; i++) {
    
    // calculer la position de chaque carré
    let x = width/2 + cos(angle + angleCarre1*i) * rayon1;
    let y = height/2 + sin(angle + angleCarre1*i) * rayon1;

    // dessiner le carré
    fill(0)
    rectMode(CENTER);
    rect(x, y, 20, 20);
  }

      angle += 0.02; // vitesse de rotation
  let angleCarre2 = TWO_PI / nbrCarres2; // angle de chaque carré
  for (let i = 0; i < nbrCarres2; i++) {
  
    // calculer la position de chaque carré
    let x = width/2 + cos(angle + angleCarre2*i) * rayon2;
    let y = height/2 + sin(angle + angleCarre2*i) * rayon2;
   

   if (i % 2 == 0) {
      fill(0);
    } else {
      fill(255);
    }

    // dessiner le carré
    rectMode(CENTER);
    rect(x, y, 20, 20);
  }
}
