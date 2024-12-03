const container = document.getElementById("circle-container");
const target = document.querySelector("#target");
const startBtn = document.querySelector("#start");
const timer = document.querySelector("#timer");
const score = document.querySelector("#score");
let currentScore = 0;

function getRandomNumber() {
  return Math.floor(Math.random() * 9) + 1;
}

function generateCircles() {
  container.innerHTML = ""; 
  for (let i = 0; i < 48; i++) {
    const circle = document.createElement("div");
    let circleNumber = getRandomNumber();
    circle.innerHTML = circleNumber;
    circle.classList.add("circle");

   
    circle.style.backgroundColor = `hsl(${Math.random() * 360}, 50%, 50%)`;
    circle.style.color = "#fff"; 
    container.appendChild(circle);
  }
}

function startGame() {
  currentScore = 0;
  score.innerHTML = currentScore; 
  target.innerHTML = getRandomNumber();
  generateCircles(); 
}
let countdownInterval;
function startCountdown() {
  let count = 60;
  timer.innerHTML = count;
  clearInterval(countdownInterval);
  countdownInterval = setInterval(() => {
    count--;
    timer.innerHTML = count;
    if (count <= 0) {
      clearInterval(countdownInterval);
      alert("Time's up! Your score: " + currentScore);
      startGame();
    }
  }, 1000);
}

startBtn.addEventListener("click", () => {
  startCountdown();
  startGame();
});

container.addEventListener("click", (event) => {
  if (event.target.classList.contains("circle")) {
    const clickedNumber = parseInt(event.target.innerHTML);
    const targetNumber = parseInt(target.innerHTML);

    if (clickedNumber === targetNumber) {
      currentScore += 10; 
      score.innerHTML = currentScore;
      target.innerHTML = getRandomNumber(); 
    } else {
      currentScore = Math.max(0, currentScore - 5); 
      score.innerHTML = currentScore;
    }
    generateCircles(); 
  }
});


startGame();
