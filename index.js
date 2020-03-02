const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjgzODA2NTE5NzQ1MDUyODI1.XlxVgA.HnNxmC8CFJm4Cs5rAw-BXRhqMTo';

const PREFIX = 'n!';

bot.on('ready', () =>{
    console.log("this bot is online");
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'freenitro':
            message.reply('Currently Out of Stock');
        break;


    }
})


bot.login(token);
