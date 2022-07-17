const checkRows = (row, column, grid) => {
  let columnTested = column;
  // eslint-disable-next-line prefer-const
  let cellChecked = grid[row][columnTested].alive;
  let aliveNeighbors = 0;
  let checkCounter = 0;

  do {
    if (cellChecked === true) {
      aliveNeighbors += 1;
    }
    columnTested += 1;
    checkCounter += 1;
  } while (checkCounter < 3);
  return aliveNeighbors;
};
// prueba de github
const checkCell = (row, column, grid) => {
  let counter = 0;
  let aliveNeighbors = 0;
  const columCheck = column - 1;
  let rowCheck = row - 1;

  do {
    aliveNeighbors += checkRows(columCheck, rowCheck, grid);
    rowCheck += 1;
    counter += 1;
  } while (counter !== 3);
  return aliveNeighbors;
};

module.exports = checkCell;
