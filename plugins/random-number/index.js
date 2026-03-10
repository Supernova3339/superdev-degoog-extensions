export default {
  name: "Random Number",
  description: "Generate random number",
  trigger: "random",

  async execute(args) {
    var num = Math.random();

    return {
      title: "Random Number",
      html: "<div style='padding:20px'><h1>" + num + "</h1></div>"
    };
  }
};
