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
import InteractionHandler from "./handlers/InteractionHandler";
import JobHandler from "./handlers/JobHandler";
import { Button, Command, Event, Job } from "./interfaces/Handlers";

export default class App extends Client {
  eventFiles: Array<string>;
  commandFiles: Array<string>;
  jobFiles: Array<string>;
  buttonFiles: Array<string>;
  events: Collection<string, Event>;
  commands: Collection<string, Command>;
  jobs: Collection<string, Job>;
  buttons: Collection<string, Button>;
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
      .readdirSync(path.resolve("./src/interactions/commands"))
      .filter((file) => file.endsWith(".ts"));
    this.jobFiles = fs
      .readdirSync(path.resolve("./src/jobs"))
      .filter((file) => file.endsWith(".ts"));
    this.buttonFiles = fs
      .readdirSync(path.resolve("./src/interactions/buttons"))
      .filter((file) => file.endsWith(".ts"));

    this.events = new Collection();
    this.commands = new Collection();
    this.jobs = new Collection();
    this.buttons = new Collection();
    this.slashCommands = [];

    new EventHandler(this);
    new InteractionHandler(this);
    new JobHandler(this);

    this.login(process.env.DISCORD_TOKEN);
  }
}

export const client = new App();
