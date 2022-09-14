import { Client, GatewayIntentBits } from "discord.js";
import "dotenv/config";
import Commands from "./Commands";
import Events from "./Events";

class Never {
  client: Client;

  constructor() {
    this.client = this.buildClient();
    
    this.client.login(process.env.DISCORD_TOKEN);
  }

  buildClient(): Client<boolean> {
    return new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
      ],
    });
  }
}

export const client = new Never().client;
new Commands();
new Events();
