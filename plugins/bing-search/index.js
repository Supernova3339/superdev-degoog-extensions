export default {
  name: "Bing Search",
  description: "Search with Bing",
  trigger: "bing",

  async execute(args) {
    const query = args;
    const url = "https://www.bing.com/search?q=" + encodeURIComponent(query);

    return {
      title: "Bing Search",
      html: "<script>window.location.replace('" + url + "');</script>"
    };
  }
};