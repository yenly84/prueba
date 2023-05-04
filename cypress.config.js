const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    experimentalStudio: true,//esto lo agregué yo
    setupNodeEvents(on, config) {
      // implement node event listeners here
   require('cypress-mochawesome-reporter/plugin')(on);
    //  require('@cypress/grep/src/plugin')(config);
    //return config;

  
    }
  }
})
  

