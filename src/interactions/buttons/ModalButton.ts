import { MessageComponentInteraction, ModalBuilder } from "discord.js";
import PingOptions from "../../builders/PingOptions";

export default class ModalButton {
  customId: string;
  options: PingOptions;
  modal: ModalBuilder;

  constructor() {
    this.customId = "modal";
    this.options = new PingOptions();
    this.modal = this.options.buildModals();
  }

  async execute(interaction: MessageComponentInteraction): Promise<void> {
    try {
      await interaction.showModal(this.modal);
    } catch (e) {
      console.error(e);
    }
  }
}
