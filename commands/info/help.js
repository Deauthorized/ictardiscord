const Discord = require('discord.js');
module.exports = {
    name: 'help',
    description: 'gets current cmds',
    usage: '=help <optional:command>',
    category: 'info',
	execute(message, args, client, botmaster, guildConf) {
        if (args.length === 0)
        {
            helpEmbed = client.functions.get("helpembed").get(client);
            message.author.send(helpEmbed)
                .then(() =>
                {
                    if (message.channel.type === 'dm') return;
                    message.react("672696271257075753");
                })
                .catch(() =>
                {
                    message.reply("Can't seem to DM you, do you have DM's enabled in any servers i'm in?")
                })
        }
        if (args.length === 1)
        {
            if (client.commands.has(args[0]))
            {
                help = `${client.commands.get(args[0]).usage}`;
                if (help === "undefined"){help = "No usage info is specified yet"}
                const helpEmbed = new Discord.MessageEmbed()
                    .setColor('#8527ce')
                    .setAuthor('Ictar', client.user.avatarURL(), 'https://discord.js.org')
                    .addField(`Usage for ${guildConf.prefix}${args[0]}`, `${help}`)
                message.channel.send(helpEmbed);
            }
            else
            {
                message.reply("Could not find that command.")
            }
        }
	},
};
