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

   OpenBlackBookDashboard.prototype.OpenBlackBookDashboard = function(eyes){
       //page is non-angular
       browser.ignoreSynchronization = true;
       //Open BlackBook website
       browser.driver.get(BB_dashboardRepo.BlackBookUrl);
       //browser.manage().window().maximize();  //comment out since Applitool does not like on firefox both.
       browser.sleep(2000);
       eyesSetUp.EyesCheckWindow(eyes, BB_dashboardRepo.EyesVerify_BB_Dashboard,protractorConfig.config.ApplitoolsOn);
   };

   OpenBlackBookDashboard.prototype.Enter_FirstName = function (firstName) {
        BB_dashboardRepo.Select_Element_FirstNameTextbox.click();
        BB_dashboardRepo.Select_Element_FirstNameTextbox.sendKeys(firstName);
   };

    OpenBlackBookDashboard.prototype.Enter_LastName = function (lastName) {
        BB_dashboardRepo.Select_Element_LastNameTextbox.click();
        BB_dashboardRepo.Select_Element_LastNameTextbox.sendKeys(lastName);
    };

    OpenBlackBookDashboard.prototype.Enter_EmailAddress = function (emailAddress) {
        BB_dashboardRepo.Select_Element_EmailAddressTextbox.click();
        BB_dashboardRepo.Select_Element_EmailAddressTextbox.sendKeys(emailAddress);
    };

    OpenBlackBookDashboard.prototype.Enter_PhoneNumber = function (phoneNumber) {
        BB_dashboardRepo.Select_Element_PhoneNumberTextbox.click();
        BB_dashboardRepo.Select_Element_PhoneNumberTextbox.sendKeys(phoneNumber);
        BB_dashboardRepo.Select_Element_FirstNameTextbox.click();
    };

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
