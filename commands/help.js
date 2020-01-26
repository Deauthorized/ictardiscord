const Discord = require('discord.js');
module.exports = {
	name: 'help',
    	description: 'gets current cmds',
    	usage: '=help <optional:command>',
	execute(message, args, client) {
        if (args.length === 0)
        {
            help = String();
            const helpEmbed = new Discord.RichEmbed()
                .setColor('#8527ce')
                .setTitle(`${client.commands.size} commands`)
                .setAuthor('Ictar', client.user.avatarURL, 'https://discord.js.org')
            client.commands.forEach(element => {
                help += `\n=${element.name} - ${element.description}` 
            });
            helpEmbed.addField("Commands", help);
            message.channel.send(helpEmbed);
        }
        if (args.length === 1)
        {
            if (client.commands.has(args[0]))
            {
                help = `${client.commands.get(args[0]).usage}`;
                if (help === "undefined"){help = "No usage info is specified yet"}
                const helpEmbed = new Discord.RichEmbed()
                    .setColor('#8527ce')
                    .setAuthor('Ictar', client.user.avatarURL, 'https://discord.js.org')
                    .addField(`Usage for =${args[0]}`, `${help}`)
                message.channel.send(helpEmbed);
            }
            else
            {
                message.reply("Could not find that command.")
            }
        }
	},
};
