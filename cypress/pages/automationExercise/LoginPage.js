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

    // Métodos para navegação por teclado usando cypress-real-events
    fillEmailWithKeyboard(email) {
        cy.get('input[data-qa="login-email"]')
            .focus()
            .realType(email) // usa realType ao invés de type()
            .realPress('Tab');  // Navega para o campo de senha usando Tab
    }

    fillPasswordWithKeyboard(password) {
        cy.get('input[data-qa="login-password"]')
            .focus()  // Foca no campo de senha após o Tab
            .realType(password);
    }

    submitWithKeyboard() {
        cy.get('input[data-qa="login-password"]')  // Foca no campo de senha
            .realPress('Enter');  // Submete o formulário com a tecla Enter
    }
}

export default new LoginPage();
