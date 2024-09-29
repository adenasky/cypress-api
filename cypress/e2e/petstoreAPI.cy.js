describe('Petstore API - User Tests', () => {
  let userData;
  let updatedUserData;

  beforeEach(() => {
    cy.fixture('userData').then((data) => {
      userData = data.userData;
      updatedUserData = data.updatedUserData;
    });
  });

  afterEach(() => {
    cy.getUser(userData.username).then((response) => {
      if (response.status === 200) {
        cy.deleteUser(userData.username);
      }
    });
  });

  it('should create a new user', () => {
    cy.createUser(userData);
    cy.getUser(userData.username).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.username).to.eq(userData.username);
    });
  });

  it('should update an existing user', () => {
    cy.createUser(userData);
    cy.updateUser(userData.username, updatedUserData);
    cy.getUser(userData.username).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.firstName).to.eq(updatedUserData.firstName);
      expect(response.body.email).to.eq(updatedUserData.email);
    });
  });

  it('should delete an existing user', () => {
    cy.createUser(userData);
    cy.deleteUser(userData.username);
    cy.getUser(userData.username, { failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body.message).to.eq('User not found');
    });
  });
});