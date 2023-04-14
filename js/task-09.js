function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const onBtnColorChange = document.querySelector(".change-color");
const textColor = document.querySelector(".color");
const body = document.body;

onBtnColorChange.addEventListener("click", changeColor);

function changeColor() {
  const color = getRandomHexColor()
  textColor.textContent = color;
  body.style.backgroundColor = color;
}
