const { SlashCommandBuilder } = require('@discordjs/builders');
const rolls = require('../rolls/common');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dice')
		.setDescription('Let\'s roll!')
		.addIntegerOption(option =>
			option.setName('die')
				.setDescription('Pick a die')
				.setRequired(true)
				.addChoice('d100', 100)
				.addChoice('d20', 20)
				.addChoice('d12', 12)
				.addChoice('d10', 10)
				.addChoice('d8', 8)
				.addChoice('d6', 6)
				.addChoice('d4', 4))
		.addIntegerOption(option =>
			option.setName('modifier')
				.setDescription('Add modifier')),
	async execute(interaction) {
		await interaction.reply(rolls.getStandardRoll(interaction));
	},
};
