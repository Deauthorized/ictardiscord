const Discord = require('discord.js');
module.exports = {
    name: 'avatar',
    description: 'get a users avatar',
    usage: '=avatar <mention>',
	execute(message, args, client) {
        if (args[0] === undefined)
        {
            var usr = message.author
        }
        else
        {
            var usr = client.functions.get("parsemention").getUserFromMention(args[0], client);
        }
        var gldusr = message.guild.member(usr)
        if (usr === undefined)
        {
            return message.reply("Could not find specified user.")
        }
        const infoEmbed = new Discord.MessageEmbed()
            .setColor('#8527ce')
            .setTitle(`Avatar`)
            .setAuthor(`${usr.username}`, usr.avatarURL({ dynamic: true }), usr.avatarURL({ dynamic: true }))
            .setImage(usr.avatarURL({ dynamic: true, size:1024 }))
        message.channel.send(infoEmbed)
	},
};
