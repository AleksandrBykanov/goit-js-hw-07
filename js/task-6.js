function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = {
  input: document.querySelector("input"),
  create: document.querySelector("[data-create]"),
  destroy: document.querySelector("[data-destroy]"),
  result: document.querySelector("#boxes"),
};

controls.create.addEventListener("click", createBoxes);
controls.destroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = controls.input.value;
  if (amount > 0 && amount < 101) {
    for (let i = 0; i < +amount; i += 1) {
      controls.result.insertAdjacentHTML(
        "beforeend",
        `<div style="width: ${i * 10 + 30}px;
          height: ${i * 10 + 30}px;
          background-color: ${getRandomHexColor()};
          ">
          ${i + 1}
        </div >`
      );
    }
    controls.input.value = "";
  } else {
    controls.input.value = "";
    return alert("Число має бути в межах від 1 до 100 включно.");
  }
}

function destroyBoxes() {
  controls.result.innerHTML = "";
}
