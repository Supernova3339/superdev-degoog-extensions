export default {
  name: "Yahoo Search",
  description: "Search with Yahoo",
  trigger: "yahoo",

  async execute(args) {
    var url = "https://search.yahoo.com/search?p=" + args.replace(/ /g, "+");

    return {
      title: "Yahoo",
      html: "<script>window.location.href='" + url + "';</script>"
    };
  }
};
