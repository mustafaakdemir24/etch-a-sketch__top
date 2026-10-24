const container = document.querySelector(".container");

const row = 16;
const col = 16;

for (let i = 0; i <= row; i++) {
  const rowDiv = document.createElement("div");
  rowDiv.classList.add("row");

  for (let j = 0; j <= col; j++) {
    const colDiv = document.createElement("div");
    colDiv.classList.add("col");
    rowDiv.appendChild(colDiv);
  }
  container.appendChild(rowDiv);
}
