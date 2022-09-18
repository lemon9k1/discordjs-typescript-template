import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  CommandInteraction,
} from "discord.js";

export default class Ping {
  name: string;
  desc: string;

  constructor() {
    this.name = "ping";
    this.desc = "Pong!";
  }

  async execute(interaction: CommandInteraction): Promise<void> {
    const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
      new ButtonBuilder()
        .setCustomId("pingAgain")
        .setLabel("Ping Again!")
        .setStyle(ButtonStyle.Primary)
    );

    await interaction.reply({ content: "Pong!", components: [row] });
  }
}
