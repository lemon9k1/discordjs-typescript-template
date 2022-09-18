import { ButtonInteraction } from "discord.js";

export default class PingAgain {
  customId: string;

  constructor() {
    this.customId = "pingAgain";
  }

  async execute(interaction: ButtonInteraction): Promise<void> {
    await interaction.reply("Pong!");
  }
}
