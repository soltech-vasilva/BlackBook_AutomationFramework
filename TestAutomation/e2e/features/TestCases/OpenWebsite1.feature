Feature: Open Website

  Rules:
    -check 1
    -check 2

  Background:
    Given I enter BlackBook Website

  @one
  Scenario Outline:   Open Website
    When I enter my first name <firstName>
    And I enter my last name <lastName>
    And I enter my email address <emailAddress>
    And I enter my phone number <phoneNumber>
 #  Then I should not see any error displayed
    When I click Cancel Button

Examples:
            | firstName     | lastName  | emailAddress              | phoneNumber   |
#phone number inputs
            #valid phone number with parenthesis with dashes
            |    Victor | Silva | victorsilva@email.com   | (123)456-7890 |

    @two
  Scenario Outline:   Open Website
    When I enter my first name <firstName>
    And I enter my last name <lastName>
    And I enter my email address <emailAddress>
    And I enter my phone number <phoneNumber>
 #  Then I should not see any error displayed
    When I click Cancel Button


Examples:
            | firstName     | lastName  | emailAddress              | phoneNumber   |
#phone number inputs
            #valid phone number with parenthesis with dashes
            |    AfirstName | AlastName | AemailAddress@email.com   | (123)456-7890 |
            #valid phone number with dashes
            |    AfirstName | AlastName | AemailAddress@email.com   | 123-456-7890  |
            #valid phone number with no dashes
            |    AfirstName | AlastName | AemailAddress@email.com   | 1234567890    |
            #valid phone number with parenthesis no dashes
            |    AfirstName | AlastName | AemailAddress@email.com   | (123)4567890  |
            #valid phone number with parenthesis no dashes
            |    AfirstName | AlastName | AemailAddress@email.com   | (123)4567890  |
#
##first name and last name inputs
#            #valid first name and last name
#            |    Afirstname   | Alastname    | AemailAddress@email.com   | 123-456-7890  |
#            #valid first name and last name with number
#            |    Afirstname1  | Alastname1   | AemailAddress@email.com   | 123-456-7890  |
#            #valid first name and last name with number with symbols
#            |    Afirstname1@ | Alastname1@  | AemailAddress@email.com   | 123-456-7890  |
#            #valid first name and last name with number with symbols
#            |    Afirstname1@ | Alastname1@  | AemailAddress@email.com   | 123-456-7890  |
#            #valid first name and last name are the same name
#            |    Afirstname1@ | Afirstname1@ | AemailAddress@email.com   | 123-456-7890  |
#
##email inputs
#            #valid email with numbers
#            |    Afirstname   | Alastname    | AemailAddress1@email.com   | 123-456-7890  |
#            #valid email with symbols !
#            |    Afirstname   | Alastname    | AemailAddress!@email.com   | 123-456-7890  |
#            #valid email with symbols _
#            |    Afirstname   | Alastname    | AemailAddress_@email.com   | 123-456-7890  |
#            #valid email with symbols . in between letters
#            |    Afirstname   | Alastname    | Aemail.Address@email.com   | 123-456-7890  |
#            #valid email with less on @ and .
#            |    Afirstname   | Alastname    | AemailAddress1@a.c         | 123-456-7890  |




#            #valid email with symbols . end of letters
#fail        |    Afirstname   | Alastname    | AemailAddress.@email.com   | 123-456-7890  |

#            #empty phone number
#            |    AfirstName | AlastName | AemailAddress@email.com   |  |