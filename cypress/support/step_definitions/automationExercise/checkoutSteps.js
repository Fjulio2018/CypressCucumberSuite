import ProductPage from '../../../pages/automationExercise/ProductPage';
import CheckoutPage from '../../../pages/automationExercise/CheckoutPage';

Then('valido os dados do produtos {string} com valor {string} na tela de checkout', (produto, valor) => {



    cy.log('Produto para validação no checkout', produto);
    cy.log('Valor para validação no checkout', valor);
    cy.log('Quantidade para validação no checkout', ProductPage.productQuantity);


    CheckoutPage.validateProductInCheckout(produto, valor, ProductPage.productQuantity);

});
