Feature: This is for tasklist test scenario automation

  Background: Login with the correct credentials
    Given I am on the login page
      And I login with test@test.com and testpassword

  @AddTask
  Scenario Outline: Add task to the task list
    When I click on the text area of add todo input
      And I add "<task>" on <date> as <status>
    Then I verify "<task>" on <date> as <status> is added in the tasklist

    Examples:
        | task              | date       | status    |
        | Add a sample task | 10/22/2022 | Completed |
