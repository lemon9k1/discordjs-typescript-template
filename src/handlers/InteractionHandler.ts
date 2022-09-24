import path from "path";
import App from "../App";
import { SlashCommandBuilder } from "@discordjs/builders";
import { REST } from "@discordjs/rest";
import { Routes } from "discord.js";

export default class InteractionHandler {
  constructor(client: App) {
    this.commandHandler(client);
    this.buttonHandler(client);
    this.menuHandler(client);
    this.modalHandler(client);
  }

  async commandHandler(client: App): Promise<void> {
    for (const file of client.commandFiles) {
      const importedFile = await import(
        path.resolve(`./src/interactions/commands/${file}`)
      );
      const command = new importedFile.default();

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
          `Successfully registered ${data.length} application command${
            data.length > 1 ? "s" : ""
          }.`
        )
      )
      .catch(console.error);
  }

  async buttonHandler(client: App): Promise<void> {
    for (const file of client.buttonFiles) {
      const importedFile = await import(
        path.resolve(`./src/interactions/buttons/${file}`)
      );
      const button = new importedFile.default();

      client.buttons.set(button.customId, button);
    }
  }

  async menuHandler(client: App): Promise<void> {
    for (const file of client.menuFiles) {
      const importedFile = await import(
        path.resolve(`./src/interactions/menus/${file}`)
      );
      const menu = new importedFile.default();

      client.menus.set(menu.customId, menu);
    }
  }

  async modalHandler(client: App): Promise<void> {
    for (const file of client.modalFiles) {
      const importedFile = await import(
        path.resolve(`./src/interactions/modals/${file}`)
      );
      const modal = new importedFile.default();

      client.modals.set(modal.customId, modal);
    }
  }
}
