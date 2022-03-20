const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dice')
		.setDescription('Let\'s roll!'),
	async execute(interaction) {
		await interaction.reply(`hey ${interaction.user.username}, wanna roll a d20?`);
	},
};
