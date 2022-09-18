# Discord.JS Typescript Template

### Description

This is a template for the Discord.JS framework, coded in TypeScript. I'm sharing with you the same TypeScript template I created when I first started making my Discord.JS Chatbot(s). My hope is to see more bots pop up, or even better see my code shortened and optimized even further - so if you make something, do share! If you have any questions, DM me.

## Resources

This project's recommended program to begin developing is VS Code. It is also recommended that you install the following plugins:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)

With these extensions installed, the .code-workspace file should automatically support linting and formatting.

## Linting
This project uses the [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html) for linting. This is supported through ESLint.

## Important Packages

This project uses the Discord.JS and Jest npm packages.

- [Jest](https://www.npmjs.com/package/jest)
- [Jest (Typescript)](https://www.npmjs.com/package/ts-jest)
- [Discord.JS](https://www.npmjs.com/package/discord.js)
- [Discord.JS Docs](https://discord.js.org/#/)
- [Discord.JS Guide](https://discordjs.guide/#before-you-begin)

## Setup

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
