require('dotenv').config();

var express = require('express')
var app = express()
var path = require("path");
var Pusher = require('pusher');
var bodyParser = require('body-parser');

var pusher = new Pusher({
  appId: '324273',
  key: '3243046120d5ad58ddaf',
  secret: '93c1950d6650abedec4a',
  cluster: 'eu',
  encrypted: true
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('assets'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
})

app.get('/dig', function (req, res) {
  res.sendFile(path.join(__dirname+'/dig.html'));
})

const messages = [];

app.post('/send', function (req, res) {
  messages.push({
    message: req.body.message,
    uid: req.body.uid,
  });

  if (messages.length === 15) {
    pusher.trigger('my-channel', 'complete', messages);
  }

  pusher.trigger('my-channel', 'submit', { data: req.body.message });
  res.send(':)')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
