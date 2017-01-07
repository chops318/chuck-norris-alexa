var Alexa = require('alexa-sdk');
var data = require("./data");

var skillName = "Unofficial Chuck Norris Quotes";

var handlers = {

    "LaunchRequest": function () {
      data.quote()
      .then(quote => {
        this.emit(':tellWithCard', quote, skillName, quote)
      })
      .catch(err => {
        this.emit(':tellWithCard', err, skillName, err)
      })
    },

    "AMAZON.HelpIntent": function() {
      var help = "Here are some ways to activate Unofficial Chuck Norris Quotes : ";
      help += "Alexa, give me an Unofficial Chuck Norris Quote or ";
      help += "Alexa, can I hear an unofficial Chuch Norris quote";
      this.emit(':ask', help, help)
    },

    "AMAZON.StopIntent": function() {
      var stop = "Goodbye";
      this.emit(':tell', stop);
    },

    "AMAZON.CancelIntent": function() {
      var stop = "Goodbye"
      this.emit(':tell', stop);
    },

    "Unhandled": function() {
      this.emit(':ask', 'Sorry I don\'t know how to fix that', 'Help')
    }

};

exports.handler = function (event, context) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = "amzn1.ask.skill.f49d7ecc-f0ee-4f1e-8ba0-60ea71e7dd42";
    alexa.registerHandlers(handlers);
    alexa.execute();
};
