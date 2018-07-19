const AnswerGenerator = require("./answer-generator");
let generator;

beforeEach(() => {
    generator = new AnswerGenerator(0, 9, 4);
});

describe('AnswerGenerator', () => {
    it("should have length of 4", () => {
        expect(generator.generate()).toHaveLength(4);
    });

    it("should have every element less than or equal to 9 and greater than or equal to 0", () => {
        const answer = generator.generate();
        answer.forEach(element => {
            expect(element).toBeGreaterThanOrEqual(0);
            expect(element).toBeLessThanOrEqual(9);
        });
    });

    it('should return 1, 2, 3, 4 when mock Math.random', () => {
        let number = 0;
        jest.spyOn(Math, "random").mockImplementation(() => {
            number += 0.1;
            console.log(number);
            return number;
        });
        expect(generator.generate()).toEqual([1, 2, 3, 4]);
    });
});