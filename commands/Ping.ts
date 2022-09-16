import { CommandInteraction } from "discord.js";

export default class Ping {
  name: string;
  desc: string;

  constructor() {
    this.name = "ping";
    this.desc = "Pong!";
  }

  async execute(interaction: CommandInteraction): Promise<void> {
    await interaction.reply("Pong!");
  }
}
