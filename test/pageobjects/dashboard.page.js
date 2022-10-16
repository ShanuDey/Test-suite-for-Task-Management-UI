const Page = require("./page");

class DashboardPage extends Page {
  get addTaskButton() {
    return $("//button[@id='add-button']");
  }

  get textareaAddTask() {
    return $("//textarea[@id='input-textfield']");
  }

  get checkboxStatus() {
    return $("//input[@id='status']");
  }

  get inputDate() {
    return $("//input[@id='date']");
  }

  get submitButton() {
    return $("//button[@id='submit-button']");
  }

  get closeButton() {
    return $("//button[@id='close-button']");
  }

  get allTaskListItems() {
    return $$("//div[@id='task-list-item']");
  }

  taskListItemDate(task) {
    return $(`//div[@id='tasks-listitem-label-${task.replace(/\s/g, "")}']/p`);
  }

  taskListItem(task) {
    return $(`//div[@id='tasks-listitem-label-${task.replace(/\s/g, "")}']`);
  }

  taskListItemStatusCheckbox(task) {
    return $(
      `//input[@aria-labelledby='tasks-listitem-label-${task.replace(
        /\s/g,
        ""
      )}']`
    );
  }

  taskItemDeleteButton(task) {
    return $(
      `//div[@id='tasks-listitem-label-${task.replace(
        /\s/g,
        ""
      )}']//ancestor::li//button[@id='delete-icon']`
    );
  }

  get logoutButton() {
    return $("//button[@id='LogoutButton']");
  }

  taskItemCheckbox(task) {
    return $(
      `//div[@id='tasks-listitem-label-${task.replace(
        /\s/g,
        ""
      )}']/preceding-sibling::div//input`
    );
  }

  get editTaskTextarea() {
    return $("//textarea[@id='input-textarea']");
  }

  get editTaskDate() {
    return $("//form[@id='edit-task-form']//input[@id='date']");
  }

  get editTaskStatus() {
    return $("//form[@id='edit-task-form']/div[2]//span");
  }

  get editTaskSubmitButton() {
    return $("//form[@id='edit-task-form']//button[@id='submit-button']");
  }
}

module.exports = new DashboardPage();
