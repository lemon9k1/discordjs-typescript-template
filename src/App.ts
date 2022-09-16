import {
  Client,
  Collection,
  GatewayIntentBits,
  SlashCommandBuilder,
} from "discord.js";
import "dotenv/config";
import path from "path";
import fs from "fs";
import EventHandler from "./handlers/EventHandler";
import CommandHandler from "./handlers/CommandHandler";
import { Command, Event } from "./interfaces/Handlers";

class App extends Client {
  eventFiles: Array<string>;
  commandFiles: Array<string>;
  events: Collection<string, Event>;
  commands: Collection<string, Command>;
  slashCommands: Array<SlashCommandBuilder>;

  constructor() {
    super({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
      ],
    });

    this.eventFiles = fs
      .readdirSync(path.resolve("./src/events"))
      .filter((file) => file.endsWith(".ts"));
    this.commandFiles = fs
      .readdirSync(path.resolve("./src/commands"))
      .filter((file) => file.endsWith(".ts"));
    this.events = new Collection();
    this.commands = new Collection();
    this.slashCommands = [];

    new EventHandler(this);
    new CommandHandler(this);

    this.login(process.env.DISCORD_TOKEN);
  }
}

export const client = new App();
