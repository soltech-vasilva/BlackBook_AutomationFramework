##################################
#    USER PROFILE Test cases     #
##################################

Feature: Enter User Profile Information

  Rules:
  -Verify that All inputs boxes are working. (Test case A)

  Question:
  -What happens if email entered is bad (display ERROR)? Yes (Test case B-1)
  -What happens if phone number entered is bad (display ERROR)? Yes (Test case B-2)
  -What happens if fields are empty on require fields (display ERROR)? Yes (Test case C)

  Background:
    Given I enter BlackBook Website

#######################################################################################################################
#                                             Test cases A                                                            #
#######################################################################################################################
@TestCases_A
  Scenario Outline: Enter good User Profile data no error display
    When I enter my first name <firstName>
    And I enter my last name <lastName>
    And I enter my email address <emailAddress>
    And I enter my phone number <phoneNumber>
      Then I should not see in "firstName" errors displayed
      Then I should not see in "lastName" errors displayed
      Then I should not see in "emailAddress" errors displayed
      Then I should not see in "phoneNumber" errors displayed
    When I click Cancel Button

Examples:
            | firstName     | lastName  | emailAddress              | phoneNumber   |
#phone number inputs
            #valid phone number with parenthesis and dashes
            |    AfirstName | AlastName | AemailAddress@email.com   | (123)456-7890 |
            #valid phone number with dashes
            |    AfirstName | AlastName | AemailAddress@email.com   | 123-456-7890  |
            #valid phone number with no dashes
            |    AfirstName | AlastName | AemailAddress@email.com   | 1234567890    |
            #valid phone number with parenthesis
            |    AfirstName | AlastName | AemailAddress@email.com   | (123)4567890  |

#first name and last name inputs
            #valid first name and last name
            |    Afirstname   | Alastname    | AemailAddress@email.com   | 123-456-7890  |
            #valid first name and last name with number
            |    Afirstname1  | Alastname1   | AemailAddress@email.com   | 123-456-7890  |
            #valid first name and last name with number and symbols
            |    Afirstname1@ | Alastname1@  | AemailAddress@email.com   | 123-456-7890  |
            #valid first name and last name are the same name
            |    Afirstname1@ | Afirstname1@ | AemailAddress@email.com   | 123-456-7890  |

#email inputs
            #valid email with numbers
            |    Afirstname   | Alastname    | AemailAddress1@email.com   | 123-456-7890  |
            #valid email with symbols !
            |    Afirstname   | Alastname    | AemailAddress!@email.com   | 123-456-7890  |
            #valid email with symbols _
            |    Afirstname   | Alastname    | AemailAddress_@email.com   | 123-456-7890  |
            #valid email with symbols . in between letters
            |    Afirstname   | Alastname    | Aemail.Address@email.com   | 123-456-7890  |
            #valid email with less on @ and .
            |    Afirstname   | Alastname    | AemailAddress1@a.c         | 123-456-7890  |

########################################################################################################################
##                                             Test cases B                                                            #
########################################################################################################################
@TestCases_B-1
  Scenario Outline: Enter wrong User Profile email will throw error
    When I enter my first name <firstName>
    And I enter my last name <lastName>
    And I enter my email address <emailAddress>
    And I enter my phone number <phoneNumber>
      Then I should see "emailAddress" errors "Invalid email address" displayed for this "filled" field
    When I click Cancel Button


    Examples:
      | firstName       | lastName     | emailAddress               | phoneNumber   |
#invalid email with symbols . end of letters
      |    Afirstname   | Alastname    | AemailAddress.@email.com   | 123-456-7890  |
#invalid email with symbols @ end of letters
      |    AfirstName   | AlastName    | AemailAddress@@email.com   | 123-456-7890  |
#vinalid email with just A
      |    AfirstName   | AlastName    | A                          | 123-456-7890  |

@TestCases_B-2
Scenario Outline: Enter wrong User Profile phone number will throw error
  When I enter my first name <firstName>
  And I enter my last name <lastName>
  And I enter my email address <emailAddress>
  And I enter my phone number <phoneNumber>
    Then I should see "phoneNumber" errors "Must be a valid 10 digit number" displayed for this "filled" field
  When I click Cancel Button

    Examples:
      | firstName       | lastName     | emailAddress               | phoneNumber   |
##invalid phone number with  A letter
      |    AfirstName   | AlastName    | AemailAddress@email.com    |  a            |
#invalid phone number with  A letter and numbers
      |    AfirstName   | AlastName    | AemailAddress@email.com    | a23-456-7890  |
#invalid phone number with no area code
      |    AfirstName   | AlastName    | AemailAddress@email.com    | 456-7890      |

#######################################################################################################################
#                                             Test cases C                                                            #
#######################################################################################################################
@TestCases_C
Scenario Outline: Enter empty User Profile data will throw error
  When I enter my first name <firstName>
  And I enter my last name <lastName>
  And I enter my email address <emailAddress>
  And I enter my phone number <phoneNumber>
    Then I should see "firstName" errors "Required" displayed for this "empty" field
    Then I should see "lastName" errors "Required" displayed for this "empty" field
    Then I should see "emailAddress" errors "Required" displayed for this "empty" field
    #Then I should see "phoneNumber" errors "Required" displayed for this "empty" field
  When I click Cancel Button

    Examples:
      | firstName     | lastName  | emailAddress              | phoneNumber   |
#All Empty Fields
      |               |           |                           |               |
#First Name is Empty Field
      |               | AlastName | AemailAddress@email.com   | (123)456-7890 |
##Last Name is Empty Field
      |    AfirstName |           | AemailAddress@email.com   | (123)456-7890 |
#Email is Empty Field
      |    AfirstName | AlastName |                           | (123)456-7890 |
#Phone is Empty Field
      |    AfirstName | AlastName | AemailAddress@email.com   |               |


