// Karma configuration
// Generated on Wed Jun 15 2016 09:05:44 GMT-0500 (CDT)
/* eslint-disable */
var module;


module.exports = function(config) {
    'use strict';

    var coverage_sources = [
        'jquery.canvaswrapper.js',
        'jquery.colorhelpers.js',
        'jquery.flot.js',
        'jquery.flot.saturated.js',
        'jquery.flot.uiConstants.js',
        'jquery.flot.logaxis.js',
        'jquery.flot.symbol.js',
        'jquery.flot.flatdata.js',
        'jquery.flot.drawSeries.js',
        'jquery.flot.navigate.js',
        'jquery.flot.touchNavigate.js',
        'jquery.flot.touch.js',
        'jquery.flot.absRelTime.js',
        'jquery.flot.axislabels.js'
    ];

    var sources = [
        'jquery.js',
        'lib/globalize.js',
        'lib/globalize.culture.en-US.js',
        'lib/jquery.event.drag.js',
        'lib/jquery.mousewheel.js'
    ].concat(coverage_sources);

    var settings = {

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine-jquery', 'jasmine'],

        // list of files / patterns to load in the browser
        files: sources.concat([
            'node_modules/phantomjs-polyfill-find/find-polyfill.js',
            'node_modules/webcharts-development-settings/testsUtils/utils/*.js',
            'tests/*.Test.js'
        ]),

        // list of files to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            '*.js': ['eslint'],
            'tests/**/*.js': ['eslint']
        },

        eslint: {
            stopOnError: true,
            showWarnings: true,
            engine: {
                configFile: 'node_modules/webcharts-development-settings/.eslintrc.json',
                emitError: true,
                emitWarning: true
            }
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['kjhtml', 'spec'],

        coverageReporter: {
            type: 'lcov', // lcov or lcovonly are required for generating lcov.info files
            dir: 'coverage/'
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS', 'Firefox', 'Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browsers should be started simultaneous
        concurrency: Infinity
    };

    if (config.coverage) {
        coverage_sources.forEach(function(pattern) {
            if (!settings.preprocessors[pattern]) {
                settings.preprocessors[pattern] = ['coverage'];
            } else {
                settings.preprocessors[pattern].push('coverage');
            }
        });

        settings.reporters.push('coverage');
        settings.reporters.push('coveralls');
        settings.browsers = ['PhantomJS'];
    }

    config.set(settings);
};
