const { When, Then } = require("@wdio/cucumber-framework");
const DashboardPage = require("../pageobjects/dashboard.page");

When(/^I click on the text area of add todo input$/, async () => {
  await DashboardPage.addTaskButton.waitForDisplayed();
  await DashboardPage.addTaskButton.click();
});

When(/^I add "(.*)" on (.*) as (.*)$/, async (task, date, status) => {
  await DashboardPage.textareaAddTask.setValue(task);
  if (status === "Completed") await DashboardPage.checkboxStatus.click();
  await DashboardPage.inputDate.setValue(date);
  await DashboardPage.submitButton.click();
});

Then(
  /^I verify "(.*)" on (.*) as (.*) is added in the tasklist$/,
  async (task, date, status) => {
    expect(DashboardPage.taskListItem(task)).toBeDisplayed();
    if (status === "Completed")
      expect(DashboardPage.taskListItemStatusCheckbox(task)).toBeChecked();
    else
      expect(DashboardPage.taskListItemStatusCheckbox(task)).not.toBeChecked();
    expect(await DashboardPage.taskListItemDate(task).getText()).toEqual(
      new Date(date).toDateString()
    );
  }
);

When(/^I delete "(.*)" by clicking on delete icon$/, async (task) => {
  await DashboardPage.taskItemDeleteButton(task).click();
});

Then(/^I verify "(.*)" is deleted from the tasklist$/, async (task) => {
  expect(DashboardPage.taskListItem(task)).not.toBeDisplayed();
});

Then(/^I logout from the dashboard$/, async() => {
  await DashboardPage.logoutButton.click();
})

When(/^I change "(.*)" status from (.*) to (.*)$/, async (task, status, newstatus) => {
  if (status !== newstatus) {
    await DashboardPage.taskItemCheckbox(task).click();
  }
});

Then(/^I verify "(.*)" status is changed to (.*)$/, async(task, status) => {
  if (status === "Completed")
      expect(DashboardPage.taskListItemStatusCheckbox(task)).toBeChecked();
    else
      expect(DashboardPage.taskListItemStatusCheckbox(task)).not.toBeChecked();
});

When(/^I update "(.*)" to "(.*)" on (.*) as (.*) in the tasklist$/, async(task, newtask, newdate, newstatus) => {
  await DashboardPage.taskListItem(task).doubleClick();
  await DashboardPage.editTaskTextarea.setValue(newtask);
  await DashboardPage.editTaskDate.setValue(newdate);
  const currentStatus = await DashboardPage.editTaskStatus.getText();
  if(currentStatus !== newstatus) {
    await DashboardPage.editTaskStatus.click();
  }
  await DashboardPage.editTaskSubmitButton.click();
});
