class GuessNumberGame {
    constructor() {
        this.answer = [1, 2, 3, 4];
    }

    test(input) {
        const error = "Wrong Input，Input again";
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
            return error;
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
        return `${numberInCorrectPosition}A${numberInWrongPosition}B`;
    }
}

module.exports = GuessNumberGame;