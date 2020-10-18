const Discord = require("discord.js");
const TOKEN = process.env.BOT_TOKEN;
var bot = new Discord.Client();


bot.on('ready', function() { //a ברגע שהבוט נדלק
    //a אומר אם הבוט פועל
    console.log("it's time");
});

bot.on('message', message => { //a ברגע שהודעה נשלחת
    
    if(message.content.startsWith("אני")) { //a אם ההודעה מתחילה במילה אני
        message.channel.send("היי " + message.content.substring(4) + ", אני אבא"); //a שולח משהו לחדר של ההודעה
    }
    
});



bot.login(TOKEN); //a שולח את הקוד לדיסקורד

