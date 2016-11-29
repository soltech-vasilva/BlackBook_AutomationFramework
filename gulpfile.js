var protractor = require("gulp-protractor").protractor;
var gulp = require("gulp");
var webdriver_update = require("gulp-protractor").webdriver_update;
var reporter = require("gulp-protractor-cucumber-html-report");
var paths = require('/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/build/paths');

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