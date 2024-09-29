const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "7oek2h",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
