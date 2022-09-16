import {
  Client,
  Collection,
  CommandInteraction,
  SlashCommandBuilder,
} from "discord.js";

export interface Command {
  name: string;
  desc: string;
  execute: (interaction: CommandInteraction) => Promise<void>;
}

export interface Event {
  name: string;
  execute: () => void;
}

export interface Events extends Client {
  eventFiles: Array<string>;
  events: Collection<string, Event>;
}

export interface Commands extends Client {
  commandFiles: Array<string>;
  commands: Collection<string, Command>;
  slashCommands: Array<SlashCommandBuilder>;
}
