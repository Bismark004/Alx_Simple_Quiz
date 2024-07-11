
function checkAnswer () {
    let correctAnswer = "4";
    let selectedAnswer = document.querySelector('nput[name="quiz"]:checked');
    let userAnswer = selectedAnswer ? selectedAnswer.value : null;
    let feedback = document.getElementById('feedback');

    if (userAnswer === null) {
        feedback.textContent = 'please select an answer';
    } else if (userAnswer === correctAnswer) {
        feedback.textContent = 'correct!';
    } else {
        feedback.textContent = 'Wrong answer, try again.';
    }

}

document.getElementById('submit-answere').addEventListener('click', checkAnswer);