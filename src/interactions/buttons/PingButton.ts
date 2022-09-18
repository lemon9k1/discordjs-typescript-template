import { ButtonInteraction } from "discord.js";
import PingOptions from "../../builders/PingOptions";

export default class PingButton {
  customId: string;
  options: PingOptions;

  constructor() {
    this.customId = "pingButton";
    this.options = new PingOptions();
  }

  async execute(interaction: ButtonInteraction): Promise<void> {
    await interaction.reply({
      embeds: [this.options.buildEmbeds()],
      components: [this.options.buildMenus(), this.options.buildButtons()],
    });
  }
}
