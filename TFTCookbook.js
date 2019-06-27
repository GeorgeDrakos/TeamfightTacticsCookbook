const {Client, Attachment} = require('discord.js');
const bot = new Client();

bot.on('ready', () => {
  console.log(`Logged in`)
});

bot.on('message', msg => {
  if (msg.content === '¬help') {
    msg.reply('This bot has all information regarding recipes for the' +
    ' mobile version of autochess')
  }
});

var attachment = null;

// base items
bot.on('message', message => {
  // If the message is '!rip'
  if (message.content === "b.f sword") {
    // Create the attachment using Attachment
    attachment = new Attachment('./images/BFSword.png')
    // Send the attachment in the message channel
    message.channel.send(attachment)
    message.reply("+ 20 Attack Damage");
    message.channel.send("Combinations ========= \n " +
    "+ B.F. Sword = Infinity edge \n" +
    "+ Needlessly large rod = Hextech gunblade \n" +
    "+ Recurve bow = Sword of the Divine \n" +
    "+ Tear of the goddess = Spear of Shojin \n" +
    "+ Chain vest = Guardian Angel \n" +
    "+ Negatron cloak = The Bloodthirster \n" +
    "+ Giant's belt = Zeke's Herald \n" +
    "+ Spatula = Youmuu's Ghostblade \n" )
  }
  else if (message.content === "tear of the goddess") {
    attachment = new Attachment('./images/tofg.png')
    message.reply("+ 20 Mana")
    message.channel.send(attachment)
    message.channel.send("Combinations ========= \n " +
    "+ B.F. Sword = Spear of Shokin \n" +
    "+ Needlessly large rod = Luden's Echo \n" +
    "+ Recurve bow = Statikk Shiv \n" +
    "+ Tear of the goddess = Seraph's Embrance \n" +
    "+ Chain vest = Frozen Heart \n" +
    "+ Negatron cloak = Hush \n" +
    "+ Giant's belt = Redemption \n" +
    "+ Spatula = Darkin")
  }
  else if (message.content === "chain vest") {
    attachment = new Attachment('./images/chainvest.png')
    message.reply("+20 Armor")
    message.channel.send(attachment)
    message.channel.send("Combinations ========= \n " +
    "+ B.F. Sword = Guardian Angel \n" +
    "+ Needlessly large rod = Locket of the Iron Solari \n" +
    "+ Recurve bow = Phantom Dancer \n" +
    "+ Tear of the goddess = Frozen Heart \n" +
    "+ Chain vest = Thornmail \n" +
    "+ Negatron cloak = Sword Breaker \n" +
    "+ Giant's belt = Red Buff \n" +
    "+ Spatula = Knight's Vyr")
  }
  else if (message.content === "needlessly large rod") {
    attachment = new Attachment('./images/needlessly.png')
    message.reply("+ 20 Spell Damage")
    message.channel.send(attachment)
    message.channel.send("Combinations ========= \n " +
    "+ B.F. Sword = Hextech Gunblade \n" +
    "+ Needlessly large rod = Rabadon's Deathcap \n" +
    "+ Recurve bow = Guinsoo's Rageblade \n" +
    "+ Tear of the goddess = Luden's Echo \n" +
    "+ Chain vest = Locket of the Iron Solari \n" +
    "+ Negatron cloak = Ionic Spark \n" +
    "+ Giant's belt = Morellonomicon \n" +
    "+ Spatula = Yuumi")
  }
  else if (message.content === "recurve bow"){
    attachment = new Attachment('./images/recurve.png')
    message.reply("+15% Attack Speed")
    message.channel.send(attachment)
    message.channel.send("Combinations ========= \n " +
    "+ B.F. Sword = Sword of the Divine \n" +
    "+ Needlessly large rod = Guinsoo's Rageblade \n" +
    "+ Recurve bow = Rapid Fire Cannon \n" +
    "+ Tear of the goddess = Statikk Shiv \n" +
    "+ Chain vest = Phantom Dancer \n" +
    "+ Negatron cloak = Cursed Blade \n" +
    "+ Giant's belt = Titanic Hydra \n" +
    "+ Spatula = Blade of the Ruined King")
  }
  else if (message.content === "negatron cloak") {
    attachment = new Attachment('./images/negatron.png')
    message.reply("+ 20 Magic Resistance")
    message.channel.send(attachment)
    message.channel.send("Combinations ========= \n " +
    "+ B.F. Sword = The Bloodthirster \n " +
    "+ Needlessly large rod = Ionic Spark \n" +
    "+ Recurve bow = Cursed Blade \n" +
    "+ Tear of the goddess = Hush \n" +
    "+ Chain vest = Sword Breaker \n" +
    "+ Negatron cloak = Dragon's Claw \n" +
    "+ Giant's belt = Zephyr \n" +
    "+ Spatula = Runaan's Hurricane")
  }
  else if (message.content === "giant's belt") {
    attachment = new Attachment('./images/giants.png')
    message.reply("+ 200 Health Points")
    message.channel.send(attachment)
    message.channel.send("Combinations ========= \n " +
    "+ B.F. Sword = Zeke's Herald \n" +
    "+ Needlessly large rod = Morellonomicon \n" +
    "+ Recurve bow = Titanic Hydra \n" +
    "+ Tear of the goddess = Redemption \n" +
    "+ Chain vest = Red Buff \n" +
    "+ Negatron cloak = Zephyr \n" +
    "+ Giant's belt = Warmog's Armor \n" +
    "+ Spatula = Frozen Mallet")
  }
  else if (message.content === "spatula") {
    attachment = new Attachment('./images/spatula.png')
    message.reply(" Unknown effects ")
    message.channel.send(attachment)
    message.channel.send("Combinations ========= \n " +
    "+ B.F. Sword = Youmuu's Ghostblade \n" +
    "+ Needlessly large rod = Yuumi \n" +
    "+ Recurve bow = Blade of the Ruined King \n" +
    "+ Tear of the goddess = Darkin \n" +
    "+ Chain vest = Knight's Vyr \n" +
    "+ Negatron cloak = Runaan's Hurricane \n" +
    "+ Giant's belt = Frozen Mallet \n" +
    "+ Spatula = Force of Nature")
  }

  // combo items
  else if (message.content === "infinity edge") {
    attachment = new Attachment ('./images/infinity.png')
    message.reply("Critical strikes deal +100% damage")
    message.channel.send(attachment)
  }
  else if (message.content === "hextech gunblade") {
    attachment = new Attachment('./images/gunblade.png')
    message.reply("Heal for 25% of all damage dealt")
    message.channel.send(attachment)
  }
  else if (message.content === "sword of the divine") {
    attachment = new Attachment('./images/divine.png')
    message.reply("Each second, gain a 5% chance to gain 100% critical strike ")
    message.channel.send(attachment)
  }
  else if (message.content === "spear of shojin") {
    attachment = new Attachment('./images/Spearofshojin.png')
    message.reply("After casting a spell, gain 15% of max mana per attack")
    message.channel.send(attachment)
  }
  else if (message.content === "guardian angel") {
    attachment = new Attachment('./images/GuardianAngel.png')
    message.reply("Wearer gets revived with 500 HP")
    message.channel.send(attachment)
  }
  else if (message.content === "the bloodthirster") {
    attachment = new Attachment ('./images/bloodthirster.png')
    message.reply("Attacks heal for 35% of damage dealt")
    message.channel.send(attachment)
  }
  else if (message.content === "zeke's herald" ) {
    attachment = new Attachment ('./images/zekes.png')
    message.reply("Adjacent allies gain +10% Attack Speed")
    message.channel.send(attachment)
  }
  else if (message.content === "youmuu's ghostblade"){
    attachment = new Attachment ('./images/ghostblade.png')
    message.reply("Wearer is also an Assassin")
    message.channel.send(attachment)
  }

  else if (message.content === "rabadon's deathcap"){
    attachment = new Attachment ('./images/rabadon.png')
    message.reply("Wearer's Ability Damage is increased by 50%")
    message.channel.send(attachment)
  }
  else if (message.content === "guinsoo's rageblade"){
    attachment = new Attachment ('./images/rageblade.png')
    message.reply("Attacks give 3% Attack Speed, stacks infinitely")
    message.channel.send(attachment)
  }
  else if (message.content === "luden's echo"){
    attachment = new Attachment ('./images/luden.png')
    message.reply("Deal 200 splash damage on ability hit")
    message.channel.send(attachment)
  }
  else if (message.content === "locket of the iron solari"){
    attachment = new Attachment ('./images/solari.png')
    message.reply("On start of combat adjacent allies get 200 shield")
    message.channel.send(attachment)
  }
  else if (message.content === "ionic spark"){
    attachment = new Attachment ('./images/ionic.png')
    message.reply("Whenever an enemy casts a spell they take 200 damage")
    message.channel.send(attachment)
  }
  else if (message.content === "morellonomicon"){
    attachment = new Attachment ('./images/Morello.png')
    message.reply("Spells burn 5% of the enemy max HP per second")
    message.channel.send(attachment)
  }
  else if (message.content === "yuumi"){
    attachment = new Attachment ('./images/yuumi.png')
    message.reply("Wearer is also a Sorcerer")
    message.channel.send(attachment)
  }

  else if (message.content === "rapid fire cannon"){
    attachment = new Attachment ('./images/rapidfire.png')
    message.reply("Attacks cannot be dodged. Attack Range is doubled")
    message.channel.send(attachment)
  }
  else if (message.content === "statikk shiv"){
    attachment = new Attachment ('./images/stattik.png')
    message.reply("Every third attack deals 100 splash magical damage")
    message.channel.send(attachment)
  }
  else if (message.content === "cursed blade"){
    attachment = new Attachment ('./images/cursedblade.png')
    message.reply("Attacks have a low chance to Shrink")
    message.channel.send(attachment)
  }
  else if (message.content === "phantom dancer"){
    attachment = new Attachment ('./images/phantom.png')
    message.reply("Wearer dodges all critical strikes")
    message.channel.send(attachment)
  }
  else if (message.content === "titanic hydra"){
    attachment = new Attachment ('./images/titanic.png')
    message.reply("Attacks deal 10% of the wearer's max HP as splash damage")
    message.channel.send(attachment)
  }
  else if (message.content === "blade of the ruined king"){
    attachment = new Attachment ('./images/ruinedking.png')
    message.reply("Wearer is also a Blademaster")
    message.channel.send(attachment)
  }

  else if (message.content === "seraph's embrace"){
    attachment = new Attachment ('./images/seraph.png')
    message.reply("Regain 20 mana each time a spell is cast")
    message.channel.send(attachment)
  }
  else if (message.content === "frozen heart"){
    attachment = new Attachment ('./images/frozen.png')
    message.reply("Adjacent enemies lose 20% Attack Speed")
    message.channel.send(attachment)
  }
  else if (message.content === "hush"){
    attachment = new Attachment ('./images/hush.png')
    message.reply("Attacks have a high chance to Silence")
    message.channel.send(attachment)
  }
  else if (message.content === "redemption"){
    attachment = new Attachment ('./images/redemption.png')
    message.reply("On death heal all nearby allies for 1000 HP")
    message.channel.send(attachment)
  }
  else if (message.content === "darkin"){
    attachment = new Attachment ('./images/darkin.png')
    message.reply("Wearer is also a Demon")
    message.channel.send(attachment)
  }

  else if (message.content === "thornmail"){
    attachment = new Attachment ('./images/thornmail.png')
    message.reply("Reflect 35% of all damage taken from attacks")
    message.channel.send(attachment)
  }
  else if (message.content === "sword breaker"){
    attachment = new Attachment ('./images/swordbreaker.png')
    message.reply("Attacks have a chance to disarm")
    message.channel.send(attachment)
  }
  else if (message.content === "red buff"){
    attachment = new Attachment ('./images/redbuff.png')
    message.reply("Attacks burn for 2.5% max HP and disable healing")
    message.channel.send(attachment)
  }
  else if (message.content === "knight's vow"){
    attachment = new Attachment ('./images/knights.png')
    message.reply("Wearer is also a Knight")
    message.channel.send(attachment)
  }

  else if (message.content === "runaan's hurricane"){
    attachment = new Attachment ('./images/runaans.png')
    message.reply("Attacks hit additional enemies and deal 50% damage")
    message.channel.send(attachment)
  }
  else if (message.content === "zephyr"){
    attachment = new Attachment ('./images/zephyr.png')
    message.reply("On start of combat Banish an enemy")
    message.channel.send(attachment)
  }
  else if (message.content === "dragon's claw"){
    attachment = new Attachment ('./images/dragons.png')
    message.reply("83% resistance to magic damage")
    message.channel.send(attachment)
  }

  else if (message.content === "warmog's armor"){
    attachment = new Attachment ('./images/warmogs.png')
    message.reply("Regenerate 3% of max HP per second")
    message.channel.send(attachment)
  }
  else if (message.content === "frozen mallet"){
    attachment = new Attachment ('./images/frozenmallet.png')
    message.reply("Wearer is also a Glacial")
    message.channel.send(attachment)
  }

  else if (message.content === "force of nature"){
    attachment = new Attachment ('./images/forceofnature.png')
    message.reply("Gain +1 members")
    message.channel.send(attachment)
  }
});

// log in your bot using the token given by the website!
bot.login('NTkzNDQwNDA3MDUzMTM5OTcw.XRN6-g.X2T7QPYF7IFkesHzKSz37q9OCqE');
