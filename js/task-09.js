const bodyRef = document.querySelector("body");
const colorTextField = document.querySelector('span.color');
const changeColorBtn = document.querySelector("button.change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = () => {
  const randomColor = getRandomHexColor();
  colorTextField.textContent = randomColor;
  bodyRef.style.backgroundColor = randomColor;
}

changeColorBtn.addEventListener("click", changeColor);