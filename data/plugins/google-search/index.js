export const slot = {
  id: "google-redirect",
  name: "Google Search",
  position: "above-results",

  trigger(query) {
    return true;
  },

  async execute(query) {
    var url = "https://www.google.com/search?q=" + query.replace(/ /g, "+");
    return {
      html: "<div><script>window.location.href='" + url + "';</script></div>"
    };
  }
};
