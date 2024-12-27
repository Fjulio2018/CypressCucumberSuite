// cypress/pages/automationExercise/HomePage.js

class HomePage {
    validaUsuarioLogado(email) {
        if (!email) {
            throw new Error("Email is undefined");
        }
        const emailPrefix = email.split('@')[0];
        cy.contains(`Logged in as ${emailPrefix}`)
            .should('exist')
            .and('be.visible')
            .find('i.fa.fa-user')
            .should('exist')
            .and('be.visible');
    }

    goToProducts() {
        cy.get('a[href="/products"]').click();
        cy.url().should('include', '/products');
        cy.contains('All Products')
            .should('exist')
            .and('be.visible');
    }
}

export default new HomePage();
