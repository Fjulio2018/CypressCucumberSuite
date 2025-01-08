// cypress/pages/automationExercise/LoginPage.js

class LoginPage {

    visit() {
        cy.visit('/login');
        this.validateLogo();
    }

    fillEmail(email) {
        cy.get('input[data-qa="login-email"]').type(email);
    }

    fillPassword(password) {
        cy.get('input[data-qa="login-password"]').type(password);
    }

    submit() {
        cy.get('button[data-qa="login-button"]').click();
    }

    validateLogo() {
        cy.get('.logo.pull-left a img')
            .should('have.attr', 'src', '/static/images/home/logo.png')
            .and('have.attr', 'alt', 'Website for automation practice')
            .should('be.visible');
    }

    validateErrorMessage() {
        cy.get('.login-form > form > p')
            .should('contain.text', 'Your email or password is incorrect!');
    }

    login(email, password) {
        this.visit();
        this.fillEmail(email);
        this.fillPassword(password);
        this.submit();
        this.validateLogo();
    }

    fillEmailUsingKeyboard(email) {
        cy.get('input[data-qa="login-email"]')
            .focus()
            .realType(email)
            .realPress('Tab');
    }

    fillPasswordUsingKeyboard(password) {
        cy.get('input[data-qa="login-password"]')
            .focus()
            .realType(password);
    }

    submitUsingKeyboard() {
        cy.get('input[data-qa="login-password"]')
            .realPress('Enter');
    }
}

export default new LoginPage();
