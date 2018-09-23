let rowCount = 50;
let colCount = 50;
let gameFrameRate = 0;
let grid;

function setup() {
  createCanvas(800, 600);
  grid = new Grid(rowCount, colCount);
  if (gameFrameRate > 0)
    frameRate(gameFrameRate);
}

function draw(onlyDraw) {
  background(255);
  if (onlyDraw !== true)
    grid.update();
  grid.draw();
}

function mouseClicked() {
  let clickedCell = grid.find(createVector(mouseX, mouseY));
  if (clickedCell) {
    if (clickedCell.cellStatus === CellStatus.DEAD)
      clickedCell.cellStatus = CellStatus.BORN
    else
      clickedCell.cellStatus = CellStatus.DEAD
    clickedCell.draw();
  }
}
