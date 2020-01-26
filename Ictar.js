const fs = require('fs');
const Discord = require('discord.js');
const db = require('better-sqlite3');
const dbp = require('better-sqlite-pool');
const Enmap = require("enmap");
const client = new Discord.Client();
client.commands = new Discord.Collection();
client.events = new Discord.Collection();
console.log("Loading commands");
const commandFiles = fs.readdirSync(__dirname + '/commands').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync(__dirname + '/events').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    try
    {
	    const command = require(`./commands/${file}`);
        client.commands.set(command.name, command);
    }
    catch (error)
    {
        console.log(`ERROR: Failed to load ${file}!: ${error}`);
    }
}
console.log("Loading events");
for (const file of eventFiles) {
    try
    {
	    const command = require(`./events/${file}`);
        client.events.set(command.name, command);
        client.events.get(command.name).execute(client);
    }
    catch (error)
    {
        console.log(`ERROR: Failed to load ${file}!: ${error}`);
    }
}
console.log("Loading config");
const { prefix, botmaster } = require('./config.json');
console.log("Config loaded"
    + ("\n\nPrefix: " + prefix));
console.log("Loading server specific settings, may take a bit.")
client.settings = new Enmap
({
    name: "settings",
    fetchAll: false,
    autoFetch: true,
    cloneLevel: 'deep',
    polling: true,
    pollingInterval: 60000
});
const defaultSettings = 
{
    prefix: "=",
    guildDescription: "A very cool discord server!"
}
console.log("\nConnecting to discord...")
client.on('ready', () => 
{
    console.log("Connected as " + client.user.tag)

    client.user.setPresence({ game: { name: `your consciousness to shard ${client.shard.id}`, type: "streaming", url: "https://www.twitch.tv/dashrava"}});
})


client.on('message', message =>
{
    if (!message.content.startsWith(prefix) || message.author.bot || client.user == message.author || !message.guild) return;
    const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
    if (!client.commands.has(command)) return;
    const guildConf = client.settings.ensure(message.guild.id, defaultSettings);

    try 
    {   
        if (message.channel.type == "dm")
        {
            message.reply("DM commands are not supported.")
        }
        else
        {
            client.commands.get(command).execute(message, args, client, botmaster, guildConf);
        }
    }
    catch (error)
    {
        console.error(error);
        message.reply('Could not complete execution.'
            + ("```\n" + error + "\n```"));
    }
})


client.login(process.env.TOKEN)
