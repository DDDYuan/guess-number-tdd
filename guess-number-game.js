class GuessNumberGame {
    constructor() {
        this.answer = [1, 2, 3, 4];
    }

    test(input) {
        const inputNumberes = input.split(" ").map(str => parseInt(str, 10));
        let numberInCorrectPosition = 0;
        let numberInWrongPosition = 0;
        inputNumberes.forEach(number => {
            if (inputNumberes.indexOf(number) === this.answer.indexOf(number)) {
                numberInCorrectPosition += 1;
            } else if (this.answer.includes(number)) {
                numberInWrongPosition += 1;
            }
        });
        return `${numberInCorrectPosition}A${numberInWrongPosition}B`;
    }
}

module.exports = GuessNumberGame;