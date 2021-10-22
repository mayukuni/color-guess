// 2
let rgbColor = document.getElementById('rgb-color');

function randomColor() {
  const randomNumber = Math.floor(Math.random() * 256);
  const randomNumber2 = Math.floor(Math.random() * 256);
  const randomNumber3 = Math.floor(Math.random() * 256);
  return `(${randomNumber}, ${randomNumber2}, ${randomNumber3})`;
}

function addRgbText() {
  rgbColor.innerHTML = randomColor();
}

addRgbText();

// 3
function addColorToBalls() {
  document.getElementsByClassName('ball')[0].style.backgroundColor = `rgb${randomColor()}`;
  document.getElementsByClassName('ball')[1].style.backgroundColor = `rgb${randomColor()}`;
  document.getElementsByClassName('ball')[2].style.backgroundColor = `rgb${randomColor()}`;
  document.getElementsByClassName('ball')[3].style.backgroundColor = `rgb${randomColor()}`;
  document.getElementsByClassName('ball')[4].style.backgroundColor = `rgb${randomColor()}`;
  document.getElementsByClassName('ball')[5].style.backgroundColor = `rgb${randomColor()}`;
}

addColorToBalls();
