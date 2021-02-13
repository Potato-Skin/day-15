class Game {
  constructor() {
    this.background = new Background();
  }
  setup() {}

  draw() {
    clear();
    this.background.draw();
  }
}
