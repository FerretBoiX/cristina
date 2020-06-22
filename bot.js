const Discord = require('discord.js');

const bot = new Discord.Client();

var facts = ["אני השחר העולה",
             "אני ובוכריס לא חברים!",
             "סתיו הוא ילד מעצבן",
             "*קולות שוקולד*"
             ];

bot.on('ready', () => {

    console.log('I am ready!');
    bot.user.setActivity('ללא כלוסטרול', { type: 'PLAYING' });

});

 

bot.on('message', message => {

  if(message.isMemberMentioned(bot.user)) {
  var fact = Math.floor(Math.random() * facts.length);
  message.channel.send(facts[fact]);
  }
  
});

bot.login(process.env.BOT_TOKEN);
