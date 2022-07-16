// prueba de object.prototype.constructor no funciona

/*
function Bacteruium(alive, positionX, positionY, numberOfNeighbors) {
  this.alive = alive;
  this.positionX = positionX;
  this.positionY = positionY;
  this.numberOfNeighbors = numberOfNeighbors;
}

const aliveBacterium1 = new Bacteruium(true, 2, 4, 0);

console.log(aliveBacterium1);
*/

// con class funciona

class Bacteruiums {
  constructor(alive, positionX, positionY, numberOfNeighbors) {
    this.alive = alive;
    this.positionX = positionX;
    this.positionY = positionY;
    this.numberOfNeighbors = numberOfNeighbors;
  }
}

const aliveBacterium2 = new Bacteruiums(true, 2, 4, 0);

console.log(aliveBacterium2);
