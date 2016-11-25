/**
 * Created by Vsilva on 11/23/16.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var OpenSoltechWebsiteRepo = function OpenSoltechWebsiteRepo () {

    //Strings
    OpenSoltechWebsiteRepo.prototype.EyesVerify_MainPage = 'Soltech Main Page';
    OpenSoltechWebsiteRepo.prototype.SoltechUrl = 'http://soltech.net';

    //Components
    OpenSoltechWebsiteRepo.prototype.Select_Element_SoltechLogo  = element(by.xpath('//*[@id="masthead"]/div/div[1]/a'));
    OpenSoltechWebsiteRepo.prototype.Select_Element_Ads_CloseXicon = element(by.xpath('//*[@id="columbus-optin-wrapper"]/a'));

};
module.exports = new OpenSoltechWebsiteRepo ();