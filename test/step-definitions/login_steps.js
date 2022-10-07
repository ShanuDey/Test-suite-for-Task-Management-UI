const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const CommonPage = require('../pageobjects/common.page')

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (.*) and (.*)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a toast message saying (.*)$/, async (message) => {
    await expect(CommonPage.toast).toBeDisplayed();
    await expect(CommonPage.toast).toHaveTextContaining(message);
});

