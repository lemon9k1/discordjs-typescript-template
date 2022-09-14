export interface Command {
  name: string;
  desc: string;
  execute: (interaction: any) => void;
}

export interface Event {
  name: string;
  execute: () => void;
}
