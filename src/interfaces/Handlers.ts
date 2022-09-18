import {
  ButtonInteraction,
  Client,
  Collection,
  CommandInteraction,
  SelectMenuInteraction,
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

export interface Menu {
  customId: string;
  execute: (interaction: SelectMenuInteraction) => void;
}