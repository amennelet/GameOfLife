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
        this.neighbours = [];
    }

    update() {
        let aliveNeighbours = 0;
        let deadNeighbours = 0;
        for (let index = 0; index < this.neighbours.length; index++) {
            const neighbour = this.neighbours[index];
            switch (neighbour.cellStatus) {
                case CellStatus.ALIVE:
                case CellStatus.BORN:
                    aliveNeighbours += 1;
                    break;
                case CellStatus.DEAD:
                    deadNeighbours += 1;
                    break;
            }
        }

        let nextStatus = this.cellStatus;
        if (this.cellStatus === CellStatus.BORN)
            nextStatus = CellStatus.ALIVE;

        if (nextStatus === CellStatus.ALIVE) {
            if (aliveNeighbours < 2 || 3 < aliveNeighbours)
                nextStatus = CellStatus.DEAD;
        } else if (nextStatus === CellStatus.DEAD) {
            if (aliveNeighbours == 3)
                nextStatus = CellStatus.ALIVE;
        }
        return new Cell(this.width, nextStatus);
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