const gridGenerator = (columns, rows) => {
  const grid = [];
  for (let row = 0; row < rows; row++) {
    grid.push(new Array(columns).fill({}));
  }
  return grid;
};

gridGenerator(10, 10);

export default gridGenerator;
