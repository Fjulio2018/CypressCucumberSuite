// cypress/pages/automationExercise/CheckoutPage.js

class CheckoutPage {

    validateProductInCheckout(productName, productPrice, productQuantity) {

        cy.get('.cart_description h4 a')
            .should('contain.text', productName)
            .and('be.visible');


        cy.get('.cart_price')
            .should('contain.text', productPrice)
            .and('be.visible');


        cy.get('.cart_quantity')
            .should('be.visible')
            .invoke('text')
            .then((quantity) => {
                cy.log('Quantidade no checkout', quantity);
                expect(parseInt(quantity, 10)).to.eq(productQuantity);
            });


        const numericProductPrice = parseFloat(productPrice.replace('Rs. ', ''));
        const expectedTotal = numericProductPrice * productQuantity;


        cy.get('.cart_total_price')
            .invoke('text')
            .then((totalText) => {
                const cleanTotal = totalText.replace('Rs. ', '');
                const cleanTotalNumber = parseFloat(cleanTotal);


                expect(cleanTotalNumber).to.eq(expectedTotal);
                cy.log('Valor esperado:', expectedTotal);
                cy.log('Valor encontrado:', cleanTotalNumber);
            });
    }
}

export default new CheckoutPage();
