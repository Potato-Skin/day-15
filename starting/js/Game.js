class Game {
  // no extra stuff when defining.
  // Game ends up having 3 properties: a player, a background and an array of obstacles
  // starts out with empty array of obstacles
  constructor() {
    this.background = new Background();
    this.obstacles = [];
    this.player = new Player();
  }

  // we didnt end up using it, but if we need multiple things to be setup, we would do it here, and then call it in the main like this:
  // game.setup()
  setup() {}

  // here we know that player has a keypressed method and we should look into it for more information
  keyPressed() {
    this.player.keyPressed();
  }

  // responsible for drawing the game stage
  draw() {
    // clears out the canvas at the beggining of every loop
    clear();

    // draws the background
    this.background.draw();

    // draws the player
    this.player.draw();

    // frameCount is always counting + 1 on every loop of the function draw
    // if base is 60frames/second. 👇 means every 1,5s(90 frames = 1.5seconds) push / create a new obstacle on the array
    if (frameCount % 90 === 0) {
      this.obstacles.push(new Obstacle());
    }

    // array of obstacles. for every single obstacle in the array we will:
    this.obstacles.forEach((obstacle, index) => {
      // draw it
      obstacle.draw();

      // check if it is coliding with the player
      if (this.collisionCheck(this.player, obstacle)) {
        // its out choice we can do what we want to:
        // end game, add levels, remove lives, etc
        console.log("WATCH OUT FOR THE THINGY");
      }

      // remove the obstacle if its totally off canvas
      if (obstacle.x <= -obstacle.width) {
        this.obstacles.splice(index, 1);
      }
    });
  }

  // super verbose way of checking if there is a collision between a player and an obstacle
  collisionCheck(player, obstacle) {
    const playerTopArea = player.y;
    const playerLeftArea = player.x;
    const playerRightArea = player.x + player.width;
    const playerBottomArea = player.y + player.height;

    const obsTopArea = obstacle.y;
    const obsLeftArea = obstacle.x;
    const obsRightArea = obstacle.x + obstacle.width;
    const obsBottomArea = obstacle.y + obstacle.height;
    const isTouchingOnLeft = obsRightArea > playerLeftArea;
    const isTouchingOnBottom = obsTopArea < playerBottomArea;
    const isTouchingOnRight = obsLeftArea < playerRightArea;
    const isTouchingOnTop = obsBottomArea > playerTopArea;

    return (
      isTouchingOnRight &&
      isTouchingOnTop &&
      isTouchingOnBottom &&
      isTouchingOnLeft
      // obstacle.x < player.x + player.width &&
      // obstacle.y + obstacle.height >player.y &&
      // obstacle.y < player.y + player.height &&
      // obstacle.x + obstacle.width > player.x
    );
  }
}
