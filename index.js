const Discord = require('discord.js')
const client = new Discord.Client()
const config = require("./config.json");

client.on("ready", () => {
    console.log("Program is ready!\n \n|-|-|-|\nAuthor - gitjimi\n|-|-|-|")
    client.user.setActivity(`${config.prefix}help to get started`,{type:"WATCHING"});
 });

 client.on('message', message => {
    let messageArray = message.content.split(" ");
    let args1 = messageArray.slice(1);

    if (message.content.startsWith(`${config.prefix}everyone-spam`)) {
        for (let i = 0; i < 1000; i++) {
            message.channel.send("@everyone " + i + "/1000.")
          }

    }
  });

  client.on('message', message => {
    let messageArray = message.content.split(" ");
    let args1 = messageArray.slice(1);

    if (message.content.startsWith(`${config.prefix}spam`)) {
        for (let i = 0; i < 1000; i++) {
            message.channel.send(`${args1} ` + i + "/1000.")
          }

    }
  });

  client.on('message', message => {
    let messageArray = message.content.split(" ");
    let args1 = messageArray.slice(1);

    if (message.content.startsWith(`${config.prefix}help`)) {
        let commandlistembed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle("Command list...")
        .setDescription(`\`${config.prefix}everyone-spam\`\n\`${config.prefix}spam <message>\`\n\`${config.prefix}help\``)
        .setFooter("Author - gitjimi")

        message.channel.send(commandlistembed)
    }
  });


 client.login(config.token);