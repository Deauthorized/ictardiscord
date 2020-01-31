const Discord = require('discord.js');
module.exports = {
	name: 'userinfo',
    description: 'get info about a specific user',
    usage: '=userinfo <mention>',
	execute(message, args, client) {
        if (message.mentions.users.first() === undefined)
        {
            return message.reply("Not a valid member.")
        }
        var usr = message.mentions.users.first()
        var gldusr = message.guild.member(usr)
        const infoEmbed = new Discord.RichEmbed()
            .setColor('#8527ce')
            .setTitle(`User Info`)
            .setThumbnail(`${usr.avatarURL}`)
            .setAuthor(`${usr.username}`, usr.avatarURL, 'https://discord.js.org')
            .addField('Tag', `<@${usr.id}>`, true)
            .addField('Register Date', usr.createdAt, true)
            .addField('Server Join Date', gldusr.joinedAt, true)
            .addField('Roles', gldusr.roles.map(role => `<@&${role.id}>, `))
        message.channel.send(infoEmbed)
	},
};
