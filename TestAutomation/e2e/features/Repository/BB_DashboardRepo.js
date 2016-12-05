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
    OpenBlackBookWebsiteRepo.prototype.Select_Element_FirstNameTextbox  = element(by.css('input[ng-reflect-name="firstName"]'));
    OpenBlackBookWebsiteRepo.prototype.Select_Element_LastNameTextbox = element(by.css('input[ng-reflect-name="lastName"]'));
    OpenBlackBookWebsiteRepo.prototype.Select_Element_EmailAddressTextbox = element(by.css('input[ng-reflect-name="username"]'));
    OpenBlackBookWebsiteRepo.prototype.Select_Element_PhoneNumberTextbox = element(by.css('input[ng-reflect-name="phoneNumber"]'));
};
module.exports = new OpenBlackBookWebsiteRepo ();