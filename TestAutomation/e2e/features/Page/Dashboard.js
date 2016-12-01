/**
 * Created by Vsilva on 11/23/16.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var DashboardRepo =  require('../Repository/DashboardRepo.js');
var ProtractorConfig = require ('/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-conf.js');
var eyesSetUp = require ('../Page/EyesSetUp.js');

var OpenCulturaLinikDashboard = function OpenCulturaLinikDashboard(){

   OpenCulturaLinikDashboard.prototype.OpenCulturaLinkDashboard = function(eyes){
       //page is non-angular
       browser.ignoreSynchronization = true;
       //Open CulturaLink website
       browser.driver.get(DashboardRepo.CulturaLinkUrl);
       //browser.manage().window().maximize();  //comment out since Applitool does not like on firefox both.
       browser.sleep(2000);
       //Click on Logo image
       //DashboardRepo.Select_Element_SoltechLogo.click();
       //this.closeAdsOnSoltechMainPage();
       //browser.sleep(2000);

       eyesSetUp.EyesCheckWindow(eyes, DashboardRepo.EyesVerify_Dashboard,ProtractorConfig.config.ApplitoolsOn);
   };

   // OpenCulturaLinikDashboard.prototype.closeAdsOnSoltechMainPage = function ()
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
   //     //        // DashboardRepo.Select_Element_Ads_CloseXicon.click();
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
module.exports = new OpenCulturaLinikDashboard();
