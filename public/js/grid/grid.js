const Bacterium = require("../Bacterium/Bacterium");

const gridGenerator = (columns, rows) => {
  const grid = [];
  let newBacterium;

  for (let i = 0; i < rows; i += 1) {
    grid.push([]);
    for (let j = 0; j < columns; j += 1) {
      newBacterium = new Bacterium(false, i, j, 0);
      grid[i].push(newBacterium);
    }
  }

  return grid;
};

console.log(gridGenerator(5, 5));
const grid = gridGenerator(5, 5);
console.log(grid[0][0].alive);

module.exports = gridGenerator;
