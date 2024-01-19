const { Client, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "satış",
  description: "satın aldıgın urunu yazarsın!",
  type: 1,
  options: [
{
            name: "satış",
            description: "ürün satın alırsın",
            type:3,
            required:true
        }
],

  run: async(client, interaction) => {

    const { user, guildId, channel } = interaction;
const satis = interaction.options.getString("satış")


   const embed = new EmbedBuilder()
    .setTitle("Satışın  Var!")
    .setColor("Random")
    .setDescription(`satın alınan ürün : **${satis}**`)
    interaction.reply({embeds:[embed]})

  }
}; 