import path from "path";
import { Jobs } from "../interfaces/Handlers";

export default class JobHandler {
  constructor(client: Jobs) {
    this.jobHandler(client);
  }

  async jobHandler(client: Jobs): Promise<void> {
    for (const file of client.jobFiles) {
      const importedFile = await import(path.resolve(`./src/jobs/${file}`));
      const job = new importedFile.default();

      client.jobs.set(job.name, job);
    }
  }
}
