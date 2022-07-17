const Bacterium = require("./Bacterium");

describe("Given a class Bacterium ", () => {
  describe("when it's called and it recives a parameter alive = false", () => {
    test("Then it should return an object with alive property = false and postionX, positionY and aliveNeighbors properties undefined", () => {
      // eslint-disable-next-line prefer-const

      const expectedOutput = {
        alive: false,
        positionX: undefined,
        positionY: undefined,
        aliveNeighbors: undefined,
      };

      const realReturn = new Bacterium();

      expect(realReturn).toEqual(expectedOutput);
    });
  });
});
