$(document).ready(() => {

  $('form').on('submit', (e) => {
    e.preventDefault();
    const message = $('input').first().val();

    $.ajax({
      method: 'POST',
      url: '/send',
      data: { message }
    })
  });
});
