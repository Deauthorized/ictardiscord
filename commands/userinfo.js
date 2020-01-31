const Discord = require('discord.js');
module.exports = {
    name: 'userinfo',
    description: 'get info about a specific user',
    usage: '=userinfo <mention>',
	execute(message, args, client) {
        if (message.mentions.users.first() === undefined)
        {
            if (message.guild.member(args[0]) & client.fetchUser(args[0]))
            {
                var usr = client.fetchUser(args[0])
                var gldusr = message.guild.member(usr) 
            }
        }
        else if (message.mentions.users.first() !== undefined)
        {
            var usr = message.mentions.users.first()
            var gldusr = message.guild.member(usr)
        }
        else
        {
            return message.reply("Not a valid user.");
        }
        const infoEmbed = new Discord.RichEmbed()
            .setColor('#8527ce')
            .setTitle(`User Info`)
            .setThumbnail(`${usr.avatarURL}`)
            .setAuthor(`${usr.username}`, usr.avatarURL, 'https://discord.js.org')
            .addField('Tag', `<@${usr.id}>`, true)
            .addField('Register Date', usr.createdAt, true)
            .addField('Server Join Date', gldusr.joinedAt, true)
            .addField(`Roles (${gldusr.roles.size})`, gldusr.roles.map(role => `<@&${role.id}>`).join(" "))
        message.channel.send(infoEmbed)
	},
};
