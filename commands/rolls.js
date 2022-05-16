const { SlashCommandBuilder } = require('@discordjs/builders');
const combatRolls = require('../rolls/dnd/combat');
const statRolls = require('../rolls/dnd/stat');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roller')
		.setDescription('Roll away!')
		.addStringOption(option =>
			option.setName('rolls')
				.setDescription('Pick a roll')
				.setRequired(true)
				.addChoice('stats', 'stats')
				.addChoice('initiative', 'initiative')
				.addChoice('attack', 'attack')
				.addChoice('damage', 'damage')),
	async execute(interaction) {
		const roll = interaction.options.getString('rolls');
		let rollResult;

		switch (roll) {
		case 'stats':
			rollResult = statRolls.getStatRoll(interaction);
			break;
		case 'initiative':
			rollResult = combatRolls.getInitiativeRoll(interaction);
			break;
		case 'attack':
			rollResult = combatRolls.getAttackRoll(interaction);
			break;
		case 'damage':
			rollResult = combatRolls.getDamageRoll(interaction);
			break;
		}
		await interaction.reply(rollResult);
	},
};