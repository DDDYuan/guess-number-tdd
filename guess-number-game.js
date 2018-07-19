class GuessNumberGame {
    constructor() {
        this.answer = [1, 2, 3, 4];
        this.chances = 6;
        this.errorMessageFor6Chances = "Run out of 6 chances";
        this.errorMessageForInvalidInput = "Wrong Input，Input again";
    }

    test(input) {
        if (this.chances <= 0) {
            return this.errorMessageFor6Chances;
        }

        const patternOfZeroToNine = new RegExp("^[0-9]$");
        const inputNumberes = [];
        let invalid = false;
        input.split(" ").forEach(
            element => {
                if (!patternOfZeroToNine.test(element)) {
                    invalid = true;
                } else {
                    const number = parseInt(element, 10);
                    if (!inputNumberes.includes(number)) {
                        inputNumberes.push(number);
                    }
                }
            }
        );

        if (invalid || inputNumberes.length < 4) {
            return this.errorMessageForInvalidInput;
        }
        let numberInCorrectPosition = 0;
        let numberInWrongPosition = 0;
        inputNumberes.forEach(number => {
            if (inputNumberes.indexOf(number) === this.answer.indexOf(number)) {
                numberInCorrectPosition += 1;
            } else if (this.answer.includes(number)) {
                numberInWrongPosition += 1;
            }
        });
        this.chances -= 1;
        return `${numberInCorrectPosition}A${numberInWrongPosition}B`;
    }
}

module.exports = GuessNumberGame;