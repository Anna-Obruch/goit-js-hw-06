const inputEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

inputEl.addEventListener("input", fontSizeControl);

function fontSizeControl({ currentTarget }) {
  textEl.style.fontSize = `${currentTarget.value}px`;
}
