exports.config = {

    //specs: [
    //'e2e/features/*.feature'
    // ],

    specs: [
        'e2e/features/TestCases/OpenWebsite.feature'
    ],

    //BrowserStack
    //seleniumAddress: 'http://hub.browserstack.com/wd/hub',

    //Settings for the local machine (Run "webdriver-manager start" from any directory  + calls inside capabilities)
    //Selenium
    seleniumAddress: 'http://localhost:4444/wd/hub',

    //Appium
    //seleniumAddress: 'http://localhost:4733/wd/hub',

    //multiple browsers at a time testing
//    multiCapabilities: [
      // {
       //      ////////////////////////////////////////////// Windows 7 Chrome 51.0  ///////////////////
       //      //Label
       //      'build': 'version 1: ' + new Date().toString(),
       //      'project': 'Black Book',
       //      'name': 'Test Suit',
       //
       //      //User
       //      'browserstack.user': '',
       //      'browserstack.key': '',
       //      //'browserstack.local' : 'true',
       //
       //      //Browser Type
       //      'browserName': 'Chrome',
       //      'browser_version': '51.0',
       //      'os': 'Windows',
       //      'os_version': '7',
       //      'resolution': '1920x1200' ,
       //
       //      //Screenshot
       //      'browserstack.debug': 'true',
       //
       //      //Video recording
       //      'browserstack.video': 'true'
       //
       //  }
       // ,
       // {
       //      ////////////////////////////////////////////// Windows 7 FireFox 37.0  ///////////////////
       //      //Label
       //      'build': 'version 1: '+ new Date().toString(),
       //      'project' : 'Black Book',
       //      'name': 'Test Suit',
       //
       //      //User
       //     'browserstack.user': '',
       //     'browserstack.key': '',
       //      //'browserstack.local' : 'true',
       //
       //      //Browser Type
       //      'browser' : 'Firefox',
       //      'browser_version' : '46.0',
       //      'os' : 'Windows',
       //      'os_version' : '7',
       //      'resolution' : '1920x1200',
       //
       //      //Screenshot
       //      'browserstack.debug': 'true',
       //
       //      //Video recording
       //      'browserstack.video': 'true'
       //  }
//
// /*
//         ,
//         {
//             ////////////////////////////////////////////// Windows 10 IE 11.0 ///////////////////
//             //Label
//             'build': 'version 1: '+ new Date().toString(),
//             'project' : 'Black Book',
//             'name': 'Test Suit',
//
//             //User
//             'browserstack.user': '',
//             'browserstack.key': '',
//             'browserstack.local' : 'true',
//
//             //Browser Type
//             'browserName' : 'IE',
//             'browser_version' : '11.0',
//             'os' : 'Windows',
//             'os_version' : '10',
//             'resolution' : '1024x768' //,
//
//             //Screenshot
//             //'browserstack.debug': 'true',
//
//             //Video recording
//             //'browserstack.video': 'true'
//         }
//
//  ],

  capabilities: {
      'browserName': 'firefox'
     //'browserName': 'chrome'

    },

  directConnect: true,

    //set to "custom" instead of cucumber.
    //framework: 'custom',

    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    framework: 'cucumber',
    //relevant cucumber command line options
    cucumberOpts: {
       // format: "summary",
        tags: false,
        format: 'pretty',
        profile: false,
        'no-source': true,
       require: 'test/e2e/features/step_definitions/my_steps.js'
    },

    // cucumberOpts: {
    //    // require:'/Users/Vsilva/Desktop/Black Book/test/e2e/features/UserStoriesSteps_Cucumber/*_steps.js',        // <string[]> (file/dir) require files before executing features
    //     backtrace: true,   // <boolean> show full bacwebdriver-manager updatektrace for errors
    //    // compiler: [],       // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    //     dryRun: false,      // <boolean> invoke formatters without executing steps
    //     failFast: false,    // <boolean> abort the run on first failure
    //     format: 'pretty', // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    //     colors: true,       // <boolean> disable colors in formatter output
    //     snippets: false,     // <boolean> hide step definition snippets for pending steps
    //     source: false,       // <boolean> hide source URIs
    //    // profile: [],        // <string[]> (name) specify the profile to use
    //     strict: true,      // <boolean> fail if there are any undefined or pending steps
    //    // tags: [],           // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    //     timeout: 20000,      // <number> timeout for step definitions
    //     ignoreUndefinedDefinitions: false // <boolean> Enable this config to treat undefined definitions as warnings.
    // }
    // ,
    //
    onPrepare: function() {
        browser.ignoreSynchronization = false;
    },

    allScriptsTimeout: 10000//,

   // rootElement: '.my-app'
};
