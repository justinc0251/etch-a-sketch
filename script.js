const grid = document.getElementById("grid-container");

function setupGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    grid.appendChild(div);
  }
}

setupGrid(16);
