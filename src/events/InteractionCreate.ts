import { CommandInteraction } from "discord.js";
import { client } from "../App";

export default class InteractionCreate {
  name: string;

  constructor() {
    this.name = "interactionCreate";
    this.execute();
  }

  execute(): void {
    client.on(this.name, (interaction: CommandInteraction) => {
      if (!interaction.isChatInputCommand()) return;

      const { commandName } = interaction;

      client.commands.map((command) => {
        if (command.name === commandName) command.execute(interaction);
      });
    });
  }
}
