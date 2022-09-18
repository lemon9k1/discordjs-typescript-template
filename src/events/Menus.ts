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
      console.log('working');
      if (!interaction.isSelectMenu()) return;

      console.log('working');

      const { customId } = interaction;

      console.log(customId);

      client.menus.map((menu) => {
        if (menu.customId === customId) menu.execute(interaction);
      });
    });
  }
}
