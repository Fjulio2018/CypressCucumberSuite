class CheckoutPage {
    selectPaymentMethod(paymentMethod) {
        cy.contains(paymentMethod).click(); // Supondo que as opções de pagamento são identificáveis por texto
    }

    confirmPurchase(product, paymentMethod) {
        cy.contains(`Order confirmed for ${product}`).should('be.visible');
        cy.contains(`Payment method: ${paymentMethod}`).should('be.visible');
    }
}
export default new CheckoutPage();
