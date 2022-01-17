const controlRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");
textRef.style.fontSize = `${controlRef.value}px`;

const changeFontSize = (event) => {
  textRef.style.fontSize = `${event.currentTarget.value}px`;
};

controlRef.addEventListener("input", changeFontSize);