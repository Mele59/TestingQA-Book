const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    defaultCommandTimeout: 30000,
    responseTimeout: 40000,
    requestTimeout: 40000,
    },
    
});
