export const routes = [
  {
    path: "/search",
    method: "GET",
    handler(req, res) {
      var query = req.query.q || "";
      var url = "https://www.google.com/search?q=" + encodeURIComponent(query);
      res.redirect(url);
    }
  }
];
