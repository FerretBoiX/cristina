const Discord = require('discord.js');

const bot = new Discord.Client();

var facts = ["אילי הזה חושב שהוא גבר",
             "אילי ברנשטיין חושב שהוא מגניב",
             "אילי ברנשטיין",
             "ברנשטיין אילי",
             "מי הוא חושב שהוא האילי ברנשטיין הזה"
             ];

bot.on('ready', () => {

    console.log('I am ready!');
    bot.user.setActivity('אילי ברנשטיין', { type: 'PLAYING' });

});

 

bot.on('message', message => {

  if(message.isMemberMentioned(bot.user)) {
  var fact = Math.floor(Math.random() * facts.length);
  message.channel.send(facts[fact]);
  }
  
});

bot.login(process.env.BOT_TOKEN);
