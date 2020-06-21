const Discord = require('discord.js');

const bot = new Discord.Client();

 

bot.on('ready', () => {

    console.log('I am ready!');

});

 

bot.on('message', message => {

 if(message.author.id == "545999659769004060") {
  message.channel.send("גם אני אוהבת אותך עדי");
 }
});

 

// THIS  MUST  BE  THIS  WAY

bot.login(process.env.BOT_TOKEN);
