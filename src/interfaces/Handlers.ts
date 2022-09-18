import {
  ButtonInteraction,
  Client,
  Collection,
  CommandInteraction,
  SlashCommandBuilder,
} from "discord.js";

export interface Event {
  name: string;
  execute: () => void;
}

export interface Command {
  name: string;
  desc: string;
  execute: (interaction: CommandInteraction) => Promise<void>;
}

export interface Job {
  jobRepeat: boolean;
  jobMs: number;
  execute: () => void;
}

export interface Button {
  customId: string;
  execute: (interaction: ButtonInteraction) => void;
}

export interface Events extends Client {
  eventFiles: Array<string>;
  events: Collection<string, Event>;
}

export interface Interactions {
  commandFiles: Array<string>;
  commands: Collection<string, Command>;
  slashCommands: Array<SlashCommandBuilder>;
}

export interface Jobs extends Client {
  jobFiles: Array<string>;
  jobs: Collection<string, Job>;
}