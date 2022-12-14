import { ModalBuilder, SelectMenuInteraction } from "discord.js";
import PingOptions from "../../builders/PingOptions";

export default class PingMenu {
  customId: string;
  options: PingOptions;
  modal: ModalBuilder;

  constructor() {
    this.customId = "pingMenu";
    this.options = new PingOptions();
    this.modal = this.options.buildModals();
  }

  async execute(interaction: SelectMenuInteraction): Promise<void> {
    try {
      await interaction.showModal(this.modal);
    } catch (e) {
      console.error(e);
    }
  }
}
