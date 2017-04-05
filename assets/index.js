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

function shuffle(a) {
  var j, x, i;
  for (i = a.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
}

var pusher = new Pusher('3243046120d5ad58ddaf', {
  cluster: 'eu',
  encrypted: true,
});

var channel = pusher.subscribe('my-channel');
channel.bind('complete', (messages) => {
  shuffle(messages);
  console.log(messages)

  for (var i=0; i<messages.length; i++) {
    if (messages[i].uid !== uid) {
      alert(messages[i].message);
    } else {
      alert(messages[i+1].message);
    }
  }

  // holeDepth++;
  // hole.setAttribute('style', `padding-bottom: ${holeDepth}0%`);

});
