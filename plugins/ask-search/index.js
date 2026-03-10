export default {
  name: "Ask",
  description: "Search on Ask.com",
  trigger: "ask",

  async execute(args) {
    var url = "https://www.ask.com/web?q=" + args.replace(/ /g, "+");

    return {
      title: "Ask",
      html: "<script>window.location.href='" + url + "';</script>"
    };
  }
};
