function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  background(255);
    noStroke();
    for (let i = 0; i < 1024; i++) {
    for (let j = 0; j < 1024; j++) {
      fill(random(255), random(255), random(255), random(255));
      circle(i, j, random(10)); //i = x et j = y, coordonées, random(10) -> génère de 0 à 10 la taille du cercle
    }
  }
}
