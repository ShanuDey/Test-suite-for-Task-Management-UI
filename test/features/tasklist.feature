Feature: This is for tasklist test scenario automation

  Background: Login with the correct credentials
    Given I am on the login page
      And I login with test@test.com and testpassword

  @AddTask
  Scenario Outline: Add task to the task list
    When I click on the text area of add todo input
      And I add "<task>" on <date> as <status>
    Then I verify "<task>" on <date> as <status> is added in the tasklist
      And I logout from the dashboard

    Examples:
        | task              | date       | status    |
        | Add a sample task | 10/22/2022 | Completed |

  @DeleteTask
  Scenario Outline: Delete task to the task list
    When I click on the text area of add todo input
      And I add "<task>" on <date> as <status>
    Then I verify "<task>" on <date> as <status> is added in the tasklist
    When I delete "<task>" by clicking on delete icon
    Then I verify "<task>" is deleted from the tasklist
      And I logout from the dashboard

    Examples:
        | task                 | date       | status    |
        | Delete a sample task | 09/19/2022 | Completed |

  @ChangeTaskStatus
  Scenario Outline: Change task status in the task list
    When I click on the text area of add todo input
      And I add "<task>" on <date> as <status>
    Then I verify "<task>" on <date> as <status> is added in the tasklist
    When I change "<task>" status from <status> to <newstatus>
    Then I verify "<task>" status is changed to <newstatus>
      And I delete "<task>" by clicking on delete icon
      And I logout from the dashboard

    Examples:
        | task               | date       | status    | newstatus  |
        | Change status task | 04/14/2021 | Completed | Incomplete |

  @UpdateTask
  Scenario Outline: Update task in the task list
    When I click on the text area of add todo input
      And I add "<task>" on <date> as <status>
    Then I verify "<task>" on <date> as <status> is added in the tasklist
    When I update "<task>" to "<newtask>" on <newdate> as <newstatus> in the tasklist
    Then I verify "<newtask>" on <newdate> as <newstatus> is added in the tasklist
      And I delete "<newtask>" by clicking on delete icon
      And I logout from the dashboard

    Examples:
        | task                 | date       | status    | newtask          | newdate     | newstatus  |
        | Update a sample task | 02/12/2021 | Completed | Updated the task | 05/12/2021  | Incomplete |