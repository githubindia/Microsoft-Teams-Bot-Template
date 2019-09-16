module.exports = {
    carouselTemplate: (builder, session) => {
        var msg = new builder.Message(session);
        msg.attachmentLayout(builder.AttachmentLayout.carousel)
        msg.attachments([
            new builder.HeroCard(session)
                .title("Classic White T-Shirt")
                .subtitle("100% Soft and Luxurious Cotton")
                .text("Price is $25 and carried in sizes (S, M, L, and XL)")
                .images([builder.CardImage.create(session, 'http://petersapparel.parseapp.com/img/whiteshirt.png')])
                .buttons([
                    builder.CardAction.imBack(session, "buy classic white t-shirt", "Buy")
                ]),
            new builder.HeroCard(session)
                .title("Classic Gray T-Shirt")
                .subtitle("100% Soft and Luxurious Cotton")
                .text("Price is $25 and carried in sizes (S, M, L, and XL)")
                .images([builder.CardImage.create(session, 'http://petersapparel.parseapp.com/img/grayshirt.png')])
                .buttons([
                    builder.CardAction.imBack(session, "buy classic gray t-shirt", "Buy")
                ])
        ]);
        return msg;
    },

    cardTemplate: (builder, session) => {
        var msg = new builder.Message(session);
        msg.attachmentLayout(builder.AttachmentLayout.carousel)
        msg.addAttachment({
            "contentType": "application/vnd.microsoft.teams.card.list",
            "content": {
                "title": "Card title",
                "items": [
                    {
                        "type": "file",
                        "id": "https://contoso.sharepoint.com/teams/new/Shared%20Documents/Report.xslx",
                        "title": "Report",
                        "subtitle": "teams > new > design",
                        "tap": {
                            "type": "imBack",
                            "value": "show shirts"
                        }
                    },
                    {
                        "type": "resultItem",
                        "icon": "https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Trello-128.png",
                        "title": "Trello title",
                        "subtitle": "A Trello subtitle",
                        "tap": {
                            "type": "openUrl",
                            "value": "http://trello.com"
                        }
                    },
                    {
                        "type": "section",
                        "title": "Manager"
                    },
                    {
                        "type": "person",
                        "id": "JohnDoe@contoso.com",
                        "title": "John Doe",
                        "subtitle": "Manager",
                        "tap": {
                            "type": "imBack",
                            "value": "whois JohnDoe@contoso.com"
                        }
                    }
                ],
                "buttons": [
                    {
                        "type": "imBack",
                        "title": "Select",
                        "value": "whois"
                    }
                ]
            }
        })
        return msg;
    },
    quickRepliesTemplate: (builder, session) => {
        console.log("QUICK REPLIES");
        var msg = new builder.Message(session);
        msg.attachmentLayout(builder.AttachmentLayout.carousel)
        msg.addAttachment({
            "contentType": "application/vnd.microsoft.teams.card.list",
            "content": {
                "title": "Card title",
                "subtitle": "Card subtitle",
                "buttons": [
                    {
                        "type": "imBack",
                        "title": "Get carousel",
                        "value": "carousel"
                    },
                    {
                        "type": "imBack",
                        "title": "Get card",
                        "value": "cards"
                    }
                ]
            }
        })
        return msg;
    }
}