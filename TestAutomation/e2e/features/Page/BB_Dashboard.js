/**
 * Created by Vsilva on 11/23/16.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var BB_dashboardRepo =  require('../Repository/BB_DashboardRepo.js');
var protractorConfig = require ('/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-conf.js');
var eyesSetUp = require ('../Page/EyesSetUp.js');

var OpenBlackBookDashboard = function OpenBlackBookDashboard(){

    OpenBlackBookDashboard.prototype.firstName = '';
    OpenBlackBookDashboard.prototype.lastName = '';
    OpenBlackBookDashboard.prototype.emailAddress = '';
    OpenBlackBookDashboard.prototype.phoneNumber = '';

   OpenBlackBookDashboard.prototype.OpenBlackBookDashboard = function(eyes){
       //page is non-angular
       browser.ignoreSynchronization = true;
       //Open BlackBook website
       browser.driver.get(BB_dashboardRepo.BlackBookUrl);

       if (protractorConfig.config.ApplitoolsOn == false)
       {
            browser.manage().window().maximize();  //comment out since Applitool does not like on firefox both.
       }

       browser.sleep(2000);
       eyesSetUp.EyesCheckWindow(eyes, BB_dashboardRepo.EyesVerify_BB_Dashboard,protractorConfig.config.ApplitoolsOn);
   };

   OpenBlackBookDashboard.prototype.Enter_FirstName = function (firstName) {
        this.firstName = firstName.toString().trim();
        BB_dashboardRepo.Select_Element_FirstNameTextbox.click();
        BB_dashboardRepo.Select_Element_FirstNameTextbox.sendKeys(firstName);
   };

    OpenBlackBookDashboard.prototype.Enter_LastName = function (lastName) {
        this.lastName = lastName.toString().trim();
        BB_dashboardRepo.Select_Element_LastNameTextbox.click();
        BB_dashboardRepo.Select_Element_LastNameTextbox.sendKeys(lastName);
    };

    OpenBlackBookDashboard.prototype.Enter_EmailAddress = function (emailAddress) {
        this.emailAddress = emailAddress.toString().trim();
        BB_dashboardRepo.Select_Element_EmailAddressTextbox.click();
        BB_dashboardRepo.Select_Element_EmailAddressTextbox.sendKeys(emailAddress);
    };

    OpenBlackBookDashboard.prototype.Enter_PhoneNumber = function (phoneNumber) {
        this.phoneNumber = phoneNumber.toString().trim();
        BB_dashboardRepo.Select_Element_PhoneNumberTextbox.click();
        BB_dashboardRepo.Select_Element_PhoneNumberTextbox.sendKeys(phoneNumber);
        BB_dashboardRepo.Select_Element_FirstNameTextbox.click();
    };

    OpenBlackBookDashboard.prototype.AssertElementsToDisplay = function ( isElementPresent, elementToCheck, compareValuesString, consoleErrorMessageDisplay  ) {
        //browser.sleep(2000);

        if (isElementPresent == true) {
            expect(elementToCheck.getText()).to.eventually.equal(compareValuesString);
        }
        else {
            console.log(consoleErrorMessageDisplay);
            // process.exit(1);
        }
    };

    OpenBlackBookDashboard.prototype.AssertElementsNotToDisplay = function ( isElementPresent, elementToCheck, consoleErrorMessageDisplay)
    {
        if (isElementPresent == true) {
            elementToCheck.getText().then(function(Text){
                console.log('ERROR: '+Text+'. '+consoleErrorMessageDisplay);
                //process.exit(1);
            });
        }
    };

    OpenBlackBookDashboard.prototype.Verify_ErrorMessagesNotToDisplay = function (TextboxName) {
        switch (TextboxName.toLowerCase()) {

            case 'firstname':
                browser.isElementPresent(BB_dashboardRepo.Select_Xpath_ERRORMESSAGE_FirstName).then(function (isPresente) {
                    OpenBlackBookDashboard.prototype.AssertElementsNotToDisplay(isPresente, BB_dashboardRepo.Select_Element_ERRORMESSAGE_FirstName, 'It should not show any errors in First Name');
                });
                break;

            case 'lastname':
                browser.isElementPresent(BB_dashboardRepo.Select_Xpath_ERRORMESSAGE_LastName).then(function (isPresente) {
                    OpenBlackBookDashboard.prototype.AssertElementsNotToDisplay(isPresente, BB_dashboardRepo.Select_Element_ERRORMESSAGE_LastName, 'It should not show any errors in Last Name');
                });
                break;

            case 'emailaddress':
                browser.isElementPresent(BB_dashboardRepo.Select_xpath_ERRORMESSAGE_Email).then(function (isPresente) {
                    OpenBlackBookDashboard.prototype.AssertElementsNotToDisplay(isPresente, BB_dashboardRepo.Select_Element_ERRORMESSAGE_Email, 'It should not show any errors in Email Address');
                });
                break;
            case 'phonenumber':
                browser.isElementPresent(BB_dashboardRepo.Select_xpath_ERRORMESSAGE_PhoneNumber).then(function (isPresente) {
                    OpenBlackBookDashboard.prototype.AssertElementsNotToDisplay(isPresente, BB_dashboardRepo.Select_Element_ERRORMESSAGE_PhoneNumber, 'It should not show any errors in Phone Number');
                });
                break;
        }
    }; 

    OpenBlackBookDashboard.prototype.Verify_ErrorMessageToDisplay = function (str_TextboxName , str_VerifyErrorName, FilledOrEmptyField) {

        switch (str_TextboxName.toLowerCase()) {
            case 'firstname':
                if ((!this.firstName.empty && FilledOrEmptyField == 'filled') || (this.firstName =='' && FilledOrEmptyField == 'empty')){
                    browser.isElementPresent(BB_dashboardRepo.Select_Xpath_ERRORMESSAGE_FirstName).then(function (isPresente) {
                        OpenBlackBookDashboard.prototype.AssertElementsToDisplay(isPresente, BB_dashboardRepo.Select_Element_ERRORMESSAGE_FirstName, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in First Name');
                    });
                }
                break;

            case 'lastname':
                if ((!this.lastName.empty && FilledOrEmptyField == 'filled')|| (this.lastName =='' && FilledOrEmptyField == 'empty')) {
                    browser.isElementPresent(BB_dashboardRepo.Select_Xpath_ERRORMESSAGE_LastName).then(function (isPresente) {
                        OpenBlackBookDashboard.prototype.AssertElementsToDisplay(isPresente, BB_dashboardRepo.Select_Element_ERRORMESSAGE_LastName, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Last Name');
                    });
                }
                break;

            case 'emailaddress':
                if ((!this.emailAddress.empty && FilledOrEmptyField == 'filled')|| (this.emailAddress =='' && FilledOrEmptyField == 'empty')) {
                    browser.isElementPresent(BB_dashboardRepo.Select_xpath_ERRORMESSAGE_Email).then(function (isPresente) {
                        OpenBlackBookDashboard.prototype.AssertElementsToDisplay(isPresente, BB_dashboardRepo.Select_Element_ERRORMESSAGE_Email, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Email Address');
                    });
                }
                break;

            case 'phonenumber':
                if ((!this.phoneNumber.empty && FilledOrEmptyField == 'filled')|| (this.phoneNumber == '' && FilledOrEmptyField == 'empty')) {
                    browser.isElementPresent(BB_dashboardRepo.Select_xpath_ERRORMESSAGE_PhoneNumber).then(function (isPresente) {
                        OpenBlackBookDashboard.prototype.AssertElementsToDisplay(isPresente, BB_dashboardRepo.Select_Element_ERRORMESSAGE_PhoneNumber, str_VerifyErrorName, 'ERROR: "' + str_VerifyErrorName + '"' + ' is missing in Phone Number');
                    });
                }
                break;
        }
    };

    // if (typeof console == "undefined") {
    //     window.console = {
    //         log: function () {}
    //     };
    // }
    //Console.log(ispresent);
        // OpenBlackBookDashboard.prototype.closeAdsOnSoltechMainPage = function ()
   // {
   //    //  var displayed ='hhhhhh';
   //    //
   //    //  browser.sleep(2000);
   //    // var ele = browser.element(by.xpath('//*[@id="columbus-optin-wrapper"]/a'));
   //    //
   //    //  ele.isDisplayed().then(function(visible){
   //    //          displayed = visible;
   //    //      });
   //    //
   //    //  console.log(displayed);
   //    // expect(ele.isDisplayed()).toBe(true);
   //     // .isDisplayed().then(function(visible){
   //     //     displayed = visible;
   //     // });
   //
   //     //Closing Ads when scrolling for applitools can scan items on page.
   //     // browser.executeScript('window.scrollTo(0,1048);').then(function () {
   //     //     browser.sleep(2000);
   //     // });
   //     //
   //     // browser.executeScript('window.scrollTo(0,2096);').then(function () {
   //     //     browser.sleep(4000);
   //     //
   //     //     if (displayed == true)
   //     //     {
   //     //         console.log(visible);
   //     //        // BB_dashboardRepo.Select_Element_Ads_CloseXicon.click();
   //     //         displayed = false;
   //     //     }
   //     //     browser.sleep(3000);
   //     // });
   //     //
   //     // browser.executeScript('window.scrollTo(0,0);').then(function () {
   //     //     browser.sleep(2000);
   //     // });
   //
   //     // then(function() {
   //     //     browser.sleep(3000);
   //     //     browser.executeScript('window.scrollTo(0,0);');
   //     //     browser.sleep(3000);
   //     // });
   // };
};
module.exports = new OpenBlackBookDashboard();
