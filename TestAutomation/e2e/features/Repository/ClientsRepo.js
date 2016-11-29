/**
 * Created by Vsilva on 11/28/16.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var ClientsRepo = function OpenSoltechWebsiteRepo () {
   //Strings
   ClientsRepo.prototype.EyesVerify_Clients = 'CulturaLink Clients';

    //Components
   ClientsRepo.prototype.Select_Element_ClientsButton = element(by.css('a[href="/clients"]'));

};
module.exports = new ClientsRepo();