const minusBtn = document.querySelector('button[data-action="decrement"]');
const plusBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;
const valueEl = document.getElementById("value");

plusBtn.addEventListener("click", () => {
  valueEl.textContent = counterValue += 1;
});

minusBtn.addEventListener("click", () => {
  valueEl.textContent = counterValue -= 1;
});
