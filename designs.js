// Select color input
let colorInput = document.querySelector("input[type='color']");

let color = colorInput.value;

colorInput.addEventListener("change", function(e) {
  color = e.target.value;
});

// Select size input
const gridHeightInput = document.querySelector("#inputHeight");
let heightValue = gridHeightInput.value;

const gridWidthInput = document.querySelector("#inputWidth");
let widthValue = gridWidthInput.value;

const form = document.querySelector("#sizePicker");

form.addEventListener("change", function(e) {
  if (e.target === gridHeightInput) {
    heightValue = e.target.value;
  } else if (e.target === gridWidthInput) {
    widthValue = e.target.value;
  }
});

// When size is submitted by the user, call makeGrid()

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const pixelCanvas = document.querySelector("#pixelCanvas");
  if (pixelCanvas.hasChildNodes()) {
    pixelCanvas.innerHTML = "";
  }
  makeGrid(heightValue, widthValue);
});

function makeGrid(height, width) {
  // Your code goes here!
  const pixelCanvas = document.querySelector("#pixelCanvas");
  const table = document.createElement("table");
  for (let i = 0; i < height; i += 1) {
    let tableRow = document.createElement("tr");
    for (let y = 0; y < width; y += 1) {
      let tableData = document.createElement("td");
      tableRow.appendChild(tableData);
    }
    table.appendChild(tableRow);
  }

  pixelCanvas.appendChild(table);
}

pixelCanvas.addEventListener("click", function(e) {
  let target = e.target;

  if (target.tagName !== "TD") return;
  highlight(target);
});

function highlight(td) {
  selectedTd = td;
  selectedTd.style.backgroundColor = color;
}
