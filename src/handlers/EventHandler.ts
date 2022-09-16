import path from "path";
import { Events } from "../interfaces/Handlers";

export default class EventHandler {
  constructor(client: Events) {
    this.eventHandler(client);
  }

  async eventHandler(client: Events): Promise<void> {
    for (const file of client.eventFiles) {
      const importedFile = await import(path.resolve(`./src/events/${file}`));
      const event = new importedFile.default();

      client.events.set(event.name, event);
    }
  }
}
