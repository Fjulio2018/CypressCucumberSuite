import LoginPage from '../../../pages/automationExercise/LoginPage';
import ProductPage from '../../../pages/automationExercise/ProductPage';
import CheckoutPage from '../../../pages/automationExercise/CheckoutPage';

// Login único no Background
Given('que estou logado no site com o email {string} e a senha {string}', (email, senha) => {
    LoginPage.login(email,senha);
});

// Cenários utilizando o login feito no Background
Given('que estou na página de produtos do site', () => {
    ProductPage.visit(); // Usa o método visit() da ProductPage para acessar e validar a página de produtos
});

When('pesquiso pelo produto {string} com valor {string}', (produto, valor) => {
    ProductPage.searchProduct(produto);
    ProductPage.validateProductDetails(produto, valor);

});


And('adiciono o produto {string} com valor {string} ao carrinho', (produto, valor) => {
    ProductPage.addToCart();
    ProductPage.validateProductInCart(produto, valor)
    ProductPage.gotoCheckout()
});



Then('valido os dados do procuto na tela de checkout', () => {

});
