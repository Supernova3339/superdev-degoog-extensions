export default {
  name: "Alert",
  description: "Shows an alert box",
  trigger: "alert",

  async execute(args) {
    return {
      title: "Alert",
      html: "<script>alert('" + args + "');</script>"
    };
  }
};
