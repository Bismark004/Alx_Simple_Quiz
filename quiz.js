
function checkAnswer () {
    let correctAnswer = "4";
    let selectedAnswer = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = selectedAnswer ? selectedAnswer.value : null;
    let feedback = document.getElementById('feedback');

    if (userAnswer === null) {
        feedback.textContent = 'Please select an answer';
    } else if (userAnswer === correctAnswer) {
        feedback.textContent = 'correct!';
    } else {
        feedback.textContent = 'Wrong answer, try again.';
    }

}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);     