class Grid {
    constructor(rowCount, colCount, cells) {
        this.rowCount = rowCount;
        this.colCount = colCount;
        this.strokeWeight = 1;
        this.cells = cells;
    }

    applyNeighbours() {
        for (let row = 0; row < this.rowCount; row++) {
            for (let col = 0; col < this.colCount; col++) {
                let cell = this.cells[row][col];
                cell.neighbours = [];
                // previous row
                let previousRow = row - 1 < 0 ? this.rowCount - 1 : row - 1;
                let nextRow = row + 1 > this.rowCount - 1 ? 0 : row + 1;
                let previousCol = col - 1 < 0 ? this.colCount - 1 : col - 1;
                let nextCol = col + 1 > this.colCount - 1 ? 0 : col + 1;

                cell.neighbours.push(this.cells[previousRow][previousCol]);
                cell.neighbours.push(this.cells[previousRow][col]);
                cell.neighbours.push(this.cells[previousRow][nextCol]);

                cell.neighbours.push(this.cells[row][previousCol]);
                cell.neighbours.push(this.cells[row][nextCol]);

                cell.neighbours.push(this.cells[nextRow][previousCol]);
                cell.neighbours.push(this.cells[nextRow][col]);
                cell.neighbours.push(this.cells[nextRow][nextCol]);
            }
        }
    }

    update() {
        this.applyNeighbours();
        let newCells = [];
        for (let row = 0; row < this.rowCount; row++) {
            newCells.push([]);
            for (let col = 0; col < this.colCount; col++) {
                let cell = this.cells[row][col];
                let newCell = cell.update();
                newCells[row].push(newCell);
            }
        }
        this.cells = newCells;
    }

    draw() {
        strokeWeight(this.strokeWeight);
        stroke(0);
        let rowHeight = (height / this.rowCount) - this.strokeWeight / this.rowCount;
        for (let row = 0; row <= this.rowCount; row++) {
            line(0, this.strokeWeight / 2 + row * rowHeight, width, this.strokeWeight / 2 + row * rowHeight);
        }
        let colWidth = (width / this.colCount) - this.strokeWeight / this.colCount;
        for (let col = 0; col <= this.colCount; col++) {
            line(this.strokeWeight / 2 + col * colWidth, 0, this.strokeWeight / 2 + col * colWidth, height);
        }

        for (let row = 0; row < this.rowCount; row++) {
            for (let col = 0; col < this.colCount; col++) {
                let cell = this.cells[row][col];
                let cellPos = createVector((this.strokeWeight / 2 + col * colWidth) + (colWidth / 2), (this.strokeWeight / 2 + row * rowHeight) + (rowHeight / 2));
                cell.draw(cellPos);
            }
        }
    }
}