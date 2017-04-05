var uid = Math.random()*100000+'a';
uid = parseInt(uid.slice(0,5));

$(document).ready(() => {

  $('form').on('submit', (e) => {
    e.preventDefault();
    const message = $('input').first().val();

    $.ajax({
      method: 'POST',
      url: '/send',
      data: { message, uid }
    })
  });
});
