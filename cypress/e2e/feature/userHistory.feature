Feature: Test Devsu

Scenario: Login and Buy 
    Given I am on the Neoris home page
    When I login with the following credentials
      | username      | password |
      | standard_user | secret_sauce|
    Then Choose below different products
      | product_name |
      | Sauce Labs Backpack |
      | Sauce Labs Bike Light |
      | Sauce Labs Bolt T-Shirt |
      | Sauce Labs Fleece Jacket |
      |Sauce Labs Onesie |
      | Test.allTheThings() T-Shirt (Red) |
    Then I click on the shopping cart and click on the checkout button
    Then I fill out the form with the following information
      | first_name | last_name | zip_code |
      | John       | Doe       | 12345    |
    Then I click on the continue button and finish button
    Then I should see Thank you for your order
    