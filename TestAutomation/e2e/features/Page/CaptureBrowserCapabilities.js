/**
 * Created by Vsilva on 11/23/16.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var ProtractorConfig = require ('/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-conf.js');
var eyesSetUp = require ('../Page/EyesSetUp.js');

var CaptureBrowserCapabilities = function CaptureBrowserCapabilities()
{
    CaptureBrowserCapabilities.prototype.currentBrowserName = '';
    CaptureBrowserCapabilities.prototype.currentBrowserVersion = '';
    CaptureBrowserCapabilities.prototype.currentOSName = '';
    //var currentOSVersion = '';
    CaptureBrowserCapabilities.prototype.currentWidthTestResolution = '';
    CaptureBrowserCapabilities.prototype.currentHeightTestResolution = '';

    CaptureBrowserCapabilities.prototype.captureCurrentBrowserCapabilities = function (eyes) {
        browser.getCapabilities().then(function (capability) {

            this.currentBrowserName = ProtractorConfig.config.capabilities.browserName;
            this.currentBrowserVersion = capability.get('version');
            this.currentOSName = capability.get('platform');
            // currentOSVersion = capability.get('os_version');
            this.currentWidthTestResolution = ProtractorConfig.config.width;
            this.currentHeightTestResolution = ProtractorConfig.config.height;
            console.log(this.currentBrowserName);
            console.log(this.currentBrowserVersion);
            console.log(this.currentOSName);
            console.log(this.currentWidthTestResolution);
            console.log(this.currentHeightTestResolution);
            // console.log(currentOSVersion);

         if (ProtractorConfig.config.ApplitoolsOn == true) {
             eyesSetUp.EyesInitialSetUp(eyes);
             eyesSetUp.EyesOpen_StartTestCase(eyes, this.currentWidthTestResolution, this.currentHeightTestResolution);
             eyesSetUp.EyesSetBaseline(eyes, this.currentBrowserName, this.currentBrowserVersion, this.currentWidthTestResolution, this.currentHeightTestResolution);
             eyesSetUp.EyesSetBatch(eyes, this.currentOSName, this.currentBrowserName, this.currentBrowserVersion, this.currentWidthTestResolution, this.currentHeightTestResolution);
         }
        });
    };
};
module.exports = new CaptureBrowserCapabilities();
