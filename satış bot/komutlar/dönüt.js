const { Client, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "dönüt",
  description: "Botun dönüt atmasını sağlar!",
  type: 1,
  options: [
{
            name: "dönüt",
            description: "botun dönüt atmasını sağlar!",
            type:3,
            required:true
        }
],

  run: async(client, interaction) => {

    const { user, guildId, channel } = interaction;
const donut = interaction.options.getString("dönüt")


   const embed = new EmbedBuilder()
    .setTitle("Dönütün Var!")
    .setColor("Random")
    .setDescription(`${donut}`)
    interaction.reply({embeds:[embed]})

  }
}; 