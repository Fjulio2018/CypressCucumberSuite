import LoginPage from '../../../pages/automationExercise/LoginPage';
import HomePage from '../../../pages/automationExercise/HomePage';

Given('que estou na página de login do Automation Exercise', () => {
    LoginPage.visit();
});
Given('que estou logado no site com o email {string} e a senha {string}', (email, senha) => {
    LoginPage.login(email,senha);
});

When('insiro o email {string} e a senha {string} usando {string}', (email, password, metodo) => {
    if (metodo === 'formulário') {
        LoginPage.fillEmail(email);
        LoginPage.fillPassword(password);
        LoginPage.submit();
    } else if (metodo === 'navegação teclado') {
        LoginPage.fillEmailUsingKeyboard(email);
        LoginPage.fillPasswordUsingKeyboard(password);
        LoginPage.submitUsingKeyboard();
    } else {
        throw new Error(`Método desconhecido: ${metodo}`);
    }
});

Then('{string} para o email {string}', (resultado, email) => {
    if (resultado === 'devo ser autenticado com sucesso') {
        HomePage.validateLoggedUser(email);
    } else if (resultado === 'devo ver uma mensagem de erro') {
        LoginPage.validateErrorMessage();
    } else {
        throw new Error(`Resultado inesperado: ${resultado}`);
    }
});
