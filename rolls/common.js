// Rolls
const calc = require('../util/calc');

exports.getStandardRoll = function(interaction) {
	const dieChoice = interaction.options.getInteger('die');
	const modifier = interaction.options.getInteger('modifier') ?? 0;

	const rollResult = calc.getRandomIntInclusive(1, dieChoice) + modifier;

	return `${interaction.user.username} rolled **d${dieChoice}** and got **${rollResult}**`;
};