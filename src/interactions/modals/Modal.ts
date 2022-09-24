import {
  ActionRowBuilder,
  ButtonBuilder,
  EmbedBuilder,
  MessageComponentInteraction,
  SelectMenuBuilder,
} from "discord.js";
import PingOptions from "../../builders/PingOptions";

export default class Modal {
  customId: string;
  options: PingOptions;
  embeds: EmbedBuilder;
  menus: ActionRowBuilder<SelectMenuBuilder>;
  buttons: ActionRowBuilder<ButtonBuilder>;

  constructor() {
    this.customId = "modal";
    this.options = new PingOptions();
    this.embeds = this.options.buildEmbeds();
    this.menus = this.options.buildMenus();
    this.buttons = this.options.buildButtons();
  }

  async execute(interaction: MessageComponentInteraction): Promise<void> {
    try {
      await interaction.reply({
        embeds: [this.embeds],
        components: [this.menus, this.buttons],
      });
    } catch (e) {
      console.error(e);
    }
  }
}
