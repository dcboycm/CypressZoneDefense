describe("Broken Test - Status Codes", () => {
    beforeEach(() => {
      cy.visit("/status_codes");
    });

    it("should validate each status code page (incorrectly)", () => {
      const statusCodes = [200, 301, 404, 500];

      statusCodes.forEach((code) => {
        cy.contains("a", code).click();

        cy.contains("h3", "Status Codes");
      });
    });
});
