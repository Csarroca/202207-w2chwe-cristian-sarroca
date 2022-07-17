import gridGenerator from "./grid.js";
// tengo q cambiar este tests no esta actu
describe("Given a gridGenerator function ", () => {
  describe("when it's called and it recives 10 and 10", () => {
    test("Then it should return and array which lenght is 10 with 10 arrays inside with 10 number 2 inside of each one", () => {
      const columns = 10;
      const rows = 10;

      const expectedOutput = [
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      ];

      const realReturn = gridGenerator(columns, rows);

      expect(realReturn).toEqual(expectedOutput);
    });
  });
});
