import { Event } from "../interfaces/Command";
import InteractionCreate from "../events/InteractionCreate";
export default class Events {
  events: Array<Event>;

  constructor() {
    this.events = [new InteractionCreate()];

    this.registerEvents(this.events);
  }

  registerEvents(events: Array<Event>): void {
    for (const event of events) {
      event.execute();
    }
  }
}
