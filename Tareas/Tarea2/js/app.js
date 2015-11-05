$(document).ready(function() {
	//variables
	var ballX = 150;
	var ballY = 150;
	var ballDX = 2;
	var ballDY = 4;
	var boardX = 300;
	var boardY = 300;
	var paddleX = 150;
	var paddleH = 10;
	var paddleD = boardY - paddleH;
	var paddleW = 150;
	var canvas;
	var ctx;
	var gameLoop;

	var	isPlaying = false;

	$('#btnStart').click(function() {
		isPlaying = true;
		drawCanvas();
	});

	$('#btnPause').click(function() {
		isPlaying = false;
	});
		
	function drawCanvas(){
		canvas = document.getElementById('gameBoard');
		if (canvas.getContext) {
			ctx = canvas.getContext('2d');
			gameLoop = setInterval(drawBall, 16);
			window.addEventListener('keydown', controls, true);
		};
	};
	function drawBall(){
		// Clean the board
		ctx.clearRect(0, 0, boardX, boardY);
		// Draw the board
		ctx.fillStyle = 'thistle';
		ctx.beginPath();
		ctx.rect(0,0, boardX, boardY);
		ctx.closePath();
		ctx.fill();
		// Draw ball
		ctx.fillStyle = 'tomato';
		ctx.beginPath();
		ctx.arc(ballX, ballY, 15, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.fill();
		// Draw paddle
		ctx.fillStyle = 'navy';
		ctx.beginPath();
		ctx.rect(paddleX, paddleD, paddleW, paddleH);
		ctx.closePath();
		ctx.fill();
		// Move ball
		ballX += ballDX;
		ballY += ballDY;
		// Directioning
		if (ballX + ballDX > boardX - 15 || ballX + ballDX < 15) {
			ballDX = -ballDX;
		};
		if (ballY + ballDY < 15) {
			ballDY = -ballDY;
		}else if(ballY + ballDY > boardY - 15){
			if (ballX > paddleX && ballX < paddleX + paddleW) {
				ballDY = -ballDY;
			} else{
				clearInterval(gameLoop);
				$('#message').htlm('Game Over!');
			};
		};
	};
	function controls(e){
		switch (e.keyCode){
			case 37:
				paddleX = paddleX -20;
				if (paddleX < 0) {
					paddleX = 0;
				};
			break;
			case 39:
				paddleX = paddleX +20;
				if (paddleX > boardX - paddleW) {
					paddleX = boardX - paddleW;
				};
			break;
		};
	};


		
		