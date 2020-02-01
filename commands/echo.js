module.exports = {
    name: 'echo',
    description: 'echos whatever you say into a channel',
    usage: "=echo <channel_id> <message>",
    perms: "ADMINISTRATOR",
    argsMin: 2,
	execute(message, args, client) {
        channl = client.functions.get("parsechannel").getChannelFromMention(args[0], client);
        if (!channel)
        {
            return message.reply("Specified channel is not valid")
        }
            if (message.channel.guild !== channl.guild){
                message.reply("You can't send messages across discord servers.")
            }
            else
            {
                if (!channl.type === "text" || !channl.type === "news")
                {
                    return message.reply("Specified channel is not valid");
                }
                msge = args.splice(1, args.length).join(" ")
                chnl = channl.send(msge)
                    .then(() => 
                    {
                        message.reply(`Sent \`${msge}\` to \`#${channl.name}\``)
                    })
                    .catch(() =>
                    {
                        message.reply(`Failed to echo to channel #${channl.name}`)
                    })
            }
	},
};
