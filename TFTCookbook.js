const {Client, Attachment} = require('discord.js');
  const bot = new Client();

bot.on('ready', () => {
 console.log(`Logged in`);
 });

bot.on('message', msg => {
 if (msg.content === '¬help') {
 msg.reply('This bot has all information regarding recipes for the' +
 ' mobile version of autochess');
 }
 });

 //bot.on('message', message => {
//  if (message.content === 'bfsword') {
//    const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
//    msg.reply(message.author, bfSword);
//
//  }
//  });

var attachment = null;

  bot.on('message', message => {
      // If the message is '!rip'
      if (message.content === "b.f sword") {
          // Create the attachment using Attachment
          attachment = new Attachment('./images/BFSword.png');
          // Send the attachment in the message channel
          message.reply("+ 20 Attack Damage");
          message.channel.send(attachment);
      }
      else if (message.content === "tear of the goddess") {
        attachment = new Attachment('./images/tofg.png');
        message.reply("+ 20 Mana");
        message.channel.send(attachment);
      }
      else if (message.content === "chain vest") {
        attachment = new Attachment('./images/chainvest.png');
        message.reply("+20 Armor");
        message.channel.send(attachment);
      }
      else if (message.content === "needlessly large rod") {
        attachment = new Attachment('./images/needlessly.png');
        message.reply("+ 20 Spell Damage");
        message.channel.send(attachment);
      }
      else if (message.content === "recurve bow"){
        attachment = new Attachment('./images/recurve.png');
        message.reply("+15% Attack Speed");
        message.channel.send(attachment);
      }
      else if (message.content === "negatron cloak") {
        attachment = new Attachment('./images/negatron.png');
        message.reply("+ 20 Magic Resistance");
        message.channel.send(attachment);
      }
      else if (message.content === "giant's belt") {
      // attachment = new Attachment('')
      message.reply("+ 200 Health Points")
      // message.channel.send(attachment);
          }
      else if (message.content === "spatula") {
      // attachment = new Attachment('')
      message.reply(" Unknown effects ")
      // message.channel.send(attachment)
      }
      else if (message.content === "infinity edge") {
        // attachment = new Attachment ('')
        message.reply("Critical strikes deal +100% damage")
        // message.channel.send(attachment)
      }
      else if (message.content === "hextech gunblade") {
        // attachment = new Attachment('')
        message.reply("Heal for 25% of all damage dealt")
        // message.channel.send(attachment)
      }
      else if (message.content === "sword of the divine") {
        // attachment = new Attachment('')
        message.reply("Each second, gain a 5% chance to gain 100% critical strike ")
        // message.channel.send(attachment)
      }
      else if (message.content === "spear of shojin") {
        // attachment = new Attachment('')
        message.reply("After casting a spell, gain 15% of max mana per attack")
        // message.channel.send("attachment")
      }
      else if (message.content === "guardian's angel") {
        // attachment = new Attachment('')
        message.reply("Warer gets revived with 500 Health Points")
        // message.channel.send("attachment")
      }
      else if (message.content === "the bloodthirster") {
        // attachment = new Attachment ('')
        message.reply("Attacks heal for 50% of damage dealt")
        // message.channel.send("attachment")
      }
      else if (message.content === "zeke's herald" ) {
        // attachment = new Attachment ('')
        message.reply("Ajacent allies gain +10% Attack Speed")
        // message.channel.send("attachment")
      }
      else if (message.content === "yomuu's ghostblade"){
      // attachment = new Attachment ('')
      message.reply("Wearer is also an Assassin")
      // message.channel.send("attachment")
      }




  });
// log in your bot using the token given by the website!
bot.login('NTkzNDQwNDA3MDUzMTM5OTcw.XRN6-g.X2T7QPYF7IFkesHzKSz37q9OCqE');
