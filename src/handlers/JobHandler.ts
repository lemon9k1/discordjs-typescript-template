import path from "path";
import App from "../App";

export default class JobHandler {
  constructor(client: App) {
    this.jobHandler(client);
  }

  async jobHandler(client: App): Promise<void> {
    for (const file of client.jobFiles) {
      const importedFile = await import(path.resolve(`./src/jobs/${file}`));
      const job = new importedFile.default();

      client.jobs.set(job.name, job);
    }
  }
}
