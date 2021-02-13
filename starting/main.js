const game = new Game();

function preload() {
  bgImage = loadImage("./assets/wide.jpg");
}

function draw() {
  game.draw();
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
}
