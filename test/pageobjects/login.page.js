const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputEmail() {
    return $("//input[@id='email']");
  }

  get inputPassword() {
    return $("//input[@id='password']");
  }

  get btnSubmit() {
    return $('//button[@type="submit"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using email and password
   */
  async login(email, password) {
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("login");
  }
}

module.exports = new LoginPage();
