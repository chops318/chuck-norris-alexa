var Alexa = require('alexa-sdk');
var data = require("./data");

const skillName = "Unnofficial Chuck Norris Quotes";

var handlers = {

    "LanguageIntent": function () {
      data.quote()
      .then(quote => {
        this.emit(':tellWithCard', quote, skillName, quote)
      })
    },

    "AboutIntent": function () {
        var speechOutput = "Chops made this for fun and a hoodie";
        this.emit(':tellWithCard', speechOutput, skillName, speechOutput);
    },


    "AMAZON.StopIntent": function () {
        var speechOutput = "Goodbye";
        this.emit(':tell', speechOutput);
    },

    "AMAZON.CancelIntent": function () {
        var speechOutput = "Goodbye";
        this.emit(':tell', speechOutput);
    },

    "LaunchRequest": function () {
        var speechText = "";
        speechText += "Welcome to " + skillName + ".  ";
        speechText += "You can ask for a joke by saying give me a chuck norris joke.  ";
        var repromptText = "Or you can ask what would chuck norris do";
        this.emit(':ask', speechText, repromptText);
    },

    "Unhandled": function() {
      this.emit(':ask', 'Help', 'Help')
    }

};

exports.handler = function (event, context) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = "amzn1.ask.skill.f49d7ecc-f0ee-4f1e-8ba0-60ea71e7dd42";
    alexa.registerHandlers(handlers);
    alexa.execute();
};
