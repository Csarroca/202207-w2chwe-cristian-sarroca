class Cell {
  constructor(alive, positionX, positionY, aliveNeighbors) {
    this.alive = alive;
    this.positionX = positionX;
    this.positionY = positionY;
    this.aliveNeighbors = aliveNeighbors;
  }
}

module.exports = Cell;
