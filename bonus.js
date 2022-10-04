var velocityX = 9;
var velocityY = 6;
var positionX = 0;
var positionY = 0;
var reverse = false;
var ball = document.getElementById('ball');

//write a function that can change the position of the html element "ball"
function moveBall() {
    // two x-axis coordinates
    var Xmin = 0;
    var Xmax = 1000;
  
    // two y-axis coordinates
    var Ymin = 0;
    var Ymax = 800;
  
    if (reverse) {
      positionX = positionX - velocity;
      positionY = positionY - velocity;
      ball.style.left = positionX + "px";
      ball.style.top = positionY + "px";
    } else {
      positionX = positionX + velocity;
      positionY = positionY + velocity;
      ball.style.left = positionX + "px";
      ball.style.top = positionY + "px";
    }
  
    if (
      positionX > Xmax ||
      positionX === Xmin ||
      positionY > Ymax ||
      positionY === Ymin
    ) {
      reverse = !reverse;
    }
}
  setInterval(moveBall, 50);

