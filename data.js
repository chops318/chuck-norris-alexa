var request = require('request');

module.exports.quote = function() {
  return new Promise(function(resolve, reject) {
    request('http://api.icndb.com/jokes/random', function(err, response, body) {
      body = JSON.parse(body);
      if (err) reject('There was a problem with your request')
      resolve(body.value.joke)
    })
  });
}
