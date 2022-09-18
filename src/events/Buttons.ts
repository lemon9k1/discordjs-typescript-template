import { ButtonInteraction } from "discord.js";
import { client } from "../App";

export default class Buttons {
  name: string;

  constructor() {
    this.name = "interactionCreate";

    this.execute();
  }

  execute(): void {
    client.on(this.name, (interaction: ButtonInteraction) => {
      if (!interaction.isButton()) return;

      const { customId } = interaction;

      client.buttons.map((button) => {
        if (button.customId === customId) button.execute(interaction);
      });
    });
  }
}
