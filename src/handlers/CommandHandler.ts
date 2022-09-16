import { client } from "../App";
import path from "path";
import { Command, Commands } from "../interfaces/Handlers";
import { SlashCommandBuilder } from "@discordjs/builders";
import { REST } from "@discordjs/rest";
import { Routes } from "discord.js";

export default class CommandHandler {
  constructor(client: Commands) {
    this.commandHandler(client);
  }

  async commandHandler(client: Commands): Promise<void> {
    for (const file of client.commandFiles) {
      const importedFile = await import(path.resolve(`./src/commands/${file}`));
      const command: Command = new importedFile.default();

      client.commands.set(command.name, command);
    }

    client.commands.map((command) => {
      client.slashCommands.push(
        new SlashCommandBuilder()
          .setName(command.name)
          .setDescription(command.desc)
      );
    });

    client.slashCommands.map((slashCommand) => slashCommand.toJSON());

    const rest = new REST({ version: "10" }).setToken(
      process.env.DISCORD_TOKEN as string
    );

    rest
      .put(
        Routes.applicationGuildCommands(
          process.env.CLIENT_ID as string,
          process.env.GUILD_ID as string
        ),
        { body: client.slashCommands }
      )
      .then((data: any) =>
        console.log(
          `Successfully registered ${data.length} application commands.`
        )
      )
      .catch(console.error);
  }
}
