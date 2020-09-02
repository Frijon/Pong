class Paddle {
  constructor(windowWidth, windowHeight, paddleSide){
    this.width = 20;
    this.height = 80;
		this.speed = 0;
		this.direction = "";

    if (paddleSide == "right") {
      this.pos = {
        x: windowWidth - this.width - 30,
        y: windowHeight / 2 - this.height / 2,
      }
    } else if (paddleSide == "left") {
      this.pos = {
        x: 30,
        y: windowHeight / 2 - this.height / 2,
      }
    } else {
      console.log("PADDLESIDE BROKEN")
    }
  }

	updatePaddle(direction) {
		if (direction == "up"){
			this.speed = -5;
		} else if (direction == "down") {
			this.speed = 5;
		}

		this.pos.y += this.speed;
		if (this.pos.y < 0) {
			this.pos.y = 0;
		} else if (this.pos.y + this.height > GAME_HEIGHT) {
			this.pos.y = GAME_HEIGHT - this.height;
		}
		this.speed = 0;
		this.direction = "";
	}

  drawPaddle() {
		fill(255, 255, 255);
    rect(this.pos.x, this.pos.y, this.width, this.height);
  }
}
