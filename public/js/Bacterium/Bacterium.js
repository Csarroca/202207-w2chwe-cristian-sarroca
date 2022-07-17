class Bacterium {
  alive;
  positionX;
  positionY;
  aliveNeighbors;

  constructor(positionX, positionY, aliveNeighbors, alive = false) {
    this.alive = alive;
    this.positionX = positionX;
    this.positionY = positionY;
    this.aliveNeighbors = aliveNeighbors;
  }
}

const bacteriassss = new Bacterium();
console.log(bacteriassss);

module.exports = Bacterium;
