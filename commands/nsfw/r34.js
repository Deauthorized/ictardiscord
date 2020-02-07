const rq = require('request');
const Discord = require('discord.js');
const blacklistedtags = 
[
    "cub",
    "loli",
    "lolicon",
    "shota",
    "shotacon",
    "guro",
    "gore",
    "underage"
]
module.exports = {
    name: 'r34',
    description: 'retrieve a post from rule34',
    usage: '=nsfw <query>',
    category: 'nsfw',
    nsfw: true,
	execute(message, args, client) {
        var query = args.join(" ")
        message.channel.startTyping();
        rq.get(`https://r34-json-api.herokuapp.com/posts?limit=1&tags=${query}`, {json: true}, (e,r,body) =>
            {
                try{
                    if (e) { return console.log(e); }
                    for (i of blacklistedtags)
                    {
                        if (body[0].tags.includes(i) || query.includes(i))
                        {
                            message.channel.stopTyping();
                            return message.channel.send(":warning: `In order to comply with discords guidelines regarding NSFW content, this post will not be shown.`")
                        }
                    }
                    const nsfwEmbed = new Discord.MessageEmbed()
                        .setColor('#8527ce')
                        .setTitle(`rule34.xxx | score: ${body[0].score}`)
                        .setImage(body[0].file_url)
                        .setFooter(`Post URL: ${body[0].source}`)
                    message.channel.stopTyping();
                    message.channel.send(nsfwEmbed)
                }
                catch (er)
                {
                    message.channel.stopTyping();
                    return message.channel.send(`No results found for \`${query}\``);
                }
            })
	},
};
