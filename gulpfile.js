var protractor = require("gulp-protractor").protractor;
var gulp = require("gulp");
var webdriver_update = require("gulp-protractor").webdriver_update;
var reporter = require("gulp-protractor-cucumber-html-report");
var paths = require('/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/build/paths');

var webdriver_standalone = require("gulp-protractor").webdriver_standalone;
gulp.task('webdriver_standalone', webdriver_standalone);
"use strict";

var gulp                = require('gulp');
var protractor          = require("gulp-protractor").protractor;
var exec                = require('child_process').exec;


// gulp.src(["./src/tests/*.js"])
//     .pipe(protractor({
//         configFile: "test/protractor-config.js",
//         args: ['--baseUrl', 'http://127.0.0.1:8000']
//     }))
//     .on('error', function(e) { throw e })

gulp.task('default', function() {
    // place code for your default task here
});

gulp.task("e2e-report", function () {
    gulp.src(paths.testResultJson)
        .pipe(reporter({
            dest: paths.e2eReports
        }));
});
//
// gulp.src('/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/reports/cucumber-test-results.json')
//     .pipe(reporter({
//         dest: '/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/reports/'
//     }));




gulp.task('endtoend', ()=>
{
    return gulp.src([

    ])
        .pipe(protractor({
            configFile: '/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/TestAutomation/protractor-conf.js'

        }))
        .on('end', function(e)
        {
            console.log("Cucumber end to end is completed.");
        })
        .on('error', function (e) {
            console.error("Cucumber Task Error:", e);
        });
});

gulp.task('webdriver', runCommand('webdriver-manager start'));
//gulp.task('demo', runCommand('node server-demo'));
//gulp.task('report', runCommand('node server-report'));

function runCommand(command) {
    return function (cb) {
        exec(command, function (err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
            cb(err);
        });
    }
}

// git-r-done
//gulp.task('default', ['endtoend']);
