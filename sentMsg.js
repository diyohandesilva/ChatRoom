var Faye = require('faye');
var client = new Faye.Client('http://localhost:8000/');


var pub = client.publish('/mess', {
  text: 'Hello world'
});

pub.callback(process.exit);