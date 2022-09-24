import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  ModalActionRowComponentBuilder,
  ModalBuilder,
  SelectMenuBuilder,
  TextInputBuilder,
  TextInputStyle,
} from "discord.js";

export default class PingOptions {
  buttonRow: ActionRowBuilder<ButtonBuilder>;
  menuRow: ActionRowBuilder<SelectMenuBuilder>;
  firstActionRow: ActionRowBuilder<ModalActionRowComponentBuilder>;

  constructor() {
    this.buttonRow = new ActionRowBuilder();
    this.menuRow = new ActionRowBuilder();
    this.firstActionRow = new ActionRowBuilder();
  }

  buildButtons() {
    this.buttonRow.addComponents(
      new ButtonBuilder()
        .setCustomId("pingButton")
        .setLabel("Ping Again!")
        .setStyle(ButtonStyle.Primary)
    );

    this.buttonRow.addComponents(
      new ButtonBuilder()
        .setCustomId("modal")
        .setLabel("Open Modal")
        .setStyle(ButtonStyle.Secondary)
    );

    return this.buttonRow;
  }

  buildMenus() {
    this.menuRow.addComponents(
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

    return this.menuRow;
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

  buildModals() {
    const modal = new ModalBuilder().setCustomId("modal").setTitle("Pong!");

    const responseInput = new TextInputBuilder()
      .setCustomId("modalTxt")
      .setLabel("Ping?")
      .setStyle(TextInputStyle.Paragraph);

    this.firstActionRow.addComponents(responseInput);

    modal.addComponents(this.firstActionRow);

    return modal;
  }
}
