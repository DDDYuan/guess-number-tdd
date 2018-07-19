class AnswerGenerator {
    constructor(min, max, length) {
        this.min = min;
        this.max = max;
        this.length = length;
    }
    generate() {
        const answer = [];
        while (answer.length < this.length) {
            const number = ~~(Math.random() * (this.max - this.min + 1)) + this.min;
            if (!answer.includes(number)) {
                answer.push(number);
            }
        }
        return answer;
    }
}

module.exports = AnswerGenerator;