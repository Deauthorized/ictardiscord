module.exports = {
    name: 'echo',
    description: 'echos whatever you say into a channel',
    usage: "=echo <channel_id> <message>",
    perms: "ADMINISTRATOR",
    argsMin: 2,
	execute(message, args, client) {
        if (!client.channels.get(args[0]))
        {
            return message.reply("Specified channel is not valid")
        }
        channel = args[0]
            if (message.channel.guild !== client.channels.get(channel).guild){
                message.reply("You can't send messages across discord servers.")
            }
            else
            {
                if (!client.channels.get(channel).type === "text" || !client.channels.get(channel).type === "news")
                {
                    return message.reply("Specified channel is not valid")
                }
                msge = args.splice(1, args.length).join(" ")
                chnl = client.channels.get(channel).send(msge)
                    .then(() => 
                    {
                        message.reply(`Sent \`${msge}\` to \`#${client.channels.get(channel).name}\``)
                    })
                    .catch(() =>
                    {
                        message.reply(`Failed to echo to channel #${client.channels.get(channel)}`)
                    })
            }
	},
};
