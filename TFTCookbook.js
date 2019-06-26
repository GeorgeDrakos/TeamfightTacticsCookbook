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
    message.channel.send("+ B.F. Sword = Infinity edge")
    message.channel.send("+ Needlessly large rod = Hextech gunblade")
    message.channel.send("+ Recurve bow = Sword of the Divine")
    message.channel.send("+ Tear of the goddess = Spear of Shojin")
    message.channel.send("+ Chain vest = Guardian Angel")
    message.channel.send("+ Negatron cloak = The Bloodthirster")
    message.channel.send("+ Giant's belt = Zeke's Herald")
    message.channel.send("+ Spatula = Youmuu's Ghostblade")
  }
  else if (message.content === "tear of the goddess") {
    attachment = new Attachment('./images/tofg.png')
    message.reply("+ 20 Mana")
    message.channel.send(attachment)
    message.channel.send("+ B.F. Sword = Spear of Shokin")
    message.channel.send("+ Needlessly large rod = Luden's Echo")
    message.channel.send("+ Recurve bow = Statikk Shiv")
    message.channel.send("+ Tear of the goddess = Seraph's Embrance")
    message.channel.send("+ Chain vest = Frozen Heart")
    message.channel.send("+ Negatron cloak = Hush")
    message.channel.send("+ Giant's belt = Redemption")
    message.channel.send("+ Spatula = Darkin")
  }
  else if (message.content === "chain vest") {
    attachment = new Attachment('./images/chainvest.png')
    message.reply("+20 Armor")
    message.channel.send(attachment)
    message.channel.send("+ B.F. Sword = Guardian Angel")
    message.channel.send("+ Needlessly large rod = Locket of the Iron Solari")
    message.channel.send("+ Recurve bow = Phantom Dancer")
    message.channel.send("+ Tear of the goddess = Frozen Heart")
    message.channel.send("+ Chain vest = Thornmail")
    message.channel.send("+ Negatron cloak = Sword Breaker")
    message.channel.send("+ Giant's belt = Red Buff")
    message.channel.send("+ Spatula = Knight's Vyr")
  }
  else if (message.content === "needlessly large rod") {
    attachment = new Attachment('./images/needlessly.png')
    message.reply("+ 20 Spell Damage")
    message.channel.send(attachment)
    message.channel.send("+ B.F. Sword = Hextech Gunblade")
    message.channel.send("+ Needlessly large rod = Rabadon's Deathcap")
    message.channel.send("+ Recurve bow = Guinsoo's Rageblade")
    message.channel.send("+ Tear of the goddess = Luden's Echo")
    message.channel.send("+ Chain vest = Locket of the Iron Solari")
    message.channel.send("+ Negatron cloak = Ionic Spark")
    message.channel.send("+ Giant's belt = Morellonomicon")
    message.channel.send("+ Spatula = Yuumi")
  }
  else if (message.content === "recurve bow"){
    attachment = new Attachment('./images/recurve.png')
    message.reply("+15% Attack Speed")
    message.channel.send(attachment)
    message.channel.send("+ B.F. Sword = Sword of the Divine")
    message.channel.send("+ Needlessly large rod = Guinsoo's Rageblade")
    message.channel.send("+ Recurve bow = Rapid Fire Cannon")
    message.channel.send("+ Tear of the goddess = Statikk Shiv")
    message.channel.send("+ Chain vest = Phantom Dancer")
    message.channel.send("+ Negatron cloak = Cursed Blade")
    message.channel.send("+ Giant's belt = Titanic Hydra")
    message.channel.send("+ Spatula = Blade of the Ruined King")
  }
  else if (message.content === "negatron cloak") {
    attachment = new Attachment('./images/negatron.png')
    message.reply("+ 20 Magic Resistance")
    message.channel.send(attachment)
    message.channel.send("+ B.F. Sword = The Bloodthirster")
    message.channel.send("+ Needlessly large rod = Ionic Spark")
    message.channel.send("+ Recurve bow = Cursed Blade")
    message.channel.send("+ Tear of the goddess = Hush")
    message.channel.send("+ Chain vest = Sword Breaker")
    message.channel.send("+ Negatron cloak = Dragon's Claw")
    message.channel.send("+ Giant's belt = Zephyr")
    message.channel.send("+ Spatula = Runaan's Hurricane")
  }
  else if (message.content === "giant's belt") {
    attachment = new Attachment('./images/giants.png')
    message.reply("+ 200 Health Points")
    message.channel.send(attachment)
    message.channel.send("+ B.F. Sword = Zeke's Herald")
    message.channel.send("+ Needlessly large rod = Morellonomicon")
    message.channel.send("+ Recurve bow = Titanic Hydra")
    message.channel.send("+ Tear of the goddess = Redemption")
    message.channel.send("+ Chain vest = Red Buff")
    message.channel.send("+ Negatron cloak = Zephyr")
    message.channel.send("+ Giant's belt = Warmog's Armor")
    message.channel.send("+ Spatula = Frozen Mallet")
  }
  else if (message.content === "spatula") {
    attachment = new Attachment('./images/spatula.png')
    message.reply(" Unknown effects ")
    message.channel.send(attachment)
    message.channel.send("+ B.F. Sword = Youmuu's Ghostblade")
    message.channel.send("+ Needlessly large rod = Yuumi")
    message.channel.send("+ Recurve bow = Blade of the Ruined King")
    message.channel.send("+ Tear of the goddess = Darkin")
    message.channel.send("+ Chain vest = Knight's Vyr")
    message.channel.send("+ Negatron cloak = Runaan's Hurricane")
    message.channel.send("+ Giant's belt = Frozen Mallet")
    message.channel.send("+ Spatula = Force of Nature")
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
