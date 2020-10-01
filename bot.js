const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.on("listening", function() {
  console.log("ok, server is running");
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const TOKEN = process.env.TOKEN;

var bot = new Discord.Client();
var times = 1;

bot.on('ready', function() {
    // Now, you can use the message variable inside
    console.log("it's time")
  
      var interval = setInterval (async function () {
          // use the message's channel (TextChannel) to send a new message
        //let userGet = await bot.fetchUser("359969081971179521");
        //if(userGet.presence.status == "offline") {
            bot.channels.get("439021446530990081").send(times).then(m => m.delete());
            times += 1; 
        //}
      }, 61 * 1000);  
});



bot.login(TOKEN);

const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.on("listening", function() {
  console.log("ok, server is running");
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const TOKEN = process.env.TOKEN;

var bot = new Discord.Client();
var times = 1;

bot.on('ready', function() {
    // Now, you can use the message variable inside
    console.log("it's time")
  
      var interval = setInterval (async function () {
          // use the message's channel (TextChannel) to send a new message
        //let userGet = await bot.fetchUser("359969081971179521");
        //if(userGet.presence.status == "offline") {
            bot.channels.get("439021446530990081").send(times).then(m => m.delete());
            times += 1; 
        //}
      }, 61 * 1000);  
});



bot.login(TOKEN);

