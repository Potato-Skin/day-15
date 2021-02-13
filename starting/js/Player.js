// class that hold all the logic to the player
class Player {
  constructor() {
    this.x = 50;
    this.y = 50;
    this.width = 40;
    this.height = 40;
    this.floor = 210;
    this.velocity = 0;
    this.jumpCount = 0;
  }

  // this function is called from the game and it checks if we are pressing the SPACE bar
  keyPressed() {
    if (keyCode === 32) {
      this.jump();
    }
  }

  // if the jumpCount is 2 (the user has done a double jump) we do nothing
  // otherwise we increase the jumpCount, we remove y so that the viking goes up, and we remove some velocity so that we have a little of resistance going up and an ever growing velocity when we're crashing down
  jump() {
    if (this.jumpCount === 2) {
      return;
    }
    this.jumpCount++;
    this.y -= 10;
    this.velocity -= 5;
  }

  draw() {
    // we increase the velocity according to how long the user has been flying
    this.velocity += GRAVITY;
    // if the user is in the air, pull the user closer down
    this.y += this.velocity;

    // if the user is trying to go below the floor, say heeeeeelll noooo
    if (this.y >= this.floor) {
      this.y = this.floor;
      // reset velocity
      this.velocity = 0;
      // reset jumpCount
      this.jumpCount = 0;
    }
    image(theDude, this.x, this.y, this.width, this.height);
  }
}

// doubleJump
// jumpCount
// onJump -> jumpCount++
// if jumpCount === 2
// dont jump

// onFloor
// jumpCount = 0

// jumping To Go Up
// this.y -= 10
// this.velocity -= 5
