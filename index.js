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

app.use( bodyParser.json() );

app.use(express.static('assets'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
})

app.get('/dig', function (req, res) {
  res.sendFile(path.join(__dirname+'/dig.html'));
})

app.post('/send', function (req, res) {
  console.log(req.body)
  // pusher.trigger('my-channel', 'submit', { data: true });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
