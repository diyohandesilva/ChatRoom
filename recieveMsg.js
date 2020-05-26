var Faye = require('faye');
var client = new Faye.Client('http://localhost:8000/');

client.subscribe('/mess', function(message) {
  console.log('Got a message: ' + message.text);
});