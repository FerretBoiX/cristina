const Discord = require('discord.js');

const bot = new Discord.Client();

var facts = ["אני נפתחת לכל מי שרוצה",
             "אני הדלת וליעד הוא המפתח"
             ];

bot.on('ready', () => {

    console.log('I am ready!');
    bot.user.setActivity('מחפשת אהבה (ליעד)', { type: 'PLAYING' });

});

 

bot.on('message', message => {

  if(message.isMemberMentioned(bot.user)) {
  var fact = Math.floor(Math.random() * facts.length);
  message.channel.send(facts[fact]);
  }
  
});

bot.login(process.env.BOT_TOKEN);
