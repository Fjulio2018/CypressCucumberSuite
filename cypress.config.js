const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.automationexercise.com',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      return config
    },
    specPattern: "cypress/e2e/**/*.feature",
    excludeSpecPattern: '@ignore',
  }
})
