/// <reference types="cypress"/>

import { Given, When, Then, Before } from "cypress-cucumber-preprocessor/steps";
import siteData from "../../support/utils/siteData";

Given("que estou na página de login do Automation Practice", () => {
    const { url, loginPath } = siteData.automationPractice;
    cy.visit(`${url}${loginPath}`);
});

When("insiro o email {string} e a senha {string}", (email, senha) => {
    const { emailSelector, passwordSelector, submitSelector } = siteData.automationPractice;
    cy.get(emailSelector).type(email);
    cy.get(passwordSelector).type(senha);
    cy.get(submitSelector).click();
});

Then("devo ser autenticado com sucesso", () => {
    cy.url().should("contain", "controller=my-account");
});

Then("devo ver uma mensagem de erro", () => {
    cy.get(".alert-danger").should("be.visible");
});
