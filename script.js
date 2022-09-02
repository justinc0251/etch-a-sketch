// Global variables
const defaultSize = 16;
const defaultColor = "lightblue";
let drawColor = false;
let colorChoice = defaultColor;

const grid = document.getElementById("grid-container");
const reset = document.getElementById("reset");
const color = document.getElementById("color");

window.addEventListener("mousedown", () => {
  drawColor = true;
});

window.addEventListener("mouseup", () => {
  drawColor = false;
});

color.oninput = (e) => {
    colorChoice = e.target.value;
}

function setupGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (i = 0; i < size * size; i++) {
    const div = document.createElement("div");

    div.addEventListener("mouseover", () => {
      if (drawColor) div.style.backgroundColor = colorChoice;
    });

    div.addEventListener("mousedown", () => {
      div.style.backgroundColor = colorChoice;
    });

    grid.appendChild(div).className = "box";
  }
}

reset.addEventListener("click", function () {
  grid.innerHTML = "";
  setupGrid(defaultSize);
});

setupGrid(defaultSize);
