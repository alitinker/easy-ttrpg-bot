// Set and Get user stats


exports.setUserStat = function(statName, statValue) {

	client.set(statName, statValue, (err, reply) => {
        if (err) throw err;
        console.log(reply);
    
        client.get(statName, (err, reply) => {
            if (err) throw err;
            console.log(reply);
        });
    });

	const statFairy = '\u{1f9da}';
	return `${interaction.user.username}, here are your stats... ${statFairy}`;
};