module.exports = {
    name: 'echo',
    description: 'echos whatever you say into a channel',
    usage: "=echo <channel_id> <message>",
    perms: "ADMINISTRATOR",
    argsMin: 2,
	execute(message, args, client) {
        channel = args[0]
            if (message.channel.guild !== client.channels.get(channel).guild){
                message.reply("You can't send messages across discord servers.")
            }
            else
            {
                if (args[0] == undefined){channel = message.channel}
                msge = args.splice(1, args.length).join(" ")
                chnl = client.channels.get(channel).send(msge)
            }
	},
};
