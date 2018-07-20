const GuessNumberGame = require('./guess-number-game');
const AnswerGenerator = require('./answer-generator');

const game = new GuessNumberGame(new AnswerGenerator(0, 9, 4));

$('#submit-answer').click(() => {
    const input = $('#input-field').val();
    const result = game.test(input);

    const resultElement = document.createElement("tr");
    const inputTd = document.createElement("td");
    inputTd.textContent = input;
    const resultTd = document.createElement("td");
    resultTd.textContent = result;
    resultElement.appendChild(inputTd);
    resultElement.appendChild(resultTd);

    $('#output-field').append(resultElement);
    $('#input-field').val('');
});