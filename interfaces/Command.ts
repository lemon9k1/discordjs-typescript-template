export interface Command {
  name: string;
  desc: string;
  execute: () => void;
}

export interface Event {
  name: string;
  execute: () => void;
}
