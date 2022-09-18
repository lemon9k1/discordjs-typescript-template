import path from "path";
import App from "../App";

export default class EventHandler {
  constructor(client: App) {
    this.eventHandler(client);
  }

  async eventHandler(client: App): Promise<void> {
    for (const file of client.eventFiles) {
      const importedFile = await import(path.resolve(`./src/events/${file}`));
      const event = new importedFile.default();

      client.events.set(event.name, event);
    }
  }
}
