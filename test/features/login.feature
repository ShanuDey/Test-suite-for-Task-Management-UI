Feature: This is for Login page test automation

  Scenario Outline: Verify only login correct user credential can access dashboard page
    Given I am on the login page
    When I login with <email> and <password>
    Then I should see a toast message saying <message>

    Examples:
      | email          | password             | message             |
      | shanu@test.com | SuperSecretPassword! | Login Failed !!     |
      | test@test.com  | testpassword         | Login Successful !! |
