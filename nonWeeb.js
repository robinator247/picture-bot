var Discord = require('discord.io');

var bot = new Discord.Client({
    autorun: true,
    token: "MjI5Mjg4ODIxNzA1OTMyODAw.CshFZg.KA30Q-wm9b6ORfH9-PqvIjsc19o"
});

//create array of images to send
var pictures = []; //insert imaeges into here

//Check that bot is online
bot.on('ready', function () {
    console.log(bot.username + " - (" + bot.id + ")");

//sending message    
});
bot.on('message', function (user, userID, channelID, message, rawEvent) {
    if (message === "!pictureBot"){
        console.log("pictureBot online!")
        bot.sendMessage({
            to: channelID
            , message: pictures[Math.floor(Math.random() * pictures.length)]
        });
        var interval = setInterval(function () {
            bot.sendMessage({
                to: channelID,
                message: pictures[Math.floor(Math.random() * 9)]
            });
        }, 900000); // time between each interval in milliseconds-*-
    }
});

bot.on('message', function (user, userID, channelID, message, rawEvent) {
    if (message.substring(0,4) === "!add" ){
        pictures.push(message.substring(5, message.length))
        console.log (pictures)
        bot.sendMessage({
            to: channelID
            , message: "Added image " + pictures[pictures.length - 1]
            });
        }
    }
);