let gridSizeBtn = document.querySelector(".grid-size");
let grid = document.querySelector(".grid");
let blackBtn = document.querySelector(".black");
let blueBtn = document.querySelector(".blue");
let eraserBtn = document.querySelector(".eraser");
let clearBtn = document.querySelector(".clear");

gridSizeBtn.addEventListener("click", () => {
  let size = "";

  grid.innerHTML = "";

  do {
    size = prompt("Enter number of square per-side");
  } while (isNaN(size) || size < 1 || size > 100);

  for (i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.className = "row";
    grid.appendChild(row);

    for (j = 0; j < size; j++) {
      let square = document.createElement("div");
      square.className = "square";
      row.appendChild(square);
    }
  }
  let squares = document.querySelectorAll(".square");

  function addColorToSquare(color) {
    squares.forEach((square) => {
      square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = color;
      });
    });
  }

  blackBtn.addEventListener("click", () => {
    addColorToSquare("black");
  });

  blueBtn.addEventListener("click", () => {
    addColorToSquare("blue");
  });

  eraserBtn.addEventListener("click", () => {
    addColorToSquare("white");
  });

  clearBtn.addEventListener("click", () => {
    squares.forEach((square) => {
      square.style.backgroundColor = "white";
    });
  });
});
