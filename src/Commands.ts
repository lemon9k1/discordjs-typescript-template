import { Routes, SlashCommandBuilder } from "discord.js";
import { REST } from "@discordjs/rest";
import Ping from "../commands/Ping";
import { Command } from "../interfaces/Command";

export default class Commands {
  commands: Array<Command>;
  commandBuilds: Array<SlashCommandBuilder>;

  constructor() {
    this.commands = [new Ping()];
    this.commandBuilds = [];

    this.pushCommands();

    this.registerCommands();
  }

  pushCommands() {
    for (const command of this.commands) {
      this.commandBuilds.push(
        new SlashCommandBuilder()
          .setName(command.name)
          .setDescription(command.desc)
      );
    }
  }

  registerCommands() {
    this.commandBuilds.map((command) => command.toJSON());

    const rest = new REST({ version: "10" }).setToken(
      process.env.DISCORD_TOKEN as string
    );

    rest
      .put(
        Routes.applicationGuildCommands(
          process.env.CLIENT_ID as string,
          process.env.GUILD_ID as string
        ),
        {
          body: this.commandBuilds,
        }
      )
      .then((data: any) =>
        console.log(
          `Successfully registered ${data.length} application commands.`
        )
      )
      .catch(console.error);
  }
}
