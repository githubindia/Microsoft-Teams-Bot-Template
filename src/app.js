'use strict';

var express = require('express');
var app = express();

// Adding a bot to our app
var bot = require('./bot');
bot.setup(app);

// Deciding which port to use
var port = process.env.PORT || 3333;

// Start our nodejs app
app.listen(port, function() {
    console.log(`App started listening on port ${port}`);
});
