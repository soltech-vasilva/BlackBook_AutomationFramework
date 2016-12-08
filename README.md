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
8. Coppy cucumber output to /Users/Vsilva/WebstormProjects/BlackBook_AutomationFramework/reports/cucumber-test-results.json . 
Then, this is to run from json to html $ gulp e2e-report 
9. Click on file , then , Open browser through icons on webstorm 
************************************************************
Elementor

1.  npm install protractor -g
2.  To run elementor $ elementor https://angularjs.org'
3. it will open chrome and you able to get elements.
*********************************************************

Adding Developer machine setup (Blackbook) test framework
run backend:
1.Get the latest build (got temp binaries)
2. got to src/service
3. npm install
4. gulp
check localhost:3002 "hellow world"

run front end:
1. go to src/ui
2. npm install 
3. gulp
localhost:3001
ui  localhost:3001/user
*********************************************************
run latest Cultural Link
1. get the latest
2. npm install
3. gulp
4. npm start
***********************************************************
Adding Developer machine setup (Cultural Link) test framework
1.https://nodejs.org/en/download/package-manager/ (have not install it yet)
I ran : curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"
2. npm install -g gulp (already installed it)
3. npm install -g typescript
4. npm install -g mocha (already installed it)
5. npm install -g webpack 

Get source code
1. git clone https://github.com/soltechnic/culturaLink
2. cd CulturalLink
3. npm install

Setup Environmental Variables
1.    Create a file /env/vars.js
2.    Paste in the following: (I asked Neal to get me this info and paste something similar to below.
module.exports = {
 "psqlDev": {
   "database": "culturalink",
   "user": {Enter App Username},
   "password": {Enter Password},
   "options": {
     "host": {Enter Host},
     "port": 5432,
     "dialect": "postgres",
     "pool": {
       "max": 100,
       "min": 0,
       "idle": 10000
     }
   }
 }
}


