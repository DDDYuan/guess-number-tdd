const GuessNumberGame = require("./guess-number-game");

describe("GuessNumberGame", () => {
  it("should return 4A0B when input 1 2 3 4 and answer is 1 2 3 4", () => {
    expect(new GuessNumberGame().test("1 2 3 4")).toEqual("4A0B");
  });

  it('should return 3A0B when input 1 2 3 5 and answer is 1 2 3 4', () => {
    expect(new GuessNumberGame().test("1 2 3 5")).toEqual("3A0B");
  });

  it('should return 2A0B when input 1 0 3 5 and answer is 1 2 3 4', () => {
    expect(new GuessNumberGame().test("1 0 3 5")).toEqual("2A0B");
  });

  it('should return 0A3B when input 0 1 2 3 and answer is 1 2 3 4', () => {
    expect(new GuessNumberGame().test("0 1 2 3")).toEqual("0A3B");
  });
});