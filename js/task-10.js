const inputAmount = document.querySelector('#controls>input')
const boxesRef = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const destroyBoxes = () => {
  boxesRef.innerHTML = '';
}

const createBoxes = () => {
  const amount = Number(inputAmount.value);
  if (amount === 0) {
    destroyBoxes();
    return;
  }
  let itemWidth = 20;
  let itemHeight = 20;
  const elementsArr = [];
  for (let i = 0; i < amount; i += 1) {
    itemWidth += 10
    itemHeight+=10
    const item = document.createElement('div');
    item.style.width = itemWidth + "px";
    item.style.height = itemHeight + "px";
    item.style.backgroundColor = getRandomHexColor();
    elementsArr.push(item);
  }
  destroyBoxes();
  boxesRef.append(...elementsArr);
}

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
