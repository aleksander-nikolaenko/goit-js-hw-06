const inputRef = document.querySelector('#validation-input');

const validationInput = (event) => { 

  if (event.currentTarget.value.length === +event.currentTarget.dataset.length) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  }
  else {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.remove("valid");
  }
};

inputRef.addEventListener("blur", validationInput);