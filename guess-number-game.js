class GuessNumberGame {
    constructor() {
        this.answer = "1 2 3 4";
    }

    test(input) {
        let numberInCorrectPosition = 0;
        for (let index in input.split(" ")) {
            if (input.split(" ")[index] === this.answer.split(" ")[index]) {
                numberInCorrectPosition += 1;
            }
        }
        return `${numberInCorrectPosition}A0B`;
    }
}

module.exports = GuessNumberGame;