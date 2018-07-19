class AnswerGenerator {
    constructor() {}
    generate() {
        const answer = [];
        while (answer.length < 4) {
            const number = ~~(Math.random() * 10);
            if (!answer.includes(number)) {
                answer.push(number);
            }
        }
        return answer;
    }
}

module.exports = AnswerGenerator;