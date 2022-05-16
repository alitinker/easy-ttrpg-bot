# Easy TTRPG Discord Bot

We have a mighty need to play. 

## Running the bot

Requires Node v16. 

Uses [dotenv](https://www.dotenv.org/) for managing environment variables. Add a `.env` file with the 3 env vars needed for authentication and command registration: `BOT_TOKEN`, `CLIENT_ID`, `GUILD_ID`.

Run `node deploy-commands.js` to register commands.

Run `node index.js` to start the bot.

