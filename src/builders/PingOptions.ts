import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  SelectMenuBuilder,
} from "discord.js";

export default class PingOptions {
  buttonRow: ActionRowBuilder<ButtonBuilder>;
  menuRow: ActionRowBuilder<SelectMenuBuilder>;

  constructor() {
    this.buttonRow = new ActionRowBuilder();
    this.menuRow = new ActionRowBuilder();
  }

  buildButtons() {
    return this.buttonRow.addComponents(
      new ButtonBuilder()
        .setCustomId("pingButton")
        .setLabel("Ping Again!")
        .setStyle(ButtonStyle.Primary)
    );
  }

  buildMenus() {
    return this.menuRow.addComponents(
      new SelectMenuBuilder()
        .setCustomId("pingMenu")
        .setPlaceholder("Nothing selected")
        .addOptions(
          {
            label: "Select me",
            description: "This is a description",
            value: "first_option",
          },
          {
            label: "You can select me too",
            description: "This is also a description",
            value: "second_option",
          }
        )
    );
  }

  buildEmbeds() {
    return new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle("Pong!")
      .setURL("https://discord.js.org/")
      .setAuthor({
        name: "Some name",
        iconURL: "https://i.imgur.com/AfFp7pu.png",
        url: "https://discord.js.org",
      })
      .setDescription("Some description here")
      .setThumbnail("https://i.imgur.com/AfFp7pu.png")
      .addFields(
        { name: "Regular field title", value: "Some value here" },
        { name: "\u200B", value: "\u200B" },
        { name: "Inline field title", value: "Some value here", inline: true },
        { name: "Inline field title", value: "Some value here", inline: true }
      )
      .addFields({
        name: "Inline field title",
        value: "Some value here",
        inline: true,
      })
      .setImage("https://i.imgur.com/AfFp7pu.png")
      .setTimestamp()
      .setFooter({
        text: "Some footer text here",
        iconURL: "https://i.imgur.com/AfFp7pu.png",
      });
  }
}
