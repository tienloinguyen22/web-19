$(document).ready(() => {
  const pathname = window.location.pathname;
  const questionId = pathname.split('/')[pathname.split('/').length - 1];

  $.ajax({
    url: `/get-question-by-id?questionId=${questionId}`,
    type: 'GET',
    success: (data) => {
      if (data.id !== null) {
        document.getElementById('question-content').innerText = data.content;
        document.getElementById('total-votes').innerText = data.yes + data.no;

        const yesPercent = data.yes / (data.yes + data.no) * 100;
        const noPercent = 100 - yesPercent;
        document.getElementById('yes-percent').innerText = `${yesPercent.toFixed(3)}%`;
        document.getElementById('no-percent').innerText = `${noPercent}%`;
      } else {
        document.getElementById('question-content').innerText = 'Question not found';
      }
    },
    error: (error) => {
      console.log(error);
    },
  });
})