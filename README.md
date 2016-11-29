istanbu: javascrip code coverage.
circleci (less than jenkins)
applitool (add)

//proxi issues got fix
$ npm config rm https-proxy
$ npm config rm proxy

*****************
npm install require-dir
npm init -y  
npm i chai cucumber cucumber-tsflow gulp gulp-clean gulp-protractor gulp-protractor-cucumber-html-report gulp-typescript protractor protractor-cucumber-framework require-dir typings --save-dev 
************************************************************
//Html reports
1. $ npm install --global gulp-cli
2. $ npm init
3. $ npm install --save-dev gulp

4. Create a gulpfile.js at the root of your project:

var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});

5. Run gulp:

for individual task see number step 8 . run all task $ gulp

6. npm install gulp-protractor-cucumber-html-report --save-dev

7. to create this file cucumber-test-results.json , just run
// require: ['/Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/support/JsonOutputHook.js'],
 //format: 'json',        
8. Coppy cucumber output to /Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/reports/cucumber-test-results.json . Then, this is to run from json to html $ gulp e2e-report 
9. Click on file , then , Open browser through icons on webstorm 
************************************************************
Elementor

1.  npm install protractor -g
2.  To run elementor $ elementor https://angularjs.org'
3. it will open chrome and you able to get elements.
