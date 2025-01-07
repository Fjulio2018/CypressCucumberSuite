import LoginPage from '../../../pages/automationExercise/LoginPage';
import ProductPage from '../../../pages/automationExercise/ProductPage';






Given('que estou na página de produtos do site', () => {
    ProductPage.visit();
});

When('pesquiso pelo produto {string} com valor {string}', (produto, valor) => {
    ProductPage.searchProduct(produto);
    ProductPage.validateProductDetails(produto, valor);

});


Then('adiciono o produto {string} com valor {string} ao carrinho', (produto, valor) => {
    ProductPage.addToCart();
    ProductPage.validateProductInCart(produto, valor)
    ProductPage.navigateToCheckout()
});




