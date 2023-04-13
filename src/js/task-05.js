const input = document.getElementById("name-input");
const nameLabel = document.getElementById("name-output");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value === "") nameLabel.textContent = "Anonymous";
  else nameLabel.textContent = event.currentTarget.value;
}
