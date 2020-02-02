const Discord = require('discord.js');
module.exports = {
    name: 'helpembed',
        get(client, guildConf)
        {
            help = String();
            const helpEmbed = new Discord.MessageEmbed()
                .setColor('#8527ce')
                .setTitle(`${client.commands.size} commands`)
                .setAuthor('Ictar', client.user.avatarURL(), 'https://discord.js.org')
                for (const i of client.categories)
                {
                    h = client.commands.filter(element => element.category === i)
                    h.forEach(element => {
                        help += `\n${guildConf.prefix}${element.name} - ${element.description}` 
                    });
                    helpEmbed.addField(i.charAt(0).toUpperCase() + i.slice(1), help);
                }
            return helpEmbed;
        }
};
