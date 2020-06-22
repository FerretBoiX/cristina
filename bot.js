const Discord = require('discord.js');

const bot = new Discord.Client();

var facts = ["אני נפתחת לכל מי שרוצה",
             "אני הדלת וליעד הוא המפתח"
             ];

bot.on('ready', () => {

    console.log('I am ready!');
    bot.user.setActivity('מחפשת אהבה (עדי)', { type: 'PLAYING' });

});

 

bot.on('message', message => {

  if(message.content.startsWith("!דור")) {
  message.channel.send(message.content.substring(5));
  message.delete()
  }
  else if(message.isMemberMentioned(bot.user)) {
  var fact = Math.floor(Math.random() * facts.length);
  message.channel.send(facts[fact]);
  }
  
});

 

// THIS  MUST  BE  THIS  WAY

bot.login(process.env.BOT_TOKEN);
