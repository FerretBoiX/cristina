const Discord = require('discord.js');

const bot = new Discord.Client();

var facts = ["ג'סי הכוסון",
             "ג'סי תעשה לי ילד",
             "או אמ ג'י ג'סי תעשה אותי",
             "*קולות אנדרהיל*",
             "ג'סי שערות בחזה",
             "ג'סי בוא למיטה",
             "שופל TV לנצח",
             "ג'סי אנדרהיל הזה חושב שהוא גבר"
             ];

var pipel = ["264465468268609537",
             "359969081971179521",
             "724607469627899985"
             ];

bot.on('ready', () => {

    console.log('I am ready!');
    bot.user.setActivity("אח של אלקסה", { type: 'PLAYING' });

});

 

bot.on('message', message => {
\\
\\  if(message.isMemberMentioned(bot.user)) {
\\  var fact = Math.floor(Math.random() * facts.length);
\\  message.channel.send(facts[fact]);
\\  }
  if(message.content.startsWith("!p ")) { \\ && pipel.includes(message.author.id)) {
  message.channel.send("Alexa, Play" + message.content.substring(4));
  message.delete();
  }
});

bot.login(process.env.BOT_TOKEN);
