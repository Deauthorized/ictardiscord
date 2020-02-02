const Discord = require('discord.js');
const pm2 = require("pm2");
const promises = 
[
    client.shard.fetchClientValues('guilds.size'),
    client.shard.fetchClientValues('users.size'),
    client.shard.fetchClientValues('channels.size')
]
module.exports = {
    name: 'stats',
    description: 'bot stats',
    usage: '=stats',
    async execute(message, args, client) {
        const infoEmbed = new Discord.MessageEmbed()
        .setColor('#8527ce')
        .setTitle(`Ictar Stats`)
        .setThumbnail(`${client.user.avatarURL()}`)
        .setAuthor(`${client.user.tag}`, client.user.avatarURL(), 'https://discord.js.org')
        Promise.all(promises)
            .then(results =>
                {
                    infoEmbed.addField('Servers', `${results[0].reduce((prev, guildCount) => prev + guildCount, 0)} servers`, true)
                    infoEmbed.addField('Users', `${results[1].reduce((prev, usrCount) => prev + usrCount, 0)} users`, true)
                    infoEmbed.addField('Channels', `${results[2].reduce((prev, chnlCount) => prev + chnlCount, 0)} channels`, true)
                })

        message.channel.send(infoEmbed) 
	},
};
