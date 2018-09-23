const CellStatus = {
    BORN: 'born',
    ALIVE: 'alive',
    DEAD: 'dead'
}

class Cell {
    constructor(width, cellStatus) {
        this.width = width;
        this.colorBorn = color(255 / 2);
        this.colorAlive = color(0);
        this.colorDead = color(255);
        this.cellStatus = cellStatus;
    }

    update() {

    }

    draw(pos) {
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        noStroke();
        switch (this.cellStatus) {
            case CellStatus.BORN:
                fill(this.colorBorn);
                break;
            case CellStatus.ALIVE:
                fill(this.colorAlive);
                break;
            case CellStatus.DEAD:
                fill(this.colorDead);
                break;
        }
        ellipse(0, 0, this.width);
        pop();
    }
}