const Bacterium = require("../Bacterium/Bacterium");
const gridGenerator = require("../grid/grid");

let aliveNeighbors = 0;

const checkCell = (row, column, grid) => {
  if (grid[row - 1][column - 1].alive === true) {
    aliveNeighbors += 1;
  }
};

module.exports = checkCell;
