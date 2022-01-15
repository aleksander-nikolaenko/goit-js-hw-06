let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const spanValue = document.querySelector('#value');

const handleClickDecrement = () => {
  counterValue -= 1;
  spanValue.textContent = `${counterValue}`;
};

const handleClickIncrement = () => {
  counterValue += 1;
  spanValue.textContent = `${counterValue}`;
};

decrementBtn.addEventListener("click", handleClickDecrement);
incrementBtn.addEventListener("click", handleClickIncrement);

