// Esse arquivo antes da versão 10.0 do cypress se chamava cypress.json.
// Recebe algumas configurações do projeto.

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
