let scoreHome = 0;
let scoreGuest = 0;

let resultScoreHome = document.getElementById("result-point-home");
let resultScoreGuest = document.getElementById("result-point-guest");

function addOne() {
  scoreHome += 1;
  resultScoreHome.textContent = scoreHome;
  checkWinner();
}

function addTwo() {
  scoreHome += 2;
  resultScoreHome.textContent = scoreHome;
  checkWinner();
}
function addThree() {
  scoreHome += 3;
  resultScoreHome.textContent = scoreHome;
  checkWinner();
}

function addOneGuest() {
  scoreGuest += 1;
  resultScoreGuest.textContent = scoreGuest;
  checkWinner();
}
function addTwoGuest() {
  scoreGuest += 2;
  resultScoreGuest.textContent = scoreGuest;
  checkWinner();
}

function addThreeGuest() {
  scoreGuest += 3;
  resultScoreGuest.textContent = scoreGuest;
  checkWinner();
}

function newGame() {
  resultScoreGuest.textContent = 0;
  scoreGuest -= scoreGuest;
  resultScoreHome.textContent = 0;
  scoreHome -= scoreHome;
}

function checkWinner() {
  if (scoreHome < scoreGuest) {
    resultScoreGuest.style.color = "yellow";
    resultScoreHome.style.color = "#f94f6d";
  } else if (scoreHome > scoreGuest) {
    resultScoreGuest.style.color = "#f94f6d";
    resultScoreHome.style.color = "yellow";
  } else if (scoreHome === scoreGuest) {
    resultScoreGuest.style.color = "green";
    resultScoreHome.style.color = "green";
  } else {
    resultScoreGuest.style.color = "#f94f6d";
    resultScoreHome.style.color = "#f94f6d";
  }
}
