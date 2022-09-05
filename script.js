// Global variables
const defaultSize = 16;
const defaultColor = "lightblue";
let drawColor = false;
let colorChoice = defaultColor;
let sizeChoice = defaultSize;
let erase = false;
let rainbow = false;

// Elements
const grid = document.getElementById("grid-container");
const reset = document.getElementById("reset");
const color = document.getElementById("color");
const slider = document.getElementById("size");
const displaySize = document.getElementById("displaySize");
const eraser = document.getElementById("eraser");
const addLines = document.getElementById("add-lines");
const removeLines = document.getElementById("remove-lines");
const rainbowButton = document.getElementById("rainbow");

// Draws if mouse is held down and stops if it is not
window.addEventListener("mousedown", () => {
  drawColor = true;
});

window.addEventListener("mouseup", () => {
  drawColor = false;
});

// Creates grid
function setupGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (i = 0; i < size * size; i++) {
    const div = document.createElement("div");

    // Draws if mouse is held down
    div.addEventListener("mouseover", () => {
      if (drawColor) {
        if (erase) {
          div.style.backgroundColor = "white";
        } else if (rainbow) {
          drawRainbow(div);
        } else {
          div.style.backgroundColor = colorChoice;
        }
      }
    });

    // Draws on first box clicked
    div.addEventListener("mousedown", () => {
      if (erase) {
        div.style.backgroundColor = "white";
      } else if (rainbow) {
        drawRainbow(div);
      } else {
        div.style.backgroundColor = colorChoice;
      }
    });

    grid.appendChild(div).className = "box";
  }
}

// Draw rainbow helper function
function drawRainbow(div) {
  const randomR = Math.floor(Math.random() * 256);
  const randomG = Math.floor(Math.random() * 256);
  const randomB = Math.floor(Math.random() * 256);
  div.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

// Clears grid and makes new grid
function clearGrid() {
  grid.innerHTML = "";
  setupGrid(sizeChoice);
}

// Display
function displaySizeValue(size) {
  displaySize.textContent = `${size} x ${size}`;
}

// Changes grid size and clears grid
function changeGridSize(size) {
  sizeChoice = size;
  clearGrid();
}

// Changes color selection based on user input
color.addEventListener("input", (e) => {
  colorChoice = e.target.value;
});

// Reset button function to clear grid
reset.addEventListener("click", () => {
  clearGrid();
});

// Turn on grid lines
addLines.addEventListener("click", () => {
  grid.style.gap = "1px";
  addLines.style.backgroundColor = "lightgrey";
  removeLines.style.backgroundColor = "white";
});

// Turn off grid lines
removeLines.addEventListener("click", () => {
  grid.style.gap = 0;
  removeLines.style.backgroundColor = "lightgrey";
  addLines.style.backgroundColor = "white";
});

// Toggle eraser button
eraser.addEventListener("click", () => {
  if (erase == true) {
    erase = false;
  } else {
    erase = true;
  }
  eraser.classList.toggle("button-on");
});

// Toggle rainbow button
rainbowButton.addEventListener("click", () => {
  if (rainbow == true) {
    rainbow = false;
  } else {
    rainbow = true;
  }
  rainbowButton.classList.toggle("button-on");
});

// Updates grid size based on user input on slider
slider.addEventListener("change", (e) => {
  changeGridSize(e.target.value);
});

// Updates display of grid size based on user input
slider.addEventListener("mousemove", (e) => {
  displaySizeValue(e.target.value);
});

// Creates grid with a defualt size of 16x16
setupGrid(defaultSize);
