const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "1dvoby",
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true,
    videoCompression: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
  viewportWidth: 1536,
  viewportHeight: 960,
});
