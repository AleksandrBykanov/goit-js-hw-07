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
  destroyBoxes();
  const elements = [];
  amount = controls.input.value;
  if (amount > 0 && amount < 101) {
    for (let i = 0; i < amount; i += 1) {
      const div = document.createElement('div');
      const size = 30 + i * 10;
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.background = getRandomHexColor();
      div.textContent = `${i + 1}`;
      elements.push(div);
    };
    controls.input.value = "";
  } 
  controls.result.append(...elements); 
}

function destroyBoxes() {
  controls.result.innerHTML = "";
}
