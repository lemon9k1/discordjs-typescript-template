export default class Ping {
  name: string;
  desc: string;

  constructor() {
    this.name = "ping";
    this.desc = "Pong!";
  }

  execute(): void {
    console.log('Working!');
  }
}
