var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

// var webdriver = require('selenium-webdriver');
// var protractor = require('protractor');

var Eyes = require('eyes.protractor').Eyes;
var eyes = new Eyes();
eyes.setApiKey('zgr3zfZKIc8JyUNkZdxOZv4G4wTcCrYp4PXSG9HE9Ew110');

var BB_dashboard = require('../Page/BB_Dashboard.js');
var eyesSetUp = require('../Page/EyesSetUp.js');
var captureBrowserCapabilities = require ('../Page/CaptureBrowserCapabilities.js');

var myBlackBookSteps = function myBlackBookSteps() {

    // this.Given(/^I enter Soltech Website$/, function (callback)
    // {
    //     try
    //     {
    //
    //             // Start visual testing with browser viewport set if needed.
    //             //eyes.open(driver, app_name, test_name, viewport_size)
    //           //  eyes.open(browser, 'App Name: BlackBook' , 'Test Name: Simple Soltech Test');
    //
    //             //no angular page
    //             browser.driver.get('http://soltech.net/');
    //             browser.manage().window().maximize();
    //             //browser.ignoreSynchronization = false;
    //             //element(by.xpath('//*[@id="navbar"]/div/ul/li[1]')).click();
    //             //eyes.setStitchMode(Eyes.StitchMode.CSS);
    //
    //         //    eyes.checkWindow('Soltech Demo');
    //
    //             //with Angular
    //             //browser.get('http://soltech.net/');
    //             //browser.waitForAngular();
    //             //searchPage.OpenGoFanWebsite();
    //         //    eyes.close();
    //
    //
    //
    //              callback();
    //
    //     }
    //     catch (e){
    //      //   eyes.abortIfNotClosed();
    //     }
    // });

    this.Before(function (callback) {
        captureBrowserCapabilities.captureCurrentBrowserCapabilities(eyes);
        callback();
    });

    this.After(function(callback)
    {
        eyesSetUp.EyesClose_EndTestcase(eyes);
        callback();
    });

    this.Given(/^I enter BlackBook Website$/, function (callback) {
        BB_dashboard.OpenBlackBookDashboard(eyes);
        callback();
    });

    this.When(/^I enter my first name (.*)$/, function (firstName, callback) {
        BB_dashboard.Enter_FirstName(firstName);
        callback();
    });

    this.When(/^I enter my last name (.*)$/, function (lastName , callback) {
        BB_dashboard.Enter_LastName(lastName);
        callback();
    });

    this.When(/^I enter my email address (.*)$/, function (emailAddress, callback) {
        BB_dashboard.Enter_EmailAddress(emailAddress);
        callback();
    });

    this.When(/^I enter my phone number (.*)$/, function (phoneNumber, callback) {
        BB_dashboard.Enter_PhoneNumber(phoneNumber );
        callback();
    });

    this.When(/^I enter my new Password (.*)$/, function (newPassword, callback) {
        BB_dashboard.Enter_NewPassword(newPassword);
        callback();
    });

    this.When(/^I enter my confirm new password (.*)$/, function (confirmNewPassword, callback) {
        BB_dashboard.Enter_ConfirmNewPassword(confirmNewPassword);
        callback();
    });

    this.When(/^I click Cancel Button$/, function (callback) {
        element(by.buttonText('Cancel')).click();
        callback();
    });

    this.Then(/^I should see "([^"]*)" errors "([^"]*)" displayed$/, function (str_TextboxName, str_VerifyErrorName, callback) {
        BB_dashboard.Verify_ErrorMessageToDisplayEmptyFields(str_TextboxName, str_VerifyErrorName);
        callback();
    });

    this.Then(/^I should not see in "([^"]*)" errors displayed$/, function (str_TextboxName, callback) {
        BB_dashboard.Verify_ErrorMessagesNotToDisplay(str_TextboxName);
        callback();
    });

    this.Then(/^I should see "([^"]*)" errors "([^"]*)" displayed for this "([^"]*)" field$/, function (str_TextboxName, str_VerifyErrorName, FilledOrEmptyField, callback) {
        BB_dashboard.Verify_ErrorMessageToDisplay(str_TextboxName, str_VerifyErrorName, FilledOrEmptyField);
        callback();
    });

    //EMPTY FUNCTION FOR READABILITY ONLY ON CUCUMBER
    this.When(/^I enter "([^"]*)"$/, function (arg1, callback) {
        callback();
    });


};

module.exports = myBlackBookSteps;