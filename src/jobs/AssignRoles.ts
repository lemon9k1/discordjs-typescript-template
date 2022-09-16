export default class AssignRoles {
  jobRepeat: boolean;
  jobMs: number;

  constructor() {
    this.jobRepeat = true;
    this.jobMs = 60 * 1 * 1000;
  }

  async execute(): Promise<void> {}
}
