import { SelectMenuInteraction } from "discord.js";
import { client } from "../App";

export default class Menus {
  name: string;

  constructor() {
    this.name = "interactionCreate";

    this.execute();
  }

  execute(): void {
    client.on(this.name, (interaction: SelectMenuInteraction) => {
      if (!interaction.isSelectMenu()) return;

      const { customId } = interaction;

      client.menus.map((menu) => {
        if (menu.customId === customId) menu.execute(interaction);
      });
    });
  }
}
