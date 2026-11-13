const body = document.querySelector("body");
const container = document.querySelector(".container");

const divCountButton = document.createElement("button");
divCountButton.textContent = "CreateGrid";
divCountButton.classList.add("btn");
body.insertBefore(divCountButton, container);

const resetButton = document.createElement("button");
resetButton.textContent = "Reset Grid";
resetButton.classList.add("btn");
body.insertBefore(resetButton, container);

const clearButton = document.createElement("button");
clearButton.textContent = "Clear Grid";
clearButton.classList.add("btn");
body.insertBefore(clearButton, container);

clearButton.addEventListener("click", () => {
  const rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    row.remove();
  });
});

resetButton.addEventListener("click", () => {
  const cols = document.querySelectorAll(".col");
  cols.forEach((col) => {
    col.style.backgroundColor = "";
  });
});

divCountButton.addEventListener("click", () => {
  const size = parseInt(
    prompt("Enter the size number of rows/columns (1-100):"),
  );

  if (isNaN(size) || size < 1 || size > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }

  if (container.firstChild) {
    container.firstChild.remove();
  }

  for (let i = 0; i < size; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    for (let j = 0; j < size; j++) {
      const colDiv = document.createElement("div");
      colDiv.classList.add("col");
      rowDiv.appendChild(colDiv);

      colDiv.addEventListener("mouseover", () => {
        colDiv.style.backgroundColor = randomColor();
        colDiv.style.cursor = "pointer";
        colDiv.style.transition = "background-color 0.07s ease";
        // colDiv.addEventListener("mouseout", () => {
        //   colDiv.style.backgroundColor = "";
        // });
      });
    }
    container.appendChild(rowDiv);
  }
});

const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

// const row = 16;
// const col = 16;

// for (let i = 0; i < row; i++) {
//   const rowDiv = document.createElement("div");
//   rowDiv.classList.add("row");

//   for (let j = 0; j < col; j++) {
//     const colDiv = document.createElement("div");
//     colDiv.classList.add("col");
//     rowDiv.appendChild(colDiv);

//     colDiv.addEventListener("mouseover", () => {
//       colDiv.style.backgroundColor = "black";
//       colDiv.style.cursor = "pointer";
//       colDiv.style.transition = "background-color 0.07s ease";
//       colDiv.addEventListener("mouseout", () => {
//         colDiv.style.backgroundColor = "";
//       });
//     });
//   }

//   container.appendChild(rowDiv);
// }
