// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './customCommands/login/login'
import './customCommands/homepage/homepage'
import './customCommands/logout/logout'
import './customCommands/login/automationexerciseLogin'
import './customCommands/logout/automationexerciseLogout'
import './customCommands/homepage/betterroamingHomePage'
import registerCypressGrep from '@cypress/grep/src/support'
registerCypressGrep()
import './customCommands/homepage/mercedes'
import "cypress-real-events"

// Alternatively you can use CommonJS syntax:
// require('./commands')
require('cypress-xpath');