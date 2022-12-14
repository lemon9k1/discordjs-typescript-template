import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonInteraction,
  EmbedBuilder,
  SelectMenuBuilder,
} from "discord.js";
import PingOptions from "../../builders/PingOptions";

export default class PingButton {
  customId: string;
  options: PingOptions;
  buttons: ActionRowBuilder<ButtonBuilder>;
  menus: ActionRowBuilder<SelectMenuBuilder>;
  embeds: EmbedBuilder;

  constructor() {
    this.customId = "pingButton";
    this.options = new PingOptions();
    this.menus = this.options.buildMenus();
    this.buttons = this.options.buildButtons();
    this.embeds = this.options.buildEmbeds();
  }

  async execute(interaction: ButtonInteraction): Promise<void> {
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
