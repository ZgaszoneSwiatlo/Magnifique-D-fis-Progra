function setup() {
  createCanvas(500, 500);
  noStroke();
  colorMode(RGB, 255); // définir le mode de couleur sur RGB avec une plage allant de 0 à 255
}

function draw() {
  for (let x = 0; x < width; x++) {
    let r = map(x, 0, width, 0, 255); // mappe la valeur de x à une valeur de rouge entre 0 et 255
    for (let y = 0; y < height; y++) {
      let g = map(y, 0, height, 0, 255); // mappe la valeur de y à une valeur de vert entre 0 et 255
      let b = mouseX; // fixe la valeur bleue sur 128
      stroke(r, g, b); // définir la couleur de remplissage en fonction de la position du pixel
      point(x, y); // dessiner un petit carré à cette position
    }
  }
}
