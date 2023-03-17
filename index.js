let scoreHome = 0;
let scoreGuest = 0;

let resultScoreHome = document.getElementById("result-point-home");
let resultScoreGuest = document.getElementById("result-point-guest");

function addOne() {
  scoreHome += 1;
  resultScoreHome.textContent = scoreHome;
}

function addTwo() {
  scoreHome += 2;
  resultScoreHome.textContent = scoreHome;
}
function addThree() {
  scoreHome += 3;
  resultScoreHome.textContent = scoreHome;
}

function addOneGuest() {
  scoreGuest += 1;
  resultScoreGuest.textContent = scoreGuest;
}
function addTwoGuest() {
  scoreGuest += 2;
  resultScoreGuest.textContent = scoreGuest;
}

function addThreeGuest() {
  scoreGuest += 3;
  resultScoreGuest.textContent = scoreGuest;
}

function newGame() {
  resultScoreGuest.textContent = 0;
  scoreGuest -= scoreGuest;
  resultScoreHome.textContent = 0;
  scoreHome -= scoreHome;
}
