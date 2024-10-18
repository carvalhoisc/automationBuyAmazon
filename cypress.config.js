const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  allureWriter(on, config);

  return config;
}

module.exports = defineConfig({
  projectId: 'fj5wws',
  e2e: {
    setupNodeEvents,
    "defaultCommandTimeout": 50000,
    "viewportWidth": 1920,
    "viewportHeight": 1400,
    "browser": "chrome",
    specPattern: "cypress/e2e/features/**/*.feature",
    baseUrl: "https://www.amazon.com.br",
    chromeWebSecurity: false,
    env: {
      allureReuseAfterSpec: true,
    },
    video: false,
    screenshotOnRunFailure: true
  },
});
