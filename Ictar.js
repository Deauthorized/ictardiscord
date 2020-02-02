const fs = require('fs');
const Discord = require('discord.js');
const dbp = require('better-sqlite-pool');
const Enmap = require("enmap");
const client = new Discord.Client();
client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.functions = new Discord.Collection();
client.cooldowns = new Discord.Collection();
client.categories = new Discord.Collection();
const commandDir = fs.readdirSync(__dirname + '/commands')
const eventFiles = fs.readdirSync(__dirname + '/events').filter(file => file.endsWith('.js'));
const funcFiles = fs.readdirSync(__dirname + '/functions').filter(file => file.endsWith('.js'));
for (const folder of commandDir) {
    try
    {
        var fileArray = fs.readdirSync(__dirname + `/commands/${folder}`).filter(file => file.endsWith('.js'))
        for (var cmd of fileArray)
        {
            const command = require(__dirname + `/commands/${folder}/${cmd}`)
            client.commands.set(command.name, command);
            client.categories.set(command.name, folder);
        }
    }
    catch (error)
    {
        console.log(`ERROR: Failed to load ${folder}!: ${error}`);
    }
}
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
for (const file of funcFiles) {
    try
    {
	    const command = require(`./functions/${file}`);
        client.functions.set(command.name, command);
    }
    catch (error)
    {
        console.log(`ERROR: Failed to load ${file}!: ${error}`);
    }
}
const { botmaster } = require('./config.json');
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
    client.user.setActivity(`=help | shard ${client.shard.ids}`, { url: 'https://www.twitch.tv/dashrava', type: 'STREAMING' });
    process.send('ready');
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
        if (command.argsMin > args.length || !command.argsMin === undefined)
        {
            return message.reply(`Too few arguments, the least required is \`${command.argsMin}\``)
        }
        if (!message.guild.member(message.author).hasPermission(command.perms) || !command.perms === undefined)
        {
            return message.reply(`You\'re missing the following permission: \`${command.perms}\``);
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
