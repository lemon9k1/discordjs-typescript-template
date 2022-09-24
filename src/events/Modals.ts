import { ModalSubmitInteraction } from "discord.js";
import { client } from "../App";

export default class Modals {
  name: string;

  constructor() {
    this.name = "interactionCreate";

    this.execute();
  }

  execute(): void {
    client.on(this.name, (interaction: ModalSubmitInteraction) => {
        if (!interaction.isModalSubmit()) return;

      const { customId } = interaction;

      client.modals.map((modal) => {
        if (modal.customId === customId) modal.execute(interaction);
      });
    });
  }
}
