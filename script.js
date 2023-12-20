document.addEventListener('DOMContentLoaded', function () {
    // Get all question elements
    const questions = document.querySelectorAll('.question');

    // Add click event listener to each question
    questions.forEach(question => {
      const plusIcon = question.querySelector('img[src="images/icon-plus.svg"]');
      const minusIcon = question.querySelector('img[src="images/icon-minus.svg"]');
      const answer = question.nextElementSibling;

      plusIcon.addEventListener('click', function () {
        answer.style.display = 'block';
        plusIcon.style.display = 'none';
        minusIcon.style.display = 'inline';
      });

      minusIcon.addEventListener('click', function () {
        answer.style.display = 'none';
        plusIcon.style.display = 'inline';
        minusIcon.style.display = 'none';
      });
    });
  });