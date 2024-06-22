document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.submit-quiz').addEventListener('click', function() {
        const selectedOption = document.querySelector('input[name="quiz"]:checked');
        if (selectedOption) {
            const isCorrect = selectedOption.value === 'correct';
            if (isCorrect) {
                alert('Correct! Microsoft Word is used for creating documents.');
            } else {
                alert('Incorrect. The correct answer is Microsoft Word.');
            }
        } else {
            alert('Please select an option before submitting.');
        }
    });
});
