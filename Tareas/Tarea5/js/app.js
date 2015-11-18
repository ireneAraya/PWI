      // Global variables
      var ballX = 150; // Ball x position.
      var ballY = 150; // Ball y position.
      var ballDX = 2; // Change in ball x position.
      var ballDY = 4; // Change in ball y position.
      var boardX = 300; // Board width.
      var boardY = 300; // Board height.
      var paddleX = 150; // Initial paddle location.
      var paddleH = 10; // Paddle height.
      var paddleD = boardY - paddleH; // Paddle depth.
      var paddleW = 150; // Paddle width..
      // This function is called on page load.
      function drawGameSVG() {
        var difficult = document.getElementById("btnDifficult");
        difficult.addEventListener("click", function(){
          paddleX = 150;
          paddleW = 100;
          interval = 8;
          paddle.setAttribute("x", 150);
          paddle.setAttribute("width", 100);
        });
        // Start the game.
        start = document.getElementById("btnStart");
        start.addEventListener("click", function(){
          difficult.disabled = true;
          gameLoop = setInterval(drawBall, 16)
        });
       
        // Add keyboard listener.
        window.addEventListener('keydown', whatKey, true);
      }
      function drawBall() {
        var message = document.getElementById("message");
        // Change the ball location.
        ballX += ballDX;
        ballY += ballDY;
        ball.setAttribute("cx", ballX);
        ball.setAttribute("cy", ballY);
        // Bounce on a left or right edge.
        if (ballX + ballDX > boardX - 15 || ballX + ballDX < 15) {
          ballDX =- ballDX;
        }
        // If ball hits the top, bounce it. 
        if (ballY + ballDY < 15) {
          ballDY =- ballDY;
        }
        // If the ball hits the bottom, check see if it hits a paddle.
        else if (ballY + ballDY > boardY - 15) {
          // If the ball hits the paddle, bounce it.
          if (ballX > paddleX && ballX < paddleX + paddleW) {  
            ballDY =- ballDY;
          }
          // Otherwise the game is over.
          else {
            clearInterval(gameLoop);
            message.innerHTML = 'Game Over';
          }
        }
      }
      // Get key press.
      function whatKey(evt) {
        switch (evt.keyCode) {
          // Left arrow.
        case 37:
          paddleX = paddleX - 20;
          if (paddleX < 0) paddleX = 0;
          paddle.setAttribute("x", paddleX);
          break;
          // Right arrow.
        case 39:
          paddleX = paddleX + 20;
          if (paddleX > boardX - paddleW) paddleX = boardX - paddleW;
          paddle.setAttribute("x", paddleX);
          break;
        }
      }