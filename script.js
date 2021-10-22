let rgbColor = document.getElementById('rgb-color');

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

function addAnswerId() {
  if (ball1.value === correctAnswer) {
    ball1.id = 'answer';
  } if (ball2.value === correctAnswer) {
    ball2.id = 'answer';
  } if (ball3.value === correctAnswer) {
    ball3.id = 'answer';
  } if (ball4.value === correctAnswer) {
    ball4.id = 'answer';
  } if (ball5.value === correctAnswer) {
    ball5.id = 'answer';
  } if (ball6.value === correctAnswer) {
    ball6.id = 'answer';
  }
}

addAnswerId();

const result = document.getElementById('result');
function showResult(event) {
  const clickedBall = event.target;
  if (clickedBall.id === 'answer') {
    result.innerHTML = 'Acertou!';
  } else result.innerHTML = 'Errou!Tente novamente!';
}

ball1.addEventListener('click', showResult);
ball2.addEventListener('click', showResult);
ball3.addEventListener('click', showResult);
ball4.addEventListener('click', showResult);
ball5.addEventListener('click', showResult);
ball6.addEventListener('click', showResult);
