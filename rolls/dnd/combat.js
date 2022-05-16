// DnD Rolls
const calc = require('../../util/calc');

exports.getInitiativeRoll = function(interaction) {
	const bonus = interaction.options.getInteger('bonus') ?? 0;
	const rollResult = calc.getRandomIntInclusive(1, 20) + bonus;

	return `${interaction.user.username} rolls initiative: **d20 + ${bonus}** = **${rollResult}**`;
};

exports.getAttackRoll = function(interaction) {
	const bonus = interaction.options.getInteger('bonus') ?? 0;
	const modifier = interaction.options.getInteger('modifier') ?? 0;

	const rollResult = calc.getRandomIntInclusive(1, 20) + modifier;

	return `${interaction.user.username} attacks: **d20 + ${modifier} + ${bonus}** = **${rollResult}**`;
};

exports.getDamageRoll = function(interaction) {
	// To Do
	const skull = '\u{1f480}';
	return `${interaction.user.username} killed it dead. ${skull}`;
};