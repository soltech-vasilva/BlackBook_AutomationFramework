/**
 * Created by Vsilva on 11/23/16.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var openSoltechWebsiteRepo =  require('../Repository/OpenSoltechWebsiteRepo.js');

var OpenSoltechWebsite = function OpenSoltechWebsite(){

   OpenSoltechWebsite.prototype.OpenSoltechMainPage = function(eyes){
       //page is non-angular
       browser.ignoreSynchronization = true;
       //Open Soltech website
       browser.get(openSoltechWebsiteRepo.SoltechUrl);
       //browser.manage().window().maximize();  //comment out since Applitool does not like on firefox both.
       browser.sleep(2000);
       //Click on Logo image
       openSoltechWebsiteRepo.Select_Element_SoltechLogo.click();
       this.closeAdsOnSoltechMainPage();
       browser.sleep(2000);
       eyes.checkWindow(openSoltechWebsiteRepo.EyesVerify_MainPage);
   };

   OpenSoltechWebsite.prototype.closeAdsOnSoltechMainPage = function ()
   {
       //Closing Ads when scrolling for applitools can scan items on page.
       browser.executeScript('window.scrollTo(0,1048);').then(function () {
           browser.sleep(2000);
       });

       browser.executeScript('window.scrollTo(0,2096);').then(function () {
           browser.sleep(3000);
           openSoltechWebsiteRepo.Select_Element_Ads_CloseXicon.click();
       }).then(function() {
           browser.sleep(3000);
           browser.executeScript('window.scrollTo(0,0);');
           browser.sleep(3000);
       });
   };
};
module.exports = new OpenSoltechWebsite();
