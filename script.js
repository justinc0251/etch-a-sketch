const grid = document.getElementById("grid-container");

function setupGrid(size) {
  for (i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    grid.appendChild(div);
  }
}

setupGrid(4);
