export default {
  name: "Current Time",
  description: "Shows current time",
  trigger: "time",

  async execute(args) {
    var d = new Date();
    var time = d.toString();

    return {
      title: "Time",
      html: "<div>" + time + "</div>"
    };
  }
};
