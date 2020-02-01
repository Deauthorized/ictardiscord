const Discord = require('discord.js');
module.exports = {
    name: 'avatar',
    description: 'get a users avatar',
    usage: '=avatar <mention>',
	execute(message, args, client) {
        function getUserFromMention(mention) {
            if (!mention) return;
        
            if (mention.startsWith('<@') && mention.endsWith('>')) {
                mention = mention.slice(2, -1);
        
                if (mention.startsWith('!')) {
                    mention = mention.slice(1);
                }
        
                return client.users.get(mention);
            }
            else
            {
                return client.users.get(mention);
            }
        }
        if (args[0] === undefined)
        {
            var usr = message.author
        }
        else
        {
            var usr = getUserFromMention(args[0])
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
