// Global variables
const defaultSize = 16;
const defaultColor = "lightblue";
let drawColor = false;
let colorChoice = defaultColor;
let sizeChoice = defaultSize;
let erase = false;
let rainbow = false;

const grid = document.getElementById("grid-container");
const reset = document.getElementById("reset");
const color = document.getElementById("color");
const slider = document.getElementById("size");
const displaySize = document.getElementById("displaySize");
const eraser = document.getElementById("eraser");
const addLines = document.getElementById("add-lines");
const removeLines = document.getElementById("remove-lines");
const rainbowButton = document.getElementById("rainbow");

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
      if (drawColor) {
        if (erase) {
          div.style.backgroundColor = "white";
        } else if (rainbow) {
          const randomR = Math.floor(Math.random() * 256);
          const randomG = Math.floor(Math.random() * 256);
          const randomB = Math.floor(Math.random() * 256);
          div.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
        } else {
          div.style.backgroundColor = colorChoice;
        }
      }
    });

    div.addEventListener("mousedown", () => {
      if (erase) {
        div.style.backgroundColor = "white";
      } else if (rainbow) {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        div.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
      } else {
        div.style.backgroundColor = colorChoice;
      }
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

addLines.addEventListener("click", () => {
  grid.style.gap = "1px";
});

removeLines.addEventListener("click", () => {
  grid.style.gap = 0;
});

eraser.addEventListener("click", () => {
  if (erase == true) {
    erase = false;
  } else {
    erase = true;
  }
  eraser.classList.toggle("button-on");
});

rainbowButton.addEventListener("click", () => {
  if (rainbow == true) {
    rainbow = false;
  } else {
    rainbow = true;
  }
  rainbowButton.classList.toggle("button-on");
});

slider.addEventListener("change", (e) => {
  changeGridSize(e.target.value);
});

slider.addEventListener("mousemove", (e) => {
  displaySizeValue(e.target.value);
});

setupGrid(defaultSize);
