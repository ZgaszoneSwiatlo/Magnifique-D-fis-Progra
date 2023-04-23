let emojiSize = 150;
let button;

function generateEmoji() {
  const emojis = ['😀', '😂', '😍', '🤔', '🤯', '😆', '🤣','🙃', '😊','😇','😎','🤓','🧐','🥳','🥰','🥲','😋','🤪','🤑','🤭','🤫','😐','🤨','🤐','😏','😑','😶','😒','🙄','😬','🤥','😪','😴','😌','😔','🤤','🤢','🥵','🤧','🤮','🤕','🤒','🥶','🥴','😵','😕','😟','🥺','😭','😫','🥱','😈','😤','😡','🤬','💀',];
  const randomIndex = Math.floor(Math.random() * emojis.length);
  const emoji = emojis[randomIndex];
  
  background(220);
  textSize(emojiSize);
  textAlign(CENTER, BASELINE); // Aligner le texte horizontalement au centre et verticalement à la ligne de base
  const textAscentOffset = textAscent() / 2; // Obtenir la moitié de la hauteur de la partie supérieure de la police de caractères
  text(emoji, width/2, height/2 + textAscentOffset); // Centrer l'emoji en ajoutant l'offset à la position verticale
}

function setup() {
  createCanvas(600, 600);
  button = createButton('Générer un emoji');
  button.mousePressed(generateEmoji);
}

function draw() {
}
