const game = new Game();

function preload() {
  bgImage = loadImage("./assets/wide.jpg");
  theDude = loadImage("./assets/character-right.png");
}

function draw() {
  game.draw();
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
}

// draw a character ✅
// colision check with character against  ✅
// gravity ✅
// player does not go below the floor ✅
// jumping around jumping around
