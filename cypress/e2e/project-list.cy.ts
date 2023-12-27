import mockProjects from "../fixtures/projects.json";

import { ProjectStatus } from "@api/projects.types";

describe("Project List", () => {
  beforeEach(() => {
    // setup request mock
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
    }).as("getProjects");

    // open projects page
    cy.visit("http://localhost:3000/dashboard");

    // wait for request to resolve
    cy.wait("@getProjects");
  });

  it("shows loading indicator", () => {
    cy.get("[data-testid='loader']").should("be.visible");
  });

  it("removes the loading indicator", () => {
    cy.get("[data-testid='project-list']").should("be.visible");
    cy.get("[data-testid='loader']").should("not.exist");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("renders the projects", () => {
      const languageNames = ["React", "Node.js", "Python"];
      const statusToText = {
        [ProjectStatus.info]: "Stable",
        [ProjectStatus.warning]: "Warning",
        [ProjectStatus.error]: "Critical",
      };

      // get all project cards
      cy.get("main")
        .find("li")
        .each(($el, index) => {
          // check that project data is rendered
          const status =
            statusToText[mockProjects[index].status as ProjectStatus];

          cy.wrap($el).contains(mockProjects[index].name);
          cy.wrap($el).contains(languageNames[index]);
          cy.wrap($el).contains(mockProjects[index].numIssues);
          cy.wrap($el).contains(mockProjects[index].numEvents24h);
          cy.wrap($el).contains(status);
          cy.wrap($el)
            .find("a")
            .should("have.attr", "href", "/dashboard/issues");
        });
    });
  });
});
