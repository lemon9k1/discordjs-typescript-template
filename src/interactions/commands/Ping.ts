import { ActionRowBuilder, ButtonBuilder, CommandInteraction, EmbedBuilder, SelectMenuBuilder } from "discord.js";
import PingOptions from "../../builders/PingOptions";

export default class Ping {
  name: string;
  desc: string;
  options: PingOptions;
  embeds: EmbedBuilder;
  menus: ActionRowBuilder<SelectMenuBuilder>;
  buttons: ActionRowBuilder<ButtonBuilder>;

  constructor() {
    this.name = "ping";
    this.desc = "Pong!";
    this.options = new PingOptions();
    this.embeds = this.options.buildEmbeds();
    this.menus = this.options.buildMenus();
    this.buttons = this.options.buildButtons();
  }

  async execute(interaction: CommandInteraction): Promise<void> {
    await interaction.reply({
      embeds: [this.embeds],
      components: [this.menus, this.buttons],
    });
  }
}
