// Global variables
const defaultSize = 16;
const defaultColor = "lightblue";

const grid = document.getElementById("grid-container");

let drawColor = false;

window.addEventListener("mousedown", function () {
  drawColor = true;
});

window.addEventListener("mouseup", function () {
  drawColor = false;
});

function setupGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (i = 0; i < size * size; i++) {
    const div = document.createElement("div");

    div.addEventListener("mouseover", function () {
      if (drawColor) div.style.backgroundColor = defaultColor;
    });

    div.addEventListener("mousedown", function () {
      div.style.backgroundColor = defaultColor;
    });

    grid.appendChild(div).className = "box";
  }
}

setupGrid(defaultSize);
