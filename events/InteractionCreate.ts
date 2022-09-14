import fs from "fs";
import path from "path";
import Commands from "../src/Commands";
import { client } from "../src/App";

export default class InteractionCreate extends Commands {
  name: string;
  commandNames: Array<string>;

  constructor() {
    super();

    this.name = "interactionCreate";
    this.commandNames = fs
      .readdirSync(path.resolve("./commands"))
      .filter((file) => file.endsWith(".ts"))
      .map((file) => file.replace(".ts", "").toLowerCase());
  }

  execute(): void {
    client.on(this.name, async (interaction) => {
      if (!interaction.isChatInputCommand()) return;

      const { commandName } = interaction;

      for (const command of this.commands) {
        if (command.name === commandName) command.execute(interaction);
      }
    });
  }
}
