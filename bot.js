const Discord = require('discord.js');

const bot = new Discord.Client();

var facts = ["מה קשור",
             "סוקה בלאט",
             "אידי נחוי"];

bot.on('ready', () => {

    console.log('I am ready!');

});

 

bot.on('message', message => {

 if(message.author.id == "545999659769004060") {
  message.channel.send("גם אני אוהבת אותך עדי");
  }
 else if(message.isMemberMentioned(bot.user)) {
  var fact = Math.floor(Math.random() * facts.length);
  message.channel.send(facts[fact]);
  }
});

 

// THIS  MUST  BE  THIS  WAY

bot.login(process.env.BOT_TOKEN);
