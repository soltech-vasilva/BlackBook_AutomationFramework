/**
 * Created by Vsilva on 11/23/16.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var OpenSoltechWebsiteRepo = function OpenSoltechWebsiteRepo () {

    //Strings
    OpenSoltechWebsiteRepo.prototype.EyesVerify_Dashboard = 'CulturaLink Dashboard';
    //OpenSoltechWebsiteRepo.prototype.CulturaLinkUrl = 'http://soltech.net/';
    //OpenSoltechWebsiteRepo.prototype.CulturaLinkUrl = 'http://localhost:8081';
    OpenSoltechWebsiteRepo.prototype.CulturaLinkUrl = 'http://localhost:3000/user';

    //Components
    // ClientsRepo.prototype.Select_Element_SoltechLogo  = element(by.xpath('//*[@id="masthead"]/div/div[1]/a'));
    // ClientsRepo.prototype.Select_Element_Ads_CloseXicon = element(by.xpath('//*[@id="columbus-optin-wrapper"]/a'));

};
module.exports = new OpenSoltechWebsiteRepo ();