'use strict';

module.exports.setup = function (app) {
  var builder = require('botbuilder');
  var teams = require('botbuilder-teams');
  var config = require('config');
  var request = require('request');

  var botResponse = require('./bot-responses');

  console.log(config.has("bot.appId"));
  if (!config.has("bot.appId")) {
    process.env.NODE_CONFIG_DIR = "../config";
    delete require.cache[require.resolve('config')];
    config = require('config');
  }

  // Create a connector to handle the conversations
  var connector = new teams.TeamsChatConnector({
    appId: config.get("bot.appId"),
    appPassword: config.get("bot.appPassword")
  });

  var inMemoryBotStorage = new builder.MemoryBotStorage();

  app.post('/api/messages', connector.listen());

  // Getting response according to message.
  botResponse.getResponse(inMemoryBotStorage, connector, builder);

  // Exporting connector
  module.exports.connector = connector;
}
