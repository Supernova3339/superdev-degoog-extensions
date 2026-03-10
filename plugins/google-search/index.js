export const slot = {
  id: "google-redirect",
  name: "Google Search",
  position: "above-results",

  trigger(query) {
    return true;
  },

  async execute(query) {
    var url = "https://www.google.com/search?q=" + query.replace(/ /g, "+");
    window.location.href = url;
    return { html: "" };
  }
};
