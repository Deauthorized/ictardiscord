const fs = require('fs');
const Discord = require('discord.js');
const dbp = require('better-sqlite-pool');
const Enmap = require("enmap");
const client = new Discord.Client();
client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.cooldowns = new Discord.Collection();
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
const { botmaster } = require('./config.json');
console.log("Config loaded");
console.log("Loading server specific settings, may take a bit.")
client.settings = new Enmap
({
    name: "settings",
    fetchAll: false,
    autoFetch: true,
    cloneLevel: 'deep',
    polling: true,
    pollingInterval: 60000,
    dataDir: __dirname + '/database'
});
const defaultSettings = 
{
    prefix: "=",
    guildDescription: "A very cool discord server!",
}
console.log("\nConnecting to discord...")
client.on('ready', () => 
{
    console.log("Connected as " + client.user.tag)

    client.user.setActivity({ game: { name: `your consciousness to shard ${client.shard.id}`, type: "streaming", url: "https://www.twitch.tv/dashrava"}});
})

client.on('message', async message =>
{
    if (!message.guild) return;
    const guildConf = client.settings.ensure(message.guild.id, defaultSettings);
    var prefix = guildConf.prefix
    if (!message.content.startsWith(prefix) || message.author.bot || client.user == message.author || !message.guild) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName);

    if (!client.commands.has(commandName)) return;

    try 
    {   
        if (message.channel.type == "dm")
        {
            return message.reply("DM commands are not supported.");
        }
        if (client.cooldowns.has(message.author.id))
        {
            return message.reply("You're going too fast, please slow down.");
        }
        command.execute(message, args, client, botmaster, guildConf);
        client.cooldowns.set(message.author.id);
        setTimeout(() => client.cooldowns.delete(message.author.id), 3000);
    }
    catch (error)
    {
        console.error(error);
        message.reply('Could not complete execution.'
            + ("```\n" + error + "\n```"));
    }
})


client.login(process.env.TOKEN)
