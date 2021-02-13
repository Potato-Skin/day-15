class Game {
  constructor() {
    this.background = new Background();
    this.obstacles = [];
  }
  setup() {}

  draw() {
    // console.log("frameCount: ", frameCount);
    clear();
    this.background.draw();
    if (frameCount % 90 === 0) {
      this.obstacles.push(new Obstacle());
    }

    this.obstacles.forEach((obstacle, index) => {
      obstacle.draw();

      if (obstacle.x <= -obstacle.width) {
        this.obstacles.splice(index, 1);
      }
    });
  }
}
