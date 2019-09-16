var botTemplate = require('./botTemplate');

module.exports = {
    getResponse: (inMemoryBotStorage, connector, builder) => {

        // Creating UniversalBot Object and sending starting message.
        var bot = new builder.UniversalBot(connector, function (session) {
            session.send("Hi... We sell shirts. Say 'show shirts' to see our products.");
        }).set('storage', inMemoryBotStorage);

        // Carousel Response
        bot.dialog('carouselResponse', function (session) {
            var msg = botTemplate.carouselTemplate(builder, session);
            session.send(msg).endDialog();
        }).triggerAction({ matches: /^(carousel)/i });

        // Card response
        bot.dialog('cardResponse', function (session) {
            var msg = botTemplate.cardTemplate(builder, session);
            session.send(msg).endDialog();
        }).triggerAction({ matches: /^(card)/i });

        // quick replies
        bot.dialog('quickReplies', function (session) {
            var msg = botTemplate.quickRepliesTemplate(builder, session);
            session.send(msg).endDialog();
        }).triggerAction({ matches: /^(quick replies)/i });
    }
}