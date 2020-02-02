const Discord = require('discord.js');
module.exports = {
    name: 'helpembed',
        get(client)
        {
            help = String();
            const helpEmbed = new Discord.MessageEmbed()
                .setColor('#8527ce')
                .setTitle(`${client.commands.size} commands`)
                .setAuthor('Ictar', client.user.avatarURL(), 'https://discord.js.org')
                client.commands.forEach(element =>
                {
                    help += `\n${guildConf.prefix}${element.name} - ${element.description}` 
            });
            return helpEmbed;
        }
};
