// script.js
const box = document.getElementById("box");
const container = document.getElementById("game-container");

let score = 0;

// Move the box to a random position
function moveBox() {
  const containerRect = container.getBoundingClientRect();
  const maxX = containerRect.width - box.clientWidth;
  const maxY = containerRect.height - box.clientHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  box.style.left = randomX + "px";
  box.style.top = randomY + "px";
}

// Click event for the box
box.addEventListener("click", () => {
  score++;
  alert(`You clicked the box! Score: ${score}`);
  moveBox();
});

// Move the box every 1.5 seconds
setInterval(moveBox, 1500);

// Start with initial box movement
moveBox();
