const Discord = require('discord.js');
module.exports = {
    name: 'avatar',
    description: 'get a users avatar',
    usage: '=avatar <mention>',
	execute(message, args, client) {
        if (message.mentions.users.first() === undefined)
        {
            var usr = message.author
        }
        else
        {
            var usr = message.mentions.users.first()
        }
        var gldusr = message.guild.member(usr)
        const infoEmbed = new Discord.MessageEmbed()
            .setColor('#8527ce')
            .setTitle(`Avatar`)
            .setAuthor(`${usr.username}`, usr.avatarURL({ dynamic: true }), usr.avatarURL({ dynamic: true }))
            .setImage(usr.avatarURL({ dynamic: true, size:1024 }))
        message.channel.send(infoEmbed)
	},
};
