const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const changeOutput = (event) => {
  event.currentTarget.value === "" ? nameOutput.textContent = 'Anonymous' : nameOutput.textContent = event.currentTarget.value;
}

nameInput.addEventListener("input", changeOutput)