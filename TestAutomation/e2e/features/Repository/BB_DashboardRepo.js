/**
 * Created by Vsilva on 11/23/16.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var OpenBlackBookWebsiteRepo = function OpenBlackBookWebsiteRepo () {

    //Strings
    OpenBlackBookWebsiteRepo.prototype.EyesVerify_BB_Dashboard = 'BlackBook Dashboard';
    //OpenBlackBookWebsiteRepo.prototype.BlackBookUrl = 'http://soltech.net/';
    OpenBlackBookWebsiteRepo.prototype.BlackBookUrl = 'http://localhost:3000/user';

    //Components
    // ClientsRepo.prototype.Select_Element_SoltechLogo  = element(by.xpath('//*[@id="masthead"]/div/div[1]/a'));
};
module.exports = new OpenBlackBookWebsiteRepo ();