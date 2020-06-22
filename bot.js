const Discord = require('discord.js');

const bot = new Discord.Client();

var facts = ["אני פרה ואני גאה",
             "שומן הוא המאכל האהוב עליי"
             ];

bot.on('ready', () => {

    console.log('I am ready!');

});

 

bot.on('message', message => {

  if(message.isMemberMentioned(bot.user)) {
  var fact = Math.floor(Math.random() * facts.length);
  message.channel.send(facts[fact]);
  }
  
});

bot.login(process.env.BOT_TOKEN);
