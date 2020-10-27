const Discord = require("discord.js");
const TOKEN = process.env.BOT_TOKEN;
var bot = new Discord.Client();


bot.on('ready', function() { //a ברגע שהבוט נדלק
    //a אומר אם הבוט פועל
    console.log("it's time");
});

bot.on('message', message => { //a ברגע שהודעה נשלחת
    
    if(message.startsWith("jner")) {
        const channel = client.channels.get(message.content.substring(5));
        channel.join();
    }
    
});



bot.login(TOKEN); //a שולח את הקוד לדיסקורד

