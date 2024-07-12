
function checkAnswer () {
    let correctAnswer = "4";
    let selectedAnswer = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = selectedAnswer ? selectedAnswer.value : null;
    let feedback = document.getElementById('feedback');

    if (userAnswer === null) {
        feedback.textContent = 'Please select an answer';
    } else if (userAnswer === correctAnswer) {
        feedback.textContent = 'Correct! Well done.';
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }

}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);     