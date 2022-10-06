const Page = require("./page");

class CommonPage extends Page {
  get toast() {
    return $("//div[@role='alert']");
  }
}

module.exports = new CommonPage();
