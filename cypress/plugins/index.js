/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
/* const selectTestsWithGrep = require('cypress-select-tests')
const pickTests = (filename, foundTests, cypressConfig) => {
  console.log('picking tests from file', filename)

  // found tests will be names of the tests found in "filename" spec
  // it is a list of names, each name an Array of strings
  // ['suite 1', 'suite 2', ..., 'test name']
  console.log('found tests')
  console.log(foundTests)

  // let's only run tests with "does" in the title
  return filename.filter(fullTestName => fullTestName.join(' ').includes('st'))/* foundTests.filter(fullTestName => fullTestName.join('  ').includes(fgrep)) 
}
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('file:preprocessor', selectTestsWithGrep(config, pickTests))
} */

const selectTestsWithGrep = require('cypress-select-tests/grep')
module.exports = (on, config) => {
  on('file:preprocessor', selectTestsWithGrep(config))
}