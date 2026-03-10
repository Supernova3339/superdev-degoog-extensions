export default {
  name: "Reload Page",
  description: "Reload the page",
  trigger: "reload",

  async execute(args) {
    return {
      title: "Reload",
      html: "<script>location.reload();</script>"
    };
  }
};
