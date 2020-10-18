const Discord = require("discord.js");
const TOKEN = process.env.BOT_TOKEN;
var bot = new Discord.Client();


bot.on('ready', function() { //a ברגע שהבוט נדלק
    //a אומר אם הבוט פועל
    console.log("it's time");
});

bot.on('message', message => { //a ברגע שהודעה נשלחת
    
    if(message.author.id == "767328758762962975") {
        message.channel.send("היי סבא, שכחת לקחת את הכדורים שלך");
    }
    
});



bot.login(TOKEN); //a שולח את הקוד לדיסקורד

