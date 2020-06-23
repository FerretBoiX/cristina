const Discord = require('discord.js');

const bot = new Discord.Client();

var facts = ["ג'סי הכוסון",
             "ג'סי תעשה לי ילד",
             "או אמ ג'י ג'סי תעשה אותי",
             "*קולות אנדרהיל*",
             "ג'סי שערות בחזה",
             "ג'סי בוא למיטה"
             ];

bot.on('ready', () => {

    console.log('I am ready!');
    bot.user.setActivity("ג'סי אנדרהיל", { type: 'PLAYING' });

});

 

bot.on('message', message => {

  if(message.isMemberMentioned(bot.user)) {
  var fact = Math.floor(Math.random() * facts.length);
  message.channel.send(facts[fact]);
  }
  else if(message.content.startsWith("!קריס")) {
    message.channel.send(message.content.substring(6));
    message.delete()
  }
  
});

bot.login(process.env.BOT_TOKEN);
