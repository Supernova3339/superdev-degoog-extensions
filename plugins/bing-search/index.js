export default {
  name: "Bing Search",
  description: "Search with Bing",
  trigger: "bing",

  async execute(args) {
    var query = args;
    var url = "https://www.bing.com/search?q=" + query.replace(/ /g, "+");

    return {
      title: "Bing Search",
      html: "<a href='" + url + "'>Search on Bing</a><script>window.open('" + url + "', '_blank');</script>"
    };
  }
};
