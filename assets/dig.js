$(document).ready(() => {

});

const miningArea = document.querySelector('.mining-area');
const block = document.createElement('div');

for (var i = 0; i < 640; i++) {
  const opacity = Math.floor(Math.random() * (9 - 7)) + 7;
  const block = document.createElement('div');
  block.setAttribute('style', `opacity: 0.${opacity}`);
  miningArea.appendChild(block);
}

var holeDepth = 1;
const hole = document.createElement('span');
miningArea.appendChild(hole);

var pusher = new Pusher('3243046120d5ad58ddaf', {
  cluster: 'eu',
  encrypted: true,
});

var channel = pusher.subscribe('my-channel');

channel.bind('submit', (data) => {
  console.log(data);
  holeDepth++;
  hole.setAttribute('style', `padding-bottom: ${holeDepth}0%`);

  var allMessArr = [];
  allMessArr.push(data);




});



