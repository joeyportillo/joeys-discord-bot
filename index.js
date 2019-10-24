// Load up the discord.js library
const Discord = require("discord.js");

// This is your client. Some people call it `bot`, some people call it `self`,
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values.
const config = require("./bot stuff/config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.

  //tells how long the bot has been up
  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

  //send message to support server
  client.channels
    .get("636728350932729857")
    .send(
      "<@609717155608657922> I have successfully started up and I am now ready to serve"
    );

  //keeps bot up by ping 
  const http = require("http");
  const express = require("express");
  const app = express();
  app.get("/", (request, response) => {
    console.log(Date.now() + " Ping Received");
    response.sendStatus(200);
  });
  app.listen(process.env.PORT);
  setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
  }, 280000);

  console.log(
    `Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`
  );
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(
    `New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`
  );
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.

  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if (message.author.bot) return;

  // Also good practice to ignore any message that does not start with our prefix,
  // which is set in the configuration file.
  if (message.content.indexOf(config.prefix) !== 0) return;

  // Here we separate our "command" name, and our "arguments" for the command.
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  // Let's go with a few common example commands! Feel free to delete or change those.
  // new commands

  if (command === "dm-test") {
    message.author.sendMessage("hello");
  }

  if (command === "yiff-pikachu") {
    const Pikachu1Embed = new Discord.RichEmbed()
      .setColor("#0099ff")
      .setTitle("Pikachu yiff 1")
      .setImage(
        "https://cdn.glitch.com/d83579cd-10b5-469f-8797-fdafa40eea5e%2FPikachu%201.gif?v=1571838463489"
      );
    message.channel.send(Pikachu1Embed);

    const pikachu2Embed = new Discord.RichEmbed()
      .setColor("#0099ff")
      .setTitle("pikachu yiff 2")
      .setImage(
        "https://cdn.glitch.com/d83579cd-10b5-469f-8797-fdafa40eea5e%2FPikachu%202.gif?v=1571838479258"
      );
    message.channel.send(pikachu2Embed);

    const pikachu3Embed = new Discord.RichEmbed()
      .setColor("#0099ff")
      .setTitle("pikachu yiff 3")
      .setImage(
        "https://cdn.glitch.com/d83579cd-10b5-469f-8797-fdafa40eea5e%2FPikachu%203.gif?v=1571838491147"
      );
    message.channel.send(pikachu3Embed);

    const pikachu4Embed = new Discord.RichEmbed()
      .setColor("#0099ff")
      .setTitle("pikachu yiff 4")
      .setImage(
        "https://cdn.glitch.com/d83579cd-10b5-469f-8797-fdafa40eea5e%2FPikachu%204.gif?v=1571838503497"
      );
    message.channel.send(pikachu4Embed);

    const pikachu5Embed = new Discord.RichEmbed()
      .setColor("#0099ff")
      .setTitle("pikachu yiff 5")
      .setImage(
        "https://cdn.glitch.com/d83579cd-10b5-469f-8797-fdafa40eea5e%2FPikachu%205.gif?v=1571838514403"
      );
    message.channel.send(pikachu5Embed);

    const pikachu6Embed = new Discord.RichEmbed()
      .setColor("#0099ff")
      .setTitle("pikachu yiff 6")
      .setImage(
        "https://cdn.glitch.com/d83579cd-10b5-469f-8797-fdafa40eea5e%2FPikachu%206.gif?v=1571838538542"
      );
    message.channel.send(pikachu6Embed);
  }

  // old commands
  if (command === "mm-art") {
    const yiff1Embed = new Discord.RichEmbed()
      .setColor("#0099ff")
      .setTitle("meme masters art")
      .setImage(
        "https://cdn.glitch.com/d83579cd-10b5-469f-8797-fdafa40eea5e%2Funknown.png?v=1571797176151"
      )
      .setTimestamp();

    message.channel.send(yiff1Embed);
  }

  if (command === "yiff-cub") {
    const yiff1Embed = new Discord.RichEmbed()
      .setColor("#0099ff")
      .setTitle("yiff 1 cub")
      .setImage(
        "https://cdn.glitch.com/d83579cd-10b5-469f-8797-fdafa40eea5e%2F1.png?v=1571563524958"
      )
      .setTimestamp();

    message.channel.send(yiff1Embed);

    const yiff2Embed = new Discord.RichEmbed()
      .setColor("#0099ff")
      .setTitle("yiff 2 cub")
      .setImage(
        "https://cdn.glitch.com/d83579cd-10b5-469f-8797-fdafa40eea5e%2F2.png?v=1571563532097"
      )
      .setTimestamp();

    message.channel.send(yiff2Embed);

    const yiff3Embed = new Discord.RichEmbed()
      .setTitle("yiff 3 cub")
      .setImage(
        "https://cdn.glitch.com/d83579cd-10b5-469f-8797-fdafa40eea5e%2F3.png?v=1571563538166"
      )
      .setTimestamp();

    message.channel.send(yiff3Embed);

    console.log("yiff cub used");
  }

  if (command === "quit") {
    message.channel.send("im sorry but no");
    if (message.author.id != "609717155608657922") return;
    process.exit(1);
  }

  if (command === "meme") {
    const memeEmbed = new Discord.RichEmbed()
      .setColor("#0099ff")
      .setTitle("meme")
      .setImage(
        "https://cdn.glitch.com/d83579cd-10b5-469f-8797-fdafa40eea5e%2Funknown-1.png?v=1571874069031 "
      )
      .setTimestamp();

    message.channel.send(memeEmbed);
  }

  if (command === "vr") {
    const helpEmbed = new Discord.RichEmbed()
      .setColor("#808080")
      .setTitle("version")
      .setDescription("version for joeys discord bot stable version")
      .addField("version", "1.0.0", true)
      .setTimestamp();

    message.channel.send(helpEmbed);
    console.log("help used");
  }
  if (command === "help") {
    const helpEmbed = new Discord.RichEmbed()
      .setColor("#808080")
      .setTitle("commands")
      .setAuthor("command help")
      .setDescription("commands for joeys discord bot stable version")
      .addField("miscellaneous commands", "say, ping, vr, meme, mm-art", true)
      .addField("NSFW commands", "yiff-cub", true)
      .setTimestamp();
    
    message.author.sendMessage("administration commands are ban, kick, purge");
    
    message.channel.send(helpEmbed);
    console.log("help used");
  }

  if (command === "uptime"){
    
 
  }
  
  if (command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(
      `Pong! Latency is ${m.createdTimestamp -
        message.createdTimestamp}ms. API Latency is ${Math.round(
        client.ping
      )}ms`
    );
    console.log("ping used");
  }

  if (command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o => {});
    // And we get the bot to say the thing:
    message.channel.send(sayMessage);
    console.log("say used");
  }

  if (command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit:
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if (
      !message.member.roles.some(r =>
        ["Administrator", "Moderator"].includes(r.name)
      )
    )
      return message.reply("Sorry, you don't have permissions to use this!");

    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member =
      message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!member)
      return message.reply("Please mention a valid member of this server");
    if (!member.kickable)
      return message.reply(
        "I cannot kick this user! Do they have a higher role? Do I have kick permissions?"
      );

    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "No reason provided";

    // Now, time for a swift kick in the nuts!
    await member
      .kick(reason)
      .catch(error =>
        message.reply(
          `Sorry ${message.author} I couldn't kick because of : ${error}`
        )
      );
    message.reply(
      `${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`
    );
  }

  if (command === "ban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if (!message.member.roles.some(r => ["Administrator"].includes(r.name)))
      return message.reply("Sorry, you don't have permissions to use this!");

    let member = message.mentions.members.first();
    if (!member)
      return message.reply("Please mention a valid member of this server");
    if (!member.bannable)
      return message.reply(
        "I cannot ban this user! Do they have a higher role? Do I have ban permissions?"
      );

    let reason = args.slice(1).join(" ");
    if (!reason) reason = "No reason provided";

    await member
      .ban(reason)
      .catch(error =>
        message.reply(
          `Sorry ${message.author} I couldn't ban because of : ${error}`
        )
      );
    message.reply(
      `${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`
    );
  }

  if (command === "purge") {
    // This command removes all messages from all users in the channel, up to 100.

    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);

    // Ooooh nice, combined conditions. <3
    if (!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply(
        "Please provide a number between 2 and 100 for the number of messages to delete"
      );

    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({ limit: deleteCount });
    message.channel
      .bulkDelete(fetched)
      .catch(error =>
        message.reply(`Couldn't delete messages because of: ${error}`)
      );
  }
});

client.login(config.token);
