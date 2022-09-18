import { CommandInteraction } from "discord.js";
import PingOptions from "../../builders/PingOptions";

export default class Ping {
  name: string;
  desc: string;
  options: PingOptions;

  constructor() {
    this.name = "ping";
    this.desc = "Pong!";
    this.options = new PingOptions();
  }

  async execute(interaction: CommandInteraction): Promise<void> {
    await interaction.reply({
      embeds: [this.options.buildEmbeds()],
      components: [this.options.buildMenus(), this.options.buildButtons()],
    });
  }
}
