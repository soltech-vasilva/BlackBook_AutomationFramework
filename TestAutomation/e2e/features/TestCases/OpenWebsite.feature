##################################
#    USER PROFILE Test cases     #
##################################

Feature: Enter data on "User Profile"

  Rules:
  -Verify that All inputs boxes are working. (Test case A)

  Question:
  -What happens if email entered is bad (display ERROR)? Yes (Test case B-1)
  -What happens if phone number entered is bad (display ERROR)? Yes (Test case B-2)
  -What happens if fields are empty on require fields (display ERROR)? Yes (Test case C)
  -BUGS WHITE SPACES for first name ,last name , email, and password?

  Background:
    Given I enter BlackBook Website

#######################################################################################################################
#                                             Test cases A                                                            #
#######################################################################################################################
@TestCases_A
  Scenario Outline: Enter good User Profile data no error display
    When I enter my first name <firstName>
      Then I should not see in "firstName" errors displayed
    And I enter my last name <lastName>
      Then I should not see in "lastName" errors displayed
    And I enter my email address <emailAddress>
      Then I should not see in "emailAddress" errors displayed
    And I enter my phone number <phoneNumber>
      Then I should not see in "phoneNumber" errors displayed
    And I enter my new Password <newPassWord>
      Then I should not see in "newPassWord" errors displayed
    And I enter my confirm new password <confirmNewPassWord>
      Then I should not see in "confirmNewPassWord" errors displayed
    When I click Cancel Button

Examples:
            | firstName     | lastName  | emailAddress              | phoneNumber   | newPassWord | confirmNewPassWord |
#phone number inputs
            #valid phone number with parenthesis and dashes
            |    AfirstName | AlastName | AemailAddress@email.com   | (123)456-7890 | QaAdmin123  |   QaAdmin123       |
            #valid phone number with dashes
            |    AfirstName | AlastName | AemailAddress@email.com   | 123-456-7890  | QaAdmin123  |   QaAdmin123       |
            #valid phone number with no dashes
            |    AfirstName | AlastName | AemailAddress@email.com   | 1234567890    | QaAdmin123  |   QaAdmin123       |
            #valid phone number with parenthesis
            |    AfirstName | AlastName | AemailAddress@email.com   | (123)4567890  | QaAdmin123  |   QaAdmin123       |

#first name and last name inputs
            #valid first name and last name
            |    Afirstname   | Alastname    | AemailAddress@email.com   | 123-456-7890  | QaAdmin123  |   QaAdmin123  |
            #valid first name and last name with number
            |    Afirstname1  | Alastname1   | AemailAddress@email.com   | 123-456-7890  | QaAdmin123  |   QaAdmin123  |
            #valid first name and last name with number and symbols
            |    Afirstname1@ | Alastname1@  | AemailAddress@email.com   | 123-456-7890  | QaAdmin123  |   QaAdmin123  |
            #valid first name and last name are the same name
            |    Afirstname1@ | Afirstname1@ | AemailAddress@email.com   | 123-456-7890  | QaAdmin123  |   QaAdmin123  |

#email inputs
            #valid email with numbers
            |    Afirstname   | Alastname    | AemailAddress1@email.com   | 123-456-7890  | QaAdmin123  |   QaAdmin123  |
            #valid email with symbols !
            |    Afirstname   | Alastname    | AemailAddress!@email.com   | 123-456-7890  | QaAdmin123  |   QaAdmin123  |
            #valid email with symbols _
            |    Afirstname   | Alastname    | AemailAddress_@email.com   | 123-456-7890  | QaAdmin123  |   QaAdmin123  |
            #valid email with symbols . in between letters
            |    Afirstname   | Alastname    | Aemail.Address@email.com   | 123-456-7890  | QaAdmin123  |   QaAdmin123  |
            #valid email with less on @ and .
            |    Afirstname   | Alastname    | AemailAddress1@a.c         | 123-456-7890  | QaAdmin123  |   QaAdmin123  |

#New Password and Confirm New Password inputs
            #valid Password with letters and number
            |    AfirstName | AlastName | AemailAddress@email.com   | (123)456-7890 | Qaadmin1        |   Qaadmin1       |
            #valid Password with letters and number order
            |    AfirstName | AlastName | AemailAddress@email.com   | (123)456-7890 | 1Qaadmin        |   1Qaadmin       |
            #valid Password with letters , number order and symbols
            |    AfirstName | AlastName | AemailAddress@email.com   | (123)456-7890 | @1Qaadmin       |   @1Qaadmin      |
            #valid Password with letters , number order and symbols
            |    AfirstName | AlastName | AemailAddress@email.com   | (123)456-7890 | @1Q.aadmin      |   @1Q.aadmin     |
             #valid Password with letters and number long password
            |    AfirstName | AlastName | AemailAddress@email.com   | (123)456-7890 | Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx1  |   Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx1 |
            #valid Password with few letters and numbers
            |    AfirstName | AlastName | AemailAddress@email.com   | (123)456-7890 | 123456Aa        |   123456Aa       |

#########################################################################################################################
###                                             Test cases B                                                            #
#########################################################################################################################
@TestCases_B-1
  Scenario Outline: Enter wrong User Profile email address will throw error
    When I enter my first name <firstName>
    And I enter my last name <lastName>
    And I enter my email address <emailAddress>
      But I enter "a wrong Email Address"
      Then I should see "emailAddress" errors "Invalid email address" displayed for this "filled" field
    And I enter my phone number <phoneNumber>
    And I enter my new Password <newPassWord>
    And I enter my confirm new password <confirmNewPassWord>
    When I click Cancel Button

    Examples:
      | firstName       | lastName     | emailAddress               | phoneNumber   |newPassWord  | confirmNewPassWord |
#invalid email with symbols . end of letters
      |    Afirstname   | Alastname    | AemailAddress.@email.com   | 123-456-7890  | QaAdmin123  |   QaAdmin123       |
#invalid email with symbols @ end of letters
      |    AfirstName   | AlastName    | AemailAddress@@email.com   | 123-456-7890  | QaAdmin123  |   QaAdmin123       |
#invalid email with just A
      |    AfirstName   | AlastName    | A                          | 123-456-7890  | QaAdmin123  |   QaAdmin123       |
#invalid email with no hosting name after "@"
      |    AfirstName   | AlastName    | A@.c                       | 123-456-7890  | QaAdmin123  |   QaAdmin123       |
#invalid email with nothing after "."
      |    AfirstName   | AlastName    | A@.                        | 123-456-7890  | QaAdmin123  |   QaAdmin123       |

@TestCases_B-2
Scenario Outline: Enter wrong User Profile phone number will throw error
  When I enter my first name <firstName>
  And I enter my last name <lastName>
  And I enter my email address <emailAddress>
  And I enter my phone number <phoneNumber>
    But I enter "a wrong phone number"
    Then I should see "phoneNumber" errors "Must be a valid 10 digit number" displayed for this "filled" field
  And I enter my new Password <newPassWord>
  And I enter my confirm new password <confirmNewPassWord>
  When I click Cancel Button

    Examples:
      | firstName       | lastName     | emailAddress               | phoneNumber   |newPassWord  | confirmNewPassWord |
##invalid phone number with  A letter
      |    AfirstName   | AlastName    | AemailAddress@email.com    |  a            | QaAdmin123  |   QaAdmin123       |
#invalid phone number with  A letter and numbers
      |    AfirstName   | AlastName    | AemailAddress@email.com    | a23-456-7890  | QaAdmin123  |   QaAdmin123       |
#invalid phone number with no area code
      |    AfirstName   | AlastName    | AemailAddress@email.com    | 456-7890      | QaAdmin123  |   QaAdmin123       |
#invalid phone number with white spaces
      |    AfirstName   | AlastName    | AemailAddress@email.com    |  " "-" "-7890 | QaAdmin123  |   QaAdmin123       |

@TestCases_B-3
Scenario Outline: Enter wrong User Profile New Password and Confirm New Password will throw error
  When I enter my first name <firstName>
  And I enter my last name <lastName>
  And I enter my email address <emailAddress>
  And I enter my phone number <phoneNumber>
  And I enter my new Password <newPassWord>
    But I enter "a wrong New Password with no number"
    Then I should see "newPassWord" errors "Password must be at least 8 characters, contain a number, and mixed case letters." displayed for this "filled" field
  When I enter my confirm new password <confirmNewPassWord>
    But I enter "a different Confirm New Password from New Password"
    Then I should see "confirmNewPassWord" errors "Passwords do not match" displayed for this "filled" field
  When I click Cancel Button

  Examples:
      | firstName       | lastName     | emailAddress               | phoneNumber      |newPassWord    | confirmNewPassWord   |
##invalid Password with  no number
      |     ""          | "            | "     "ilAddress@email.com | 123-456-7890     | "       "Qa   |   "       "Qa1       |
#invalid Password with   no lower case
      |     ""          | "            | "     "ilAddress@email.com | 123-456-7890     | "       "Q1   |   "       "a1        |
#invalid Password with   no number ,lower case, and upper case
      |     ""          | "            | "     "ilAddress@email.com | 123-456-7890     | "       "     |   "       "1         |

@TestCases_B-4
Scenario Outline: Enter wrong User Profile "New Password" will throw error but Confirmation is the same
  When I enter my first name <firstName>
  And I enter my last name <lastName>
  And I enter my email address <emailAddress>
  And I enter my phone number <phoneNumber>
  And I enter my new Password <newPassWord>
    But I enter "a wrong New Password with no numbers"
    Then I should see "newPassWord" errors "Password must be at least 8 characters, contain a number, and mixed case letters." displayed for this "filled" field
  When I enter my confirm new password <confirmNewPassWord>
    But I enter "same New Password into Confirm New Password"
    Then I should not see in "Passwords do not match" errors displayed
    Then I click Cancel Button

Examples:
  | firstName       | lastName     | emailAddress               | phoneNumber      |newPassWord    | confirmNewPassWord   |
#invalid Password with no number and confirmation password is the same
  |     ""          | "            | "     "ilAddress@email.com | 123-456-7890     | "       "Qa   |   "       "Qa        |
########################################################################################################################
##                                             Test cases C                                                            #
########################################################################################################################
@TestCases_C
Scenario Outline: Enter empty User Profile data will throw error
  When I enter my first name <firstName>
    But I enter "nothing to first name"
    Then I should see "firstName" errors "Required" displayed for this "empty" field
  And I enter my last name <lastName>
    But I enter "nothing to last name"
    Then I should see "lastName" errors "Required" displayed for this "empty" field
  And I enter my email address <emailAddress>
    But I enter "nothing to email address"
    Then I should see "emailAddress" errors "Required" displayed for this "empty" field
  And I enter my phone number <phoneNumber>
    #Then I should see "phoneNumber" errors "Required" displayed for this "empty" field
  And I enter my new Password <newPassWord>
    But I enter "nothing to New Password"
    Then I should see "newPassWord" errors "Required" displayed for this "empty" field
  And I enter my confirm new password <confirmNewPassWord>
    But I enter "nothing to Confirm New Password"
    Then I should see "confirmNewPassWord" errors "Required" displayed for this "empty" field
  When I click Cancel Button

    Examples:
      | firstName     | lastName  | emailAddress              | phoneNumber   |newPassWord    | confirmNewPassWord   |
#All Empty Fields
      |               |           |                           |               |               |                      |
#First Name is Empty Field
      |               | AlastName | AemailAddress@email.com   | (123)456-7890 | QaAdmin123    |   QaAdmin123         |
##Last Name is Empty Field
      |    AfirstName |           | AemailAddress@email.com   | (123)456-7890 | QaAdmin123    |   QaAdmin123         |
#Email is Empty Field
      |    AfirstName | AlastName |                           | (123)456-7890 | QaAdmin123    |   QaAdmin123         |
#Phone is Empty Field
      |    AfirstName | AlastName | AemailAddress@email.com   |               | QaAdmin123    |   QaAdmin123         |
#NewPassword is Empty Field
      |    AfirstName | AlastName | AemailAddress@email.com   | (123)456-7890 |               |   QaAdmin123         |
#####Confirm New Password is Empty Field
######      |    AfirstName | AlastName | AemailAddress@email.com   | (123)456-7890 | QaAdmin123    |                      |