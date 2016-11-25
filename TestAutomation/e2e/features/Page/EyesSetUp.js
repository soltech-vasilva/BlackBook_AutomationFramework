/**
 * Created by Vsilva on 11/23/16.
 */
var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var Eyes = require('eyes.protractor').Eyes;
var request = require("request");

var EyesSetUp = function EyesSetUp(){

    EyesSetUp.prototype.EyesInitialSetUp = function (eyes) {
        eyes.setBranchName('BranchName Soltech');
        eyes.setForceFullPageScreenshot(true);
        eyes.setStitchMode(Eyes.StitchMode.CSS);
        //eyes.setMatchLevel('Layout2');
    };

    EyesSetUp.prototype.EyesOpen_StartTestCase = function (eyes, currentWidthTestResolution, currentHeightTestResolution) {
       eyes.open(browser, 'App Name: BlackBook' , 'Test Name: Simple Soltech Test', {width: currentWidthTestResolution , height: currentHeightTestResolution});
    };

    EyesSetUp.prototype.EyesSetBaseline = function(eyes, currentBrowserName, currentBrowserVersion, currentWidthTestResolution, currentHeightTestResolution){
        eyes.setBaselineName ('Baseline  '+currentBrowserName+':' + currentBrowserVersion +'  :  ' + currentWidthTestResolution +'x' + currentHeightTestResolution);
    };

    EyesSetUp.prototype.EyesSetBatch = function (eyes , currentOSName, currentBrowserName, currentBrowserVersion, currentWidthTestResolution, currentHeightTestResolution) {
        eyes.setBatch('"Soltech" '+ currentOSName+'  '+ currentBrowserName+ ':'+ currentBrowserVersion +' : ' + currentWidthTestResolution +'X' + currentHeightTestResolution );
    };

    EyesSetUp.prototype.EyesClose_EndTestcase = function(eyes){
        //eyes.close();
        eyes.close(false).then(function (testResults) {
            request({uri: "https://victorsilva8:xCzjDLuovykUS3dzL6tK@www.browserstack.com/automate/sessions/<session-id>.json", method:"PUT", form:{"status":"completed","reason":""}});
            console.log(testResults);
        });
    };
};
module.exports = new EyesSetUp();