// Global variables
const defaultSize = 16;
const defaultColor = "lightblue";
let drawColor = false;
let colorChoice = defaultColor;
let sizeChoice = defaultSize;

const grid = document.getElementById("grid-container");
const reset = document.getElementById("reset");
const color = document.getElementById("color");
const slider = document.getElementById("size");
const displaySize = document.getElementById("displaySize");

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
      if (drawColor) div.style.backgroundColor = colorChoice;
    });

    div.addEventListener("mousedown", () => {
      div.style.backgroundColor = colorChoice;
    });

    grid.appendChild(div).className = "box";
  }
}

function clearGrid() {
  grid.innerHTML = "";
  setupGrid(sizeChoice);
}

function displaySizeValue(size) {
  displaySize.innerHTML = `${size} x ${size}`;
}

function changeGridSize(size) {
  sizeChoice = size;
  clearGrid();
}

color.addEventListener("input", (e) => {
  colorChoice = e.target.value;
});

reset.addEventListener("click", () => {
  clearGrid();
});

slider.addEventListener("change", (e) => {
  changeGridSize(e.target.value);
});

slider.addEventListener("mousemove", (e) => {
  displaySizeValue(e.target.value);
});

setupGrid(defaultSize);
