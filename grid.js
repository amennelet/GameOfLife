class Grid {
    constructor(rowCount, colCount, cells) {
        this.rowCount = rowCount;
        this.colCount = colCount;
        this.strokeWeight = 1;
        this.cells = cells;
    }

    update() {

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
                let cellPos = createVector((this.strokeWeight / 2 + col * colWidth) + (colWidth / 2), (this.strokeWeight / 2 + row * rowHeight) + (rowHeight / 2));
                let cell = cells[row][col];
                cell.update();
                cell.draw(cellPos);
            }
        }

        noLoop();
    }
}