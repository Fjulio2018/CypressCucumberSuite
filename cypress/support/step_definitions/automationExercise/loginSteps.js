/// <reference types="cypress"/>

import { Given, When, Then, Before } from "cypress-cucumber-preprocessor/steps";
import siteData from "../../utils/siteData";

Given("que estou na página de login do Automation Exercise", () => {
    const { url, loginPath } = siteData.automationExercise;
    cy.visit(`${url}${loginPath}`);
});

When("insiro o email {string} e a senha {string}", (email, senha) => {
    const { emailSelector, passwordSelector, submitSelector } = siteData.automationExercise;
    cy.get(emailSelector).type(email);
    cy.get(passwordSelector).type(senha);
    cy.get(submitSelector).click();
});

Then("devo ser autenticado com sucesso", () => {
    cy.get('.logo.pull-left a img')
        .should('have.attr', 'src', '/static/images/home/logo.png')
        .and('have.attr', 'alt', 'Website for automation practice')
        .should('be.visible');
});

Then("devo ver uma mensagem de erro", () => {
    cy.get('.login-form > form > p')
        .should('contain','Your email or password is incorrect!')
});
