module.exports = {
	name: 'FindUser',
	description: 'tries to find and return a user object via any method',
	execute(client, guildArg, args) {
        if (guildArg.members.filter(m => m.tag.includes(args[0])))
        {
            return m;
		}
		if (guildArg.members.filter(m => m.id.includes(args[0])))
        {
            return m;
		}
		else
		{
			return undefined;
		}
	},
};
