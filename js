// script.js
const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");
const gameContainer = document.getElementById("game-container");

document.addEventListener("keydown", movePlayer);

function movePlayer(event) {
  const playerRect = player.getBoundingClientRect();
  const containerRect = gameContainer.getBoundingClientRect();

  if (event.key === "ArrowLeft" && playerRect.left > containerRect.left) {
    player.style.left = player.offsetLeft - 20 + "px";
  } else if (event.key === "ArrowRight" && playerRect.right < containerRect.right) {
    player.style.left = player.offsetLeft + 20 + "px";
  }
}

function checkCollision() {
  const playerRect = player.getBoundingClientRect();
  const obstacleRect = obstacle.getBoundingClientRect();

  if (
    playerRect.left < obstacleRect.right &&
    playerRect.right > obstacleRect.left &&
    playerRect.top < obstacleRect.bottom &&
    playerRect.bottom > obstacleRect.top
  ) {
    alert("Game Over!");
    location.reload();
  }
}

setInterval(checkCollision, 50);
