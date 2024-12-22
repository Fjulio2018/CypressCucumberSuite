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
            .should('contain.text', 'Your email or password is incorrect!')
    }

    validaUsuarioLogado(){

        cy.contains('Logged in as teste plard')
            .should('exist')
            .and('be.visible')
            .find('i.fa.fa-user')
            .should('exist')
            .and('be.visible');


    }


    login(email, password) {
        this.visit();
        this.fillEmail(email);
        this.fillPassword(password);
        this.submit();
        this.validateLogo();
    }
}

export default new LoginPage();
