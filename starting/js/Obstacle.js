// Each obstacle will be held inside the Game class. However both width, height and y values are totally defined randomly at the monent of their creation
class Obstacle {
  constructor() {
    this.x = WIDTH;
    this.width = random(70, 100);
    this.height = random(30, 50);
    this.y = random(0, HEIGHT);
  }

  // every frame it moves the obstacle to the left (3 pixels)
  draw() {
    this.x -= 3;
    rect(this.x, this.y, this.width, this.height);
    //  rect (this.x, /* this.y */, /* this.width*/ , /*this.height */)
  }
}
