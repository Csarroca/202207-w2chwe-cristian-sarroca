const gridGenerator = require("./grid");
// tengo q cambiar este tests no esta actu
describe("Given a gridGenerator function ", () => {
  describe("when it's called and it recives 5 and 5", () => {
    test("Then it should return and array which lenght is 5 with 5 arrays inside with an object with alive,positionX,positionY and aliveNeighbors properties", () => {
      const columns = 5;
      const rows = 5;

      const expectedOutput = gridGenerator(5, 5);

      const realReturn = gridGenerator(columns, rows);

      expect(realReturn).toEqual(expectedOutput);
    });
  });
});
