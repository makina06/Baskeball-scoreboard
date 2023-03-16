let score = 0;

let resultScoreHome = document.getElementById("result-point-guest");

function addOne() {
  score += 1;
  resultScoreHome.textContent = score;
}

function addTwo() {
  score += 2;
  resultScoreHome.textContent = score;
}
function addThree() {
  score += 3;
  resultScoreHome.textContent = score;
}
