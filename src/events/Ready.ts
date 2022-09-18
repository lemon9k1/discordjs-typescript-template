import { ClientUser } from "discord.js";
import { client } from "../App";

export default class Ready {
  name: string;

  constructor() {
    this.name = "ready";
    
    this.execute();
  }

  execute(): void {
    client.on(this.name, () => {
      console.log(`Successfully authenticated as ${(client.user as ClientUser).tag}!`);
    });
  }
}
