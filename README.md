# Discord.JS Typescript Template

- Step 1
  - Download the latest release and unzip the folder.
  - Navigate to where you extracted the folder in your favorite terminal.
  - Type `npm i` to install all of the missing dependencies.

- Step 2
  - Create `.env` file and set these environment variables:
    - `DISCORD_TOKEN=YOUR_BOTS_TOKEN`
    - `CLIENT_ID=YOUR_BOTS_ID`
    - `GUILD_ID=YOUR_SERVER_ID`
  - **The bot will not authenticate without these environment variables.**
  - It should look something like this:
  ```
  DISCORD_TOKEN=zfVtA68yalveO4t4U2tQeL1fzAp5nOsxHzcpQOea
  CLIENT_ID=39123315515959548597
  GUILD_ID=42412108868414007231
  ```
  
 - Step 3
    - In your favorite terminal type:
      - `npm run dev` for a dev environment using Nodemon.
      - `npm run build` for a live version of your Bot.

# Automating Role Assignment

- Step 1
    - Go into your `.env` file and create an environment variable with a standard array of role IDs.
    - Save and run the bot using `npm run dev` or `npm run build`.
