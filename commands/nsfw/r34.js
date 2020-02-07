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
        var query = args.join(" ").replace(" ", "+")
        rq.get(`https://r34-json-api.herokuapp.com/posts?limit=1&tags=${query}`, {json: true}, (e,r,body) =>
            {
                if (e) { return console.log(e); }
                for (i of blacklistedtags)
                {
                    if (body[0].tags.includes(i))
                    {
                        return message.channel.send(":warning: Requested post has content which is a violation of discords TOS, it will not be shown.")
                    }
                }
                const nsfwEmbed = new Discord.MessageEmbed()
                    .setColor('#8527ce')
                    .setTitle(`rule34.xxx | score: ${rq[0].score}`)
                    .setImage(rq[0].file_url({ dynamic: true, size:1024 }))
                message.channel.send(nsfwEmbed)
            })
	},
};
