var request = require('request');
var ent = require('ent');

module.exports.quote = function() {
  return new Promise(function(resolve, reject) {
    request('http://api.icndb.com/jokes/random', function(err, response, body) {
      body = JSON.parse(body);
      if (err) reject('There was a problem with your request')
      resolve(ent.decode(body.value.joke))
    })
  });
}
