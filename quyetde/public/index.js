$(document).ready(() => {
  $.ajax({
    url: '/random-question',
    type: 'GET',
    success: (data) => {
      console.log(data.id);
      if (data.id !== null) {
        document.getElementById('question-content').innerText = data.content;

        // listen click
        document.getElementById('vote-yes').addEventListener('click', () => {
          $.ajax({
            url: `/vote/${data.id}/yes`,
            type: 'GET',
            success: (_result) => {
              window.location.href = `/result/${data.id}`;
            },
            error: (error) => {
              console.log(error);
            },
          });
        });

        document.getElementById('vote-no').addEventListener('click', () => {
          $.ajax({
            url: `/vote/${data.id}/no`,
            type: 'GET',
            success: (_result) => {
              window.location.href = `/result/${data.id}`;
            },
            error: (error) => {
              console.log(error);
            },
          });
        });

        document.getElementById('question-result').addEventListener('click', () => {
          window.location.href = `/result/${data.id}`;
        });

        document.getElementById('other-question').addEventListener('click', () => {
          window.location.reload();
        });
      } else {
        document.getElementById('question-content').innerText = 'Not found';
      }
    },
    error: (error) => {
      console.log(error);
    },
  });
});