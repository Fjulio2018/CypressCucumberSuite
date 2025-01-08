const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    excludeSpecPattern: '@ignore',
    baseUrl: 'https://www.automationexercise.com',
    specPattern: "cypress/e2e/**/*.feature",

    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      return config;
    },
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json'
    }
  }
});
