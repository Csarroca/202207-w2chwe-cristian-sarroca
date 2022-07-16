const Cell = require("../Cell/Cell");

const gridGenerator = (columns, rows) => {
  const grid = [];
  let newCell;

  for (let i = 0; i < rows; i += 1) {
    grid.push([]);
    for (let j = 0; j < columns; j += 1) {
      newCell = new Cell(false, i, j, 0);
      grid[i].push(newCell);
    }
  }

  return grid;
};

module.exports = gridGenerator;
