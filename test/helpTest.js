'use strict';

const index = require('../index');
const expect = require('chai').expect;

const context = require('aws-lambda-mock-context');
const ctx = context();

describe('Testing LaunchRequest', function() {
  var speechResponse = null;
  var speechError = null;
  before(function(done) {
      index.handler({
        "session": {
          "sessionId": "SessionId.154291c5-a13f-4e7a-ab5a-707ca12501a8",
          "application": {
            "applicationId": "amzn1.ask.skill.f49d7ecc-f0ee-4f1e-8ba0-60ea71e7dd42"
          },
          "attributes": {},
          "user": {
            "userId": null
          },
          "new": true
        },
        "request": {
          "type": "IntentRequest",
          "requestId": "EdwRequestId.474c15c8-14d2-4a77-a4ce-11728a114af7",
          "timestamp": "2016-07-05T22:02:01Z",
          "intent": {
            "name": "AMAZON.HelpIntent"
          },
          "locale": "en-US"
        },
        "version": "1.0"
      }, ctx)

      ctx.Promise
      .then(resp => {
        speechResponse = resp;
        done();
      })
      .catch(err => {
        speechError = err;
        done();
      })
  })

  it('should respond with a quote', function() {
    expect(speechError).to.be.null;
    expect(speechResponse.response.outputSpeech.ssml).to.eql('<speak> Here are some ways to activate Unofficial Chuck Norris Quotes : Alexa, give me an Unofficial Chuck Norris Quote or Alexa, can I hear an unofficial Chuch Norris quote </speak>')
  })
})
