'use strict';

var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var SearchPageRepo = function SearchPageRepo() {

    //Strings
    SearchPageRepo.prototype.Search_LinkPage = 'www.blackbook.com';
};
module.exports = new SearchPageRepo();