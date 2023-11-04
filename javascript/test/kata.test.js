const { Cell } = require("../src/kata");

describe("The game of live tests", function () {
  it("given an alive cell when has not neighbours then it dies", function () {
    const cell = new Cell(true);

    cell.numberOfNeighbours(0);
    expect(cell.isAlive).toBe(false);
  });
});
