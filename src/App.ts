import {
  Client,
  Collection,
  CommandInteraction,
  GatewayIntentBits,
  REST,
  Routes,
  SlashCommandBuilder,
} from "discord.js";
import "dotenv/config";
import path from "path";
import fs from "fs";

interface Command {
  name: string;
  desc: string;
  execute: (interaction: CommandInteraction) => void;
}

export default class App extends Client {
  eventFiles: Array<string>;
  commandFiles: Array<string>;
  events: Collection<string, any>;
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

    this.eventHandler();
    this.commandHandler();

    this.login(process.env.DISCORD_TOKEN);
  }

  async eventHandler(): Promise<void> {
    for (const file of this.eventFiles) {
      const importedFile = await import(path.resolve(`./src/events/${file}`));
      const event = new importedFile.default();

      this.events.set(event.name, event);
    }
  }

  async commandHandler(): Promise<void> {
    for (const file of this.commandFiles) {
      const importedFile = await import(path.resolve(`./src/commands/${file}`));
      const command: Command = new importedFile.default();

      this.commands.set(command.name, command);
    }

    this.commands.map((command) => {
      this.slashCommands.push(
        new SlashCommandBuilder()
          .setName(command.name)
          .setDescription(command.desc)
      );
    });

    this.slashCommands.map((slashCommand) => slashCommand.toJSON());

    const rest = new REST({ version: "10" }).setToken(
      process.env.DISCORD_TOKEN as string
    );

    rest
      .put(
        Routes.applicationGuildCommands(
          process.env.CLIENT_ID as string,
          process.env.GUILD_ID as string
        ),
        { body: this.slashCommands }
      )
      .then((data: any) =>
        console.log(
          `Successfully registered ${data.length} application commands.`
        )
      )
      .catch(console.error);
  }
}

export const client = new App();
