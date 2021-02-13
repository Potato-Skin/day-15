class Obstacle {
  constructor() {
    this.x = WIDTH;
    this.width = random(70, 100);
    this.height = random(30, 50);
    this.y = random(0, HEIGHT);
  }

  draw() {
    this.x -= 3;
    rect(this.x, this.y, this.width, this.height);
    //  rect (this.x, /* this.y */, /* this.width*/ , /*this.height */)
  }
}
