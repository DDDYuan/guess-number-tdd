class GuessNumberGame {
    constructor() {
        this.answer = "1 2 3 4";
    }

    test(input) {
        let numberInCorrectPosition = 0;
        let numberInWrongPosition = 0;
        for (let index in input.split(" ")) {
            if (input.split(" ")[index] === this.answer.split(" ")[index]) {
                numberInCorrectPosition += 1;
            } else if (this.answer.split(" ").includes(input.split(" ")[index])) {
                numberInWrongPosition += 1;
            }
        }
        return `${numberInCorrectPosition}A${numberInWrongPosition}B`;
    }
}

module.exports = GuessNumberGame;