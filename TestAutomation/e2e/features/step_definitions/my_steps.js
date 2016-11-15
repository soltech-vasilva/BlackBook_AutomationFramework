//'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

// var webdriver = require('selenium-webdriver');
// var protractor = require('protractor');
//var searchPage = require('../Page/SearchPage.js');

var myBlackBookSteps = function myBlackBookSteps() {

    this.Given(/^I enter Soltech Website$/, function (callback) {
        //no angular page
        browser.driver.get('http://soltech.net/');
        //with Angular
        //browser.get('http://soltech.net/');
        //browser.waitForAngular();
        // searchPage.OpenGoFanWebsite();
        callback();

    });
};

module.exports = myBlackBookSteps;