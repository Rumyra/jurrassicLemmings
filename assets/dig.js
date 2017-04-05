$(document).ready(() => {

});

var pusher = new Pusher('3243046120d5ad58ddaf', {
  cluster: 'eu',
  encrypted: true,
});

var channel = pusher.subscribe('my-channel');

channel.bind('submit', (data) => {
  holedepth++;
  hole.setAttribute('style', `padding-bottom: ${holeDepth}0%`);

  

});



