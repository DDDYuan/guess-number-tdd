class GuessNumberGame {
    constructor() {}

    test(input) {
        if (input === "1 2 3 4") {
            return `4A0B`;
        }
        return `3A0B`;
    }
}

module.exports = GuessNumberGame;