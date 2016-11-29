/**
 * Created by Vsilva on 11/28/16.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var ClientsRepo =  require('../Repository/ClientsRepo.js');
var ProtractorConfig = require ('/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-conf.js');
var eyesSetUp = require ('../Page/EyesSetUp.js');

var Clients = function Clients () {

    Clients.prototype.Click_ClientsButton = function(eyes) {
        ClientsRepo.Select_Element_ClientsButton.click();
        eyesSetUp.EyesCheckWindow(eyes, ClientsRepo.EyesVerify_Clients,ProtractorConfig.config.ApplitoolsOn);
    }
};
module.exports =  new Clients();