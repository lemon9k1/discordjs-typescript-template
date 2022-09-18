import { client } from "../App";

export default class AutoAssignRoles {
  jobMs: number;

  constructor() {
    this.jobMs = 10 * 1 * 1000;

    setInterval(async () => {
      await this.execute();
    }, this.jobMs);
  }

  async execute(): Promise<void> {
    try {
      const guild = await client.guilds.fetch(process.env.GUILD_ID as string);
      const guildMembers = await guild.members.fetch();
      const roleIds = JSON.parse(process.env.ROLE_IDS as string);

      guildMembers.map(async (guildMember) => {
        if (!guildMember.presence) return;

        for (const roleId of roleIds) {
          if (guildMember.roles.cache.has(roleId)) return;

          await guildMember.roles.add(roleId);
        }
      });
    } catch (e) {
      console.error(e);
    }
  }
}
