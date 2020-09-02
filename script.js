let rightPaddle;
let leftPaddle;
let ball;
let canvas;
let i;
let pointsRight = 0;
let pointsLeft = 0;

const GAME_WIDTH = 800;
const GAME_HEIGHT = 500;

function setup() {
  canvas = createCanvas(GAME_WIDTH, GAME_HEIGHT);
	resetGame();
	noLoop();
}

function draw() {
  background(0, 0, 0);
	ball.updateBall(GAME_WIDTH, GAME_HEIGHT);

	//paddle movement
	if (keyIsDown(87)){
		leftPaddle.direction = "up";
	} else if (keyIsDown(83)) {
		leftPaddle.direction = "down";
	}
	if (keyIsDown(38)){
		rightPaddle.direction = "up";
	} else if (keyIsDown(40)) {
		rightPaddle.direction = "down";
	}

	rightPaddle.updatePaddle(rightPaddle.direction);
	leftPaddle.updatePaddle(leftPaddle.direction);
  rightPaddle.drawPaddle();
	leftPaddle.drawPaddle();
	ball.drawBall();
	document.getElementById("rightPoints").innerHTML = "right player points: " + pointsRight;
	document.getElementById("leftPoints").innerHTML = "left player points: " + pointsLeft;
}

function resetGame() {
	rightPaddle = new Paddle(GAME_WIDTH, GAME_HEIGHT, "right");
	leftPaddle = new Paddle(GAME_WIDTH, GAME_HEIGHT, "left");
	ball = new Ball(GAME_WIDTH, GAME_HEIGHT);
	console.log("pointsLeft: " + pointsLeft);
	console.log("pointsRight: " + pointsRight);
}


function restartGame() {
	noLoop();
	resetGame();
	redraw();
}

function startGame() {
	loop();
}
function stopGame() {
	noLoop();
}
