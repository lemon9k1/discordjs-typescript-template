export default class Ping {
  name: string;
  desc: string;

  constructor() {
    this.name = "ping";
    this.desc = "Pong!";
  }

  async execute(interaction: any): Promise<void> {
    await interaction.reply("Pong!");
  }
}
