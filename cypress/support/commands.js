// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('createUser', (userData) => {
    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/user',
      body: userData,
    });
  });
  
  Cypress.Commands.add('getUser', (username) => {
    cy.request({
      method: 'GET',
      url: `https://petstore.swagger.io/v2/user/${username}`,
      failOnStatusCode: false,
    });
  });
  
  Cypress.Commands.add('updateUser', (username, userData) => {
    cy.request({
      method: 'PUT',
      url: `https://petstore.swagger.io/v2/user/${username}`,
      body: userData,
    });
  });
  
  Cypress.Commands.add('deleteUser', (username) => {
    cy.request({
      method: 'DELETE',
      url: `https://petstore.swagger.io/v2/user/${username}`,
      failOnStatusCode: false,
    });
  });
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })