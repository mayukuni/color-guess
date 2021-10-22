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
