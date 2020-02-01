module.exports = {
    name: 'clearvc',
    description: 'removes everyone from a specified voice channel',
    usage: '=clearvc <channel_id>',
    perms: 'MOVE_MEMBERS',
    argsMin: 1,
	async execute(message, args, client) {
        toChannel = client.channels.get(args[0]);
        if (message.channel.guild !== toChannel.guild){
            message.reply("Cross server commands are disallowed.");
        }
        else if (toChannel.type != "voice")
        {
            message.reply("Specified channel is not a voice channel")
        }
        else
        {
            var discount = 0
            msage = await message.reply(`Disconnecting all users in :speaker:${toChannel.name}`);
            if (toChannel.type == "voice")
            {
                toChannel.members.forEach(element =>
                {
                    element.voice.setChannel(null);
                    discount += 1 
                });
            }
            await msage.edit(`<@${message.author.id}>, Disconnected ${discount} user(s) from :speaker:${toChannel.name}`);
        }
	},
};
