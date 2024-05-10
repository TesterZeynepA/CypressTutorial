const { defineConfig } = require("cypress");
const { removeDirectory } = require('cypress-delete-downloads-folder')


module.exports = defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
      on('task', { removeDirectory })
    },
    specPattern: 'cypress/e2e/**/*.{js, jsx, ts, tsx}'
    
  },
});
