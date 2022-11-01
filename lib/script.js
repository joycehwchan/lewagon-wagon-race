const startBtn = document.querySelector("#startBtn");
const countdown = document.querySelector("#countdown");
const players = document.querySelectorAll(".player");
const move = 40;
let position1 = 880;
let position2 = 880;

window.onload = () => {
  countdown.style.opacity = "0";
  players.forEach((player) => {
    player.style.marginRight = "880px";
  });
};

const showWinner = (winner) => {
  startBtn.textContent = "Good job!";
  window.alert(`The winner is ${winner}!!\nReady for the next race?`);
  window.location.reload();
};

const moveCar = (e) => {
  let winner;
  const player = document.querySelector(`[data-key=${e.key}]`);

  if (player === player1) {
    position1 -= move;
    player.style.marginRight = `${position1}px`;
  } else if (player === player2) {
    position2 -= move;
    player.style.marginRight = `${position2}px`;
  }
  console.log(position1, position2);

  if (position1 <= -40) {
    winner = "Red Wagon";
    showWinner(winner);
  } else if (position2 <= -40) {
    winner = "Yellow Wagon";
    showWinner(winner);
  }
};

const startTimer = () => {
  countdown.style.opacity = "1";
  let timeleft = 3;
  countdown.textContent = timeleft;
  let timer = setInterval(() => {
    timeleft -= 1;
    console.log(timeleft);
    countdown.textContent = timeleft;
    if (timeleft === 0) {
      countdown.textContent = "Go!!!";
      countdown.style.scale = 2;
      clearInterval(timer);
      window.addEventListener("keydown", (e) => moveCar(e)); // 👈
    }
  }, 1000);
};

const startGame = () => {
  startBtn.remove();
  startTimer();
  players.forEach((player) => player.classList.add("active"));
};

startBtn.addEventListener("click", startGame);
