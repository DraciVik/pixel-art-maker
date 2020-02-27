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
  //Prevents default rerendering of the page on submit
  e.preventDefault();
  const pixelCanvas = document.querySelector("#pixelCanvas");
  // In case a grid is already rendered
  if (pixelCanvas.hasChildNodes()) {
    pixelCanvas.innerHTML = "";
  }
  makeGrid(heightValue, widthValue);
});

// Makes a grid - Duh!
function makeGrid(height, width) {
  // Your code goes here!
  const pixelCanvas = document.querySelector("#pixelCanvas");
  const table = document.createElement("table");
  for (let i = 0; i < height; i += 1) {
    // For each height value - a row is made
    let tableRow = document.createElement("tr");
    // For each width value - a 'td' is injected into 'tr'
    for (let y = 0; y < width; y += 1) {
      let tableData = document.createElement("td");
      tableRow.appendChild(tableData);
    }
    table.appendChild(tableRow);
  }

  pixelCanvas.appendChild(table);
}
// Click event listener for 'td'
pixelCanvas.addEventListener("click", function(e) {
  let td = event.target.closest("td");
  if (!td) return;
  let table = document.querySelector("table");
  if (!table.contains(td)) return;
  highlight(td);
});
// Highlights the selected 'td'
function highlight(td) {
  selectedTd = td;
  selectedTd.style.backgroundColor = color;
}
