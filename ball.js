class Ball {
	constructor(gameWidth, gameHeight) {
		this.width = 10;
		this.height = 10;
		this.pos = {
			x: gameWidth / 2 - this.width,
			y: gameHeight / 2 - this.height,
		}

	  var	possibleDirectionsY = ["up", "down"];
		var	possibleDirectionsX = ["left", "right"];

		this.dir = {
			x: (possibleDirectionsX[Math.floor(Math.random() * 2)]),
			y: (possibleDirectionsY[Math.floor(Math.random() * 2)]),
		}

		console.log(this.dir.x);
		console.log(this.dir.y);

		this.vel = {
			x: 2,
			y: 2,
		}
	}

	updateBall(gameWidth, gameHeight) {

		if (this.dir.y == "down") {
			this.pos.y = this.pos.y + this.vel.y;
		} else if (this.dir.y == "up") {
			this.pos.y = this.pos.y - this.vel.y;
		} else {
			console.log
		}

		if (this.dir.x == "right") {
			this.pos.x += this.vel.x;
		} else if (this.dir.x == "left") {
			this.pos.x -= this.vel.x;
		}


		//top and bottom bounds
		if (this.pos.y < 0) {
			this.pos.y = 0;
			this.dir.y = "down";
		} else if (this.pos.y + this.height > gameHeight) {
			this.pos.y = gameHeight - this.height;
			this.dir.y = "up";
		}


		//right paddle bouce off logic
		if ((this.pos.x + this.width >= rightPaddle.pos.x && this.pos.x <= rightPaddle.pos.x) && (this.pos.y > rightPaddle.pos.y && this.pos.y < rightPaddle.pos.y + rightPaddle.height)) {
			this.pos.x = rightPaddle.pos.x - this.width;
			this.dir.x = "left";
		} else if ((this.pos.y + this.height >= rightPaddle.pos.y && this.pos.y <= rightPaddle.pos.y + rightPaddle.height) && (this.pos.x + this.width >= rightPaddle.pos.x && this.pos.x <= rightPaddle.pos.x + rightPaddle.width)) {
			//this.vel.y = this.vel.y * (-1);
		}

		//left paddle bounce off logic
		if ((this.pos.x == leftPaddle.pos.x + leftPaddle.width) && (this.pos.y >= leftPaddle.pos.y && this.pos.y <= leftPaddle.pos.y + leftPaddle.height)) {
			this.dir.x = "right";
		} else if ((this.pos.y + this.height >= leftPaddle.pos.y && this.pos.y <= leftPaddle.pos.y + leftPaddle.height) && (this.pos.x + this.width >= leftPaddle.pos.x && this.pos.x <= leftPaddle.pos.x + leftPaddle.width)) {
			//this.vel.y = this.vel.y * (-1);
		}


		/*
		for (i = 0; i % 500 == 0; i++){
			this.vel.x += 0.00001;
			this.vel.y += 0.00001;
		}
		*/


		if (this.pos.x + this.width > gameWidth) {
			pointsLeft += 1;
			noLoop();
			alert("Point Scored for left");
			resetGame();
		} else if (this.pos.x < 0) {
			pointsRight += 1;
			noLoop();
			alert("Point scored for right");
			resetGame();
		}
	}

	drawBall() {
		fill(255, 255, 255);
		rect(this.pos.x, this.pos.y, this.width, this.height);
	}
}
