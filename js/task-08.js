
const user = {};
const formRef = document.querySelector('.login-form');

const handleSubmit = (event) => {
  event.preventDefault();

  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  user.email = email.value; 
  user.password = password.value; 
  
  console.log(user);
  event.currentTarget.reset();
}

formRef.addEventListener("submit", handleSubmit);