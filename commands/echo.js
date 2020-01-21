module.exports = {
	name: 'echo',
	description: 'echos whatever you say into a channel, usage: =echo <channel-id> <message>',
	execute(message, args, client) {
        if (!message.member.hasPermission('ADMINISTRATOR', false, false))
        {
            message.reply("You can't do this.");
        }
        else
        {
            if (message.channel.guild !== channel.guild){
                message.reply("You can't send messages across discord servers.")
            }
            else
            {
                channel = args[0]
                msge = args.splice(1, args.length).join(" ")
                channel = client.channels.get(channel)
            }
        }
	},
};
