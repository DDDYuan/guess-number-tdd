const GuessNumberGame = require("./guess-number-game");
const AnswerGenerator = require("./answer-generator");
let game;
beforeEach(() => {
  const generator = new AnswerGenerator();
  generator.generate = jest.fn((() => [1, 2, 3, 4]));
  game = new GuessNumberGame(generator);
});

describe("GuessNumberGame", () => {
  it("should return 4A0B when input 1 2 3 4 and answer is 1 2 3 4", () => {
    expect(game.test("1 2 3 4")).toEqual("4A0B");
  });

  it('should return 3A0B when input 1 2 3 5 and answer is 1 2 3 4', () => {
    expect(game.test("1 2 3 5")).toEqual("3A0B");
  });

  it('should return 2A0B when input 1 0 3 5 and answer is 1 2 3 4', () => {
    expect(game.test("1 0 3 5")).toEqual("2A0B");
  });

  it('should return 0A3B when input 0 1 2 3 and answer is 1 2 3 4', () => {
    expect(game.test("0 1 2 3")).toEqual("0A3B");
  });

  it('should return 2A2B when input 1 2 4 3 and answer is 1 2 3 4', () => {
    expect(game.test("1 2 4 3")).toEqual("2A2B");
  });

  it('should return "Wrong Input，Input again" when input 1 2 3 10', () => {
    expect(game.test("1 2 3 10")).toEqual("Wrong Input，Input again");
  });

  it('should return "Wrong Input，Input again" when input 1 2 3 -4', () => {
    expect(game.test("1 2 3 -4")).toEqual("Wrong Input，Input again");
  });

  it('should return "Wrong Input，Input again" when input a b c d', () => {
    expect(game.test("a b c d")).toEqual("Wrong Input，Input again");
  });

  it('should return "Wrong Input，Input again" when input 1 1 1 1', () => {
    expect(game.test("1 1 1 1")).toEqual("Wrong Input，Input again");
  });

  it('should return "Run out of 6 chances" when input wrong answers 6 chances', () => {
    expect(game.test("1 2 3 5")).toEqual("3A0B");
    expect(game.test("1 2 3 5")).toEqual("3A0B");
    expect(game.test("1 2 3 5")).toEqual("3A0B");
    expect(game.test("1 2 3 5")).toEqual("3A0B");
    expect(game.test("1 2 3 5")).toEqual("3A0B");
    expect(game.test("1 2 3 5")).toEqual("3A0B");
    expect(game.test("1 2 3 5")).toEqual("Run out of 6 chances");
  });
});