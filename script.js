// Global variables
const defaultSize = 16;
const defaultColor = "lightblue";

const grid = document.getElementById("grid-container");
const reset = document.getElementById("reset");
const color = document.getElementById("color");

let drawColor = false;

window.addEventListener("mousedown", () => {
  drawColor = true;
});

window.addEventListener("mouseup", () => {
  drawColor = false;
});

function setupGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (i = 0; i < size * size; i++) {
    const div = document.createElement("div");

    div.addEventListener("mouseover", () => {
      if (drawColor) div.style.backgroundColor = defaultColor;
    });

    div.addEventListener("mousedown", () => {
      div.style.backgroundColor = defaultColor;
    });

    grid.appendChild(div).className = "box";
  }
}

reset.addEventListener("click", function () {
  grid.innerHTML = "";
  setupGrid(defaultSize);
});

setupGrid(defaultSize);
