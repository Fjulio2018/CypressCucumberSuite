import LoginPage from '../../../pages/automationExercise/LoginPage';
import HomePage from '../../../pages/automationExercise/HomePage';

Given('que estou na página de login do Automation Exercise', () => {
    LoginPage.visit();
});

When('insiro o email {string} e a senha {string} usando {string}', (email, password, metodo) => {
    if (metodo === 'formulário') {
        LoginPage.fillEmail(email);
        LoginPage.fillPassword(password);
        LoginPage.submit();
    } else if (metodo === 'navegação teclado') {
        LoginPage.fillEmailWithKeyboard(email);
        LoginPage.fillPasswordWithKeyboard(password);
        LoginPage.submitWithKeyboard();
    } else {
        throw new Error(`Método desconhecido: ${metodo}`);
    }
});

Then('{string} para o email {string}', (resultado, email) => {
    if (resultado === 'devo ser autenticado com sucesso') {
        HomePage.validaUsuarioLogado(email);
    } else if (resultado === 'devo ver uma mensagem de erro') {
        LoginPage.validateErrorMessage();
    } else {
        throw new Error(`Resultado inesperado: ${resultado}`);
    }
});
