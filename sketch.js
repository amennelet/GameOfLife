let rowCount = 70;
let colCount = 70;
let gameFrameRate = 10;
let grid;
let cells;

function setup() {
  createCanvas(800, 600);
  cells = [];
  let cellWidth = width / (colCount + 1) < height / (rowCount + 1) ? width / (colCount + 1) : height / (rowCount + 1);
  for (let row = 0; row < rowCount; row++) {
    cells.push([]);
    for (let col = 0; col < colCount; col++) {
      cells[row].push(new Cell(cellWidth, random([CellStatus.DEAD, CellStatus.ALIVE, CellStatus.BORN])));
    }
  }
  grid = new Grid(rowCount, colCount, cells);
  //frameRate(gameFrameRate);
}

function draw() {
  background(255);
  grid.update();
  grid.draw();
}