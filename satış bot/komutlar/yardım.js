const { Client,EmbedBuilder } = require("discord.js")

module.exports = {
    name:"yardım",
    description:"Botun yardım menüsünü atar!",
    type:1,
    options:[],
   run: async (client,interaction) => {
    const { user,guildId,channel } = interaction;
    const embed = new EmbedBuilder()
    .setTitle("yardım")
    .setDescription("***KOMUTLAR***\n**/satış *satın aldıgın ürünleri yetkililere gönderir*\n/dönüt *yetkilinin sana geri dönütüdür*")
}
}