const Discord = require("discord.js");
const fs = require('fs');
const config = require("../config.json");

async function bot(client, message, command, args, defaultConfig, defaultprofile, cuser, cserver, UserM, ServerM) {
  if (command === "help") {
    var helpprefix = cserver.prefix;
    // Help message
    // Lists of current commands
    message.reply("please check your direct messages.");

    // Help message
    message.author.send({
      embed: {
        color: 12370112,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: client.user.username + " - About",
        description: "This bot was created by Avery Wagar & Nathan Laha",
        fields: [{
          name: `Check out the Github, host your own, or invite one of ours! (try ${helpprefix}invite)`,
          value: "https://github.com/ajmwagar/discordbot"
        }]
      }
    });
    message.author.send({
      embed: {
        color: 12370112,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Admin Commands for " + client.user.username,
        description: "My prefix is " + helpprefix,
        fields: [{
            name: helpprefix + "help",
            value: "show this help menu"
          },
          {
            name: helpprefix + "ban <user>",
            value: "ban a user (admins only)"
          },
          {
            name: helpprefix + "setlog <channel>",
            value: "Set channel for modlog"
          },
          {
            name: helpprefix + "kick <user>",
            value: "kick a user (admins and mods only)"
          },
          {
            name: helpprefix + "purge <number of messages>",
            value: "purge a channel"
          },
          {
            name: helpprefix + "bws",
            value: "List banned words for automod"
          },
          {
            name: helpprefix + "addbw <words>",
            value: "Add words to ban list"
          },
          {
            name: helpprefix + "removebw <words>",
            value: "Remove words from ban list"
          },
          {
            name: helpprefix + "ping",
            value: "Pong?"
          },
          {
            name: helpprefix + "say <message>",
            value: "say a message"
          },
          {
            name: helpprefix + "prefix",
            value: "Sets the bot prefix"
          },
          {
            name: helpprefix + "alexamode",
            value: "Changes the prefix to Alexa <command>"
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "© " + message.guild
        }
      }
    });
    message.author.send({
      embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Utility/Joke Commands for " + client.user.username,
        description: "My prefix is " + helpprefix,
        fields: [{
            name: helpprefix + "weather <city>",
            value: "Get the weather for a city"
          },
          {
            name: helpprefix + "joke",
            value: "Tell a joke"
          },
          {
            name: helpprefix + "yoda <message>",
            value: "Translates your message to yodaspeak!"
          },
          {
            name: helpprefix + "stack <search query>",
            value: "Searches stack overflow"
          },
          {
            name: helpprefix + "dice <number of sides>",
            value: "Roles a dice with a number of sides"
          },
          {
            name: helpprefix + "coinflip",
            value: "Flips a coin"
          },
          {
            name: helpprefix + "math <number1> <operator> <number2>",
            value: "Does basic math operations. Gets pissed off if you divide by 0"
          },
          {
            name: helpprefix + "dab",
            value: "Dabs on them haters"
          },
          {
            name: helpprefix + "translate <language code> <input text>",
            value: "Translate's input to specified language, for a list of ISO 639-1 codes go to: [wikipedia](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)"
          },
          {
            name: helpprefix + "currency <to> <from> (Example: BTC USD)",
            value: "Gets and compares currency prices"
          },
          {
            name: helpprefix + "wolfram <search>",
            value: "Searches Wolfram Alpha"
          },
          {
            name: helpprefix + "bug <description>",
            value: "Report a bug"
          },
          {
            name: helpprefix + "credits",
            value: "Visit the github repo!"
          },
          {
            name: helpprefix + "invite",
            value: "Invite our official bot to your server!"
          },
          {
            name: helpprefix + "support",
            value: "Join our support server."
          },
          {
            name: helpprefix + "xkcd <number / random>",
            value: "Shows you the current XKCD comic, or a random/specific one if specified"
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "© " + message.guild
        }
      }
    });
    message.author.send({
      embed: {
        color: 0x47d10c,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Money Commands for " + client.user.username,
        description: "My prefix is " + helpprefix,
        fields: [{
            name: helpprefix + "daily",
            value: "Get 500 ZCoins every 24 hours"
          },
          {
            name: helpprefix + "slots",
            value: "Test your luck with 250 ZCoins!"
          },
          {
            name: helpprefix + "profile",
            value: "View your user profile (xp, zcoins, level)"
          },
          {
            name: helpprefix + "shop",
            value: "View the shop"
          },
          {
            name: helpprefix + "buy",
            value: "Buy items from the shop"
          },
          {
            name: helpprefix + "forbes",
            value: "Checkout the richest people alive. Forbes."
          },
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "© " + message.guild
        }
      }
    });
    message.author.send({
      embed: {
        color: 0xff5323,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Game Commands for" + client.user.username,
        description: "My prefix is " + helpprefix,
        fields: [{
            name: helpprefix + "fortnite <platform> <username>",
            value: "Fortnite Stats"
          },
          {
            name: helpprefix + "pubg <platform> <username>",
            value: "PUBG Stats"
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "© " + message.guild
        }
      }
    });
    message.author.send({
      embed: {
        color: 0xff5323,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Meme Commands for " + client.user.username,
        description: "My prefix is " + helpprefix,
        fields: [{
            name: helpprefix + "subs",
            value: "Lists subscribed subreddits."
          },
          {
            name: helpprefix + "setmemechannel <channel>",
            value: "Set channel for dumping memes"
          },
          {
            name: helpprefix + "setmemeinterval <interval>",
            value: "Set interval for dumping memes (in hours)"
          },
          {
            name: helpprefix + "addsub <subreddit name>",
            value: "add a subreddit for getting memes (/r/ format)"
          },
          {
            name: helpprefix + "removesub <subreddit name>",
            value: "remove a subreddit for getting memes (/r/ format)"
          },
          {
            name: helpprefix + "memes",
            value: "gets all the memes from Reddit"
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "© " + message.guild
        }
      }
    });
    message.author.send({
      embed: {
        color: 3066993,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Music Commands for " + client.user.username,
        description: "My prefix is " + helpprefix,
        fields: [{
            name: helpprefix + "queue",
            value: "Shows the current queue, up to 10 songs shown."
          },
          {
            name: helpprefix + "play <Song URL / Youtube Search>",
            value: "Plays music from youtube / adds music to the queue"
          },
          {
            name: helpprefix + "pause",
            value: "pauses the music"
          },
          {
            name: helpprefix + "resume",
            value: "resumes the music"
          },
          {
            name: helpprefix + "skip",
            value: "skips the playing song"
          },
          {
            name: helpprefix + "np",
            value: "Shows the currently playing song and information about it"
          },
          {
            name: helpprefix + "volume <1-5>",
            value: "sets/shows the current volume level"
          },
          {
            name: helpprefix + "stop",
            value: "Stops the music and clears the queue"
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "© " + message.guild
        }
      }
    });
  } else if (command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  } else if (command === "clearcfg") {
    // Only allow admins to wipe server config
    if (!message.member.permissions.has('ADMINISTRATOR'))
      return message.reply("Sorry, you don't have permissions to use this!");
    // Reload and clear CFG
    console.log(
      `Config cleared for: ${message.guild.name} (id: ${message.guild.id}). This guild has ${
      message.guild.memberCount
    } members!`
    );
    message.channel.send(`Server Config Reloaded! My prefix is now "${cserver.prefix}"`);
  } else if (command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o => {});
    // And we get the bot to say the thing: 
    message.channel.send(`**${message.author} Said:\n** ` + sayMessage);
  } else if (command === "dashboard") {
    message.reply('Are you the owner of a server using ZoraBOT? Try out our new Dashboard at: https://dta.dekutree.org/api/discord/login');
  } else if (command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if (!message.member.permissions.has('ADMINISTRATOR'))
      return message.reply("Sorry, you don't have permissions to use this!");

    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!member)
      return message.reply("Please mention a valid member of this server");
    if (!member.kickable)
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");

    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if (!reason) reason = "No reason provided";

    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  } else if (command === "ban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if (!message.member.permissions.has('ADMINISTRATOR'))
      return message.reply("Sorry, you don't have permissions to use this!");

    let member = message.mentions.members.first();
    if (!member)
      return message.reply("Please mention a valid member of this server");
    if (!member.bannable)
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if (!reason) reason = "No reason provided";

    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  } else if (command === "purge") {
    // This command removes all messages from all users in the channel, up to 100.
    if (!message.member.permissions.has('ADMINISTRATOR'))
      return message.reply("Sorry, you don't have permissions to use this!");

    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);


    // Ooooh nice, combined conditions. <3
    if (!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");

    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({
      limit: deleteCount
    });
    message.channel.bulkDelete(fetched).then(() => message.channel.send(":white_check_mark:"))
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  } else if (command === "prefix") {
    // This command changes the bot prefix
    if (!message.member.permissions.has('ADMINISTRATOR'))
      return message.reply("Sorry, you don't have permissions to use this!");

    if (args.length > 0) {

      var setPrefix = args[0];

      if (setPrefix !== undefined || setPrefix !== "") {
        ServerM.findById(message.guild.id, function (err, server) {
          server.prefix = setPrefix;
          server.save();
          message.channel.send({
            embed: {
              color: 3447003,
              description: `Bot prefix changed to ${server.prefix}`
            }
          });
        });
      }
    } else {
      message.channel.send(`Please specify a prefix with ${cserver.prefix}prefix <new prefix>`);
    }


  } else if (command === "alexamode") {
    // This command changes the bot prefix to "Alexa"
    if (!message.member.permissions.has('ADMINISTRATOR'))
      return message.reply("Sorry, you don't have permissions to use this!");


    ServerM.findById(message.guild.id, function (err, server) {
      server.prefix = "Alexa "
      server.save();
    });

    message.channel.send({
      embed: {
        color: 3447003,
        description: `Bot prefix changed to ${cserver.prefix}, type Alexa <command>`
      }
    });
  } else if (command === "addbw") {
    // This command removes all messages from all users in the channel, up to 100.
    if (!message.member.permissions.has('ADMINISTRATOR'))
      return message.reply("Sorry, you don't have permissions to use this!");

    args.forEach((word) => {
      // Add word
      ServerM.findById(message.guild.id, function (err, server) {
        server.automod.bannedwords.push(word);
        server.save();
      });

      // Alert user
      let embed = new Discord.RichEmbed()
        .setTitle(`Added ${word} to banned words`)
        .setAuthor(client.user.username + " - AUTOMOD", client.user.avatarURL)
        .setColor(15844367)

      message.channel.send({
        embed
      })
    })


  } else if (command === "removebw") {
    // This command removes all messages from all users in the channel, up to 100.
    if (!message.member.permissions.has('ADMINISTRATOR'))
      return message.reply("Sorry, you don't have permissions to use this!");

    args.forEach((word) => {
      let index = cserver.automod.bannedwords.indexOf(word)


      if (index > -1) {

        // Add word

        ServerM.findById(message.guild.id, function (err, server) {
          server.automod.bannedwords.splice(index, 1);
          server.save();
        });

        // Alert user
        let embed = new Discord.RichEmbed()
          .setTitle(`Removed ${word} from banned words`)
          .setAuthor(client.user.username + " - AUTOMOD", client.user.avatarURL)
          .setColor(15844367)

        message.channel.send({
          embed
        })
      }
    })
  } else if (command === "bws") {
    // This command removes all messages from all users in the channel, up to 100.
    if (!message.member.permissions.has('ADMINISTRATOR'))
      return message.reply("Sorry, you don't have permissions to use this!");

    let embed = new Discord.RichEmbed()
      .setTitle("Banned Words")
      .setAuthor(client.user.username + "- AUTOMOD", client.user.avatarURL)
      .setColor(15844367)
      .setDescription("Currently moderating " + cserver.automod.bannedwords.length + " words.")

    message.channel.send({
      embed
    })

    cserver.automod.bannedwords.forEach((word) => {
      var embed = new Discord.RichEmbed().setTitle(word).setAuthor(client.user.username, client.user.avatarURL).setColor(3447003)
      message.channel.send({
        embed
      })
    })

  } else if (command === "credits") {
    message.channel.send({
      embed: {
        color: 12370112,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: client.user.username + " - BOT",
        description: "This bot was created by Avery & Nathan",
        fields: [{
          name: "Check out the Github, host your own, or invite one of ours! (try +invite)",
          value: "https://github.com/ajmwagar/discordbot"
        }]
      }
    });
  } else if (command === "invite") {
    message.author.send("**Invite our official bot to your discord server!**\nhttps://discordapp.com/oauth2/authorize?client_id=478616471640080395&permissions=8&scope=bot");
    message.reply("please check you direct messages.");
  } else if (command === "reboot") {
    process.exit(0);
  } else if (command === "setlog") {
    var channel = args[0].trim()

    if (channel) {

      ServerM.findById(message.guild.id, function (err, server) {
        server.modlogChannel = channel;
        server.save();
      });

      return message.reply("Set channel to #" + channel);

    }

  } else if (command === "broadcast") {
    if (!message.author.id == "205419165366878211") {
      return message.reply("Sorry, you don't have permissions to use this!");
    } else {
      try {
        client.guilds.forEach(guild => {
          dchannel = getDefaultChannel(guild);
          dchannel.send("IMPORTANT UPDATE: " + args.join(" "))
        });
      } catch (err) {
        console.log("Could not send message");
      }
    }
  }
}

const getDefaultChannel = guild => {
  // get "original" default channel
  if (guild.channels.has(guild.id)) return guild.channels.get(guild.id);

  // Check for a "general" channel, which is often default chat
  if (guild.channels.exists("name", "general"))
    return guild.channels.find("name", "general");
  // Now we get into the heavy stuff: first channel in order where the bot can speak
  // hold on to your hats!
  return guild.channels
    .filter(
      c =>
      c.type === "text" &&
      c.permissionsFor(guild.client.user).has("SEND_MESSAGES")
    )
    .sort(
      (a, b) =>
      a.position - b.position ||
      Long.fromString(a.id)
      .sub(Long.fromString(b.id))
      .toNumber()
    )
    .first();
};

module.exports = {
  bot
};