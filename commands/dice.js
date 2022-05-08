const { SlashCommandBuilder } = require('@discordjs/builders');
const calc = require('../util/calc');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dice')
		.setDescription('Let\'s roll!')
		.addIntegerOption(option =>
			option.setName('rolls')
				.setDescription('How many rolls?'))
		.addIntegerOption(option =>
			option.setName('die')
				.setDescription('Pick a die')
				.setRequired(true)
				.addChoice('d20', 20)
				.addChoice('d6', 6))
		.addIntegerOption(option =>
			option.setName('modifier')
				.setDescription('Add modifier')),
	async execute(interaction) {
		const dieChoice = interaction.options.getInteger('die');
		const rollResult = calc.getRandomIntInclusive(1, dieChoice);

		await interaction.reply(`${interaction.user.username} rolled **d${dieChoice}** and got **${rollResult}**`);
	},
};
