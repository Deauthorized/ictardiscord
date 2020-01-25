module.exports = {
	name: 'moveall',
	description: 'moves everyone to a single voice channel',
	async execute(message, args, client) {
        if (!message.member.hasPermission('ADMINISTRATOR', false, false))
        {
            message.reply("You can't do this.");
        }
        else
        {   
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
                var movecount = 0
                msage = await message.reply(`Moving everyone to :speaker:${toChannel.name}`);
                message.guild.channels.forEach(element =>
                {
                    if (element.type == "voice")
                    {
                        element.members.forEach(element =>
                        {
                            element.setVoiceChannel(toChannel);
                            movecount += 1 
                        });
                    }
                });
                await msage.edit(`<@${message.author.id}>, Moved ${movecount} user(s) to :speaker:${toChannel.name}`);
            }
        }
	},
};
