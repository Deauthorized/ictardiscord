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
                    for (const x of client.commands)
                    {
                        if (x.category === i[0])
                        {
                            console.log(`${x.name} is in category ${i[0]}`)
                        }
                        console.log(`${x.name} may be in category ${i[0]}`)
                    }
                }
            return helpEmbed;
        }
};
