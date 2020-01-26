const Discord = require('discord.js');
module.exports = {
	name: 'svrcfg',
    description: 'server config command',
    usage: '=svrcfg <optional:set> <key> <value>',
	execute(message, args, client, botmaster, guildConf) {
        if (!message.member.hasPermission('ADMINISTRATOR', false, false))
        {
            return message.reply("You can't do this.");
        }
        if (args.length === 0)
        {
            help = String();
            const cfgEmbed = new Discord.RichEmbed()
                .setColor('#8527ce')
                .setTitle(`${message.guild.name} Config settings`)
                .setAuthor('Ictar', client.user.avatarURL, 'https://discord.js.org')
                .addField('guildDescription', `Current value: ${guildConf.guildDescription}`)
            message.channel.send(cfgEmbed)
        }
        if (args.length > 0)
        {
            if (args[0] === "set")
            {
                const [none, prop, ...value] = args;
                if(!client.settings.has(message.guild.id, prop))
                {
                    return message.reply("Not a valid key.");
                }
                client.settings.set(message.guild.id, value.join(" "), prop)
                message.reply(`Successfully changed config: \`${prop}\``)
            }
        }
	},
};
