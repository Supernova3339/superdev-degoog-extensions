export default {
  name: "Echo",
  description: "Repeats what you type",
  trigger: "echo",

  async execute(args) {
    return {
      title: "Echo",
      html: "<div>" + args + "</div>"
    };
  }
};
