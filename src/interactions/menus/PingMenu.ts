import { SelectMenuInteraction } from "discord.js";
import PingOptions from "../../builders/PingOptions";

export default class PingMenu {
  customId: string;
  options: PingOptions;

  constructor() {
    this.customId = "pingMenu";
    this.options = new PingOptions();
  }

  async execute(interaction: SelectMenuInteraction): Promise<void> {
    await interaction.reply({
      embeds: [this.options.buildEmbeds()],
      components: [this.options.buildMenus(), this.options.buildButtons()],
    });
  }
}
