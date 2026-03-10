let template = "";

export default {
  name: "Coin Flip",
  description: "Flip a coin",
  trigger: "flip",

  init(ctx) {
    template = ctx.template;
  },

  async execute(args) {
    const result = Math.random() < 0.5 ? "heads" : "tails";

    const html = template.replace("{{result}}", result);

    return {
      title: "Coin Flip",
      html: html
    };
  }
};
