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
import JobHandler from "./handlers/JobHandler";
import { Command, Event, Job } from "./interfaces/Handlers";

class App extends Client {
  eventFiles: Array<string>;
  commandFiles: Array<string>;
  jobFiles: Array<string>;
  events: Collection<string, Event>;
  commands: Collection<string, Command>;
  jobs: Collection<string, Job>;
  slashCommands: Array<SlashCommandBuilder>;

  constructor() {
    super({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences,
      ],
    });

    this.eventFiles = fs
      .readdirSync(path.resolve("./src/events"))
      .filter((file) => file.endsWith(".ts"));
    this.commandFiles = fs
      .readdirSync(path.resolve("./src/commands"))
      .filter((file) => file.endsWith(".ts"));
    this.jobFiles = fs
      .readdirSync(path.resolve("./src/jobs"))
      .filter((file) => file.endsWith(".ts"));
    this.events = new Collection();
    this.commands = new Collection();
    this.jobs = new Collection();
    this.slashCommands = [];

    new EventHandler(this);
    new CommandHandler(this);
    new JobHandler(this);

    this.login(process.env.DISCORD_TOKEN);
  }
}

export const client = new App();
