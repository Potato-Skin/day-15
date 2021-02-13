// An instance that will hold all of the information of our game
const game = new Game();

// Here we load all of our extra assets
function preload() {
  bgImage = loadImage("./assets/wide.jpg");
  theDude = loadImage("./assets/character-right.png");
}

// gets called 60x a second
function draw() {
  game.draw();
}

// sets up the canvas
function setup() {
  createCanvas(WIDTH, HEIGHT);
}

// checks for whenever we press a key
function keyPressed() {
  game.keyPressed();
}
