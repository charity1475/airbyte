describe("Source main actions", () => {
  it("Create new source", () => {
    cy.createTestSource("Test source cypress");

    cy.url().should("include", `${Cypress.config().baseUrl}/source/`);
  });

  it("Update source", () => {
    cy.createTestSource("Test source cypress for update");
    cy.updateSource("Test source cypress for update", "connectionConfiguration.start_date", "2020-11-11");

    cy.get("span[data-id='success-result']").should("exist");
    cy.get("input[value='2020-11-11']").should("exist");
  });

  it("Delete source", () => {
    cy.createTestSource("Test source cypress for delete");
    cy.deleteSource("Test source cypress for delete");

    cy.visit("/");
    cy.get("div").contains("Test source cypress for delete").should("not.exist");
  });
});