const { Client, MessageEmbed, Intents } = require('discord.js');
const fs = require('fs');
const request = require('request');
const Jimp = require('jimp');
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES] });
const token = 'TOKEN';
const Prefix = '+';

bot.on('ready', () => {
    console.log('Bot Online');
})

bot.on('messageCreate', message => {
    let args = message.content.substring(Prefix.length).split(" ");
    if (!message.content.startsWith(Prefix)) return;

    switch(args[0]) {
        case 'spam':
            if (args[1] != undefined) {
                if (args[2] != undefined && args[2] <= 30) {
                    message.channel.send(`VC spamming <@${message.mentions.users.first().id}> for ${args[2]} seconds`);
                    spam(message.mentions.members.first(), args[2]);
                } else {
                    message.channel.send(`VC spamming <@${message.mentions.users.first().id}> for 3 seconds`);
                    spam(message.mentions.members.first(), 3);
                } 
            } else {
                message.channel.send(`<@${message.author.id}>, please indicate who you want to annoy the f*ck out of.`)
            }
        break;
    }
})

function spam(member, time) {
    const channels = message.guild.channels.filter(c => c.parentID === '497908108803440653' && c.type === 'voice');
    const c1 = channels[0];
    const c2 = channels[1];
    let t = Date.now();

    while (t - Date.now() < time * 1000) {
        setTimeout(_switch(member, c1, c2), 100);
    }
}

function _switch(member, c1, c2) {
    let curId = member.voice.channel.id;
    if (curId === c1.id) {
        member.voice.setChannel(c2);
    } else {
        member.voice.setChannel(c1);
    }
}   

bot.login(token);
