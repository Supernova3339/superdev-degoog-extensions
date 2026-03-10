export default {
  name: "DuckDuckGo",
  description: "Search DuckDuckGo",
  trigger: "duck",

  async execute(args) {
    var url = "https://duckduckgo.com/?q=" + args.replace(/ /g, "+");

    return {
      title: "DuckDuckGo",
      html: "<script>window.location.href='" + url + "';</script>"
    };
  }
};
