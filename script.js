const rgbColor = document.getElementById('rgb-color');

function randomColor() {
  const randomNumber = Math.floor(Math.random() * 256);
  const randomNumber2 = Math.floor(Math.random() * 256);
  const randomNumber3 = Math.floor(Math.random() * 256);
  return `(${randomNumber}, ${randomNumber2}, ${randomNumber3})`;
}

const ball1 = document.getElementsByClassName('ball')[0];
const ball2 = document.getElementsByClassName('ball')[1];
const ball3 = document.getElementsByClassName('ball')[2];
const ball4 = document.getElementsByClassName('ball')[3];
const ball5 = document.getElementsByClassName('ball')[4];
const ball6 = document.getElementsByClassName('ball')[5];

function addColorToBalls() {
  ball1.value = randomColor();
  ball2.value = randomColor();
  ball3.value = randomColor();
  ball4.value = randomColor();
  ball5.value = randomColor();
  ball6.value = randomColor();
  ball1.style.backgroundColor = `rgb${ball1.value}`;
  ball2.style.backgroundColor = `rgb${ball2.value}`;
  ball3.style.backgroundColor = `rgb${ball3.value}`;
  ball4.style.backgroundColor = `rgb${ball4.value}`;
  ball5.style.backgroundColor = `rgb${ball5.value}`;
  ball6.style.backgroundColor = `rgb${ball6.value}`;
}

addColorToBalls();

function randomBall() {
  const randomNumber = Math.floor(Math.random() * 6);
  return randomNumber;
}
randomBall();

function addRgbText() {
  rgbColor.innerHTML = document.getElementsByClassName('ball')[randomBall()].value;
}

addRgbText();

const correctAnswer = rgbColor.innerHTML;

function addCorrectId() {
  if (ball1.value === correctAnswer) {
    ball1.id = 'correct';
  } if (ball2.value === correctAnswer) {
    ball2.id = 'correct';
  } if (ball3.value === correctAnswer) {
    ball3.id = 'correct';
  } if (ball4.value === correctAnswer) {
    ball4.id = 'correct';
  } if (ball5.value === correctAnswer) {
    ball5.id = 'correct';
  } if (ball6.value === correctAnswer) {
    ball6.id = 'correct';
  }
}

addCorrectId();

const result = document.getElementById('answer');
function showResult(event) {
  const clickedBall = event.target;
  if (clickedBall.id === 'correct') {
    result.innerHTML = 'Acertou!';
  } else result.innerHTML = 'Errou! Tente novamente!';
}

ball1.addEventListener('click', showResult);
ball2.addEventListener('click', showResult);
ball3.addEventListener('click', showResult);
ball4.addEventListener('click', showResult);
ball5.addEventListener('click', showResult);
ball6.addEventListener('click', showResult);

const resetButton = document.getElementById('reset-game');

function resetAll() {
  addColorToBalls();
  randomBall();
  addRgbText();
  addCorrectId();
  result.innerHTML = 'Escolha uma cor';
}

resetButton.addEventListener('click', resetAll);

const score = document.getElementById('score');

function scorea(event) {
  const clickedBall = event.target;
  if (clickedBall.id === 'correct') {
    score.value = score.innerHTML + 3;
  }
}

ball1.addEventListener('click', scorea);
ball2.addEventListener('click', scorea);
ball3.addEventListener('click', scorea);
ball4.addEventListener('click', scorea);
ball5.addEventListener('click', scorea);
ball6.addEventListener('click', scorea);
