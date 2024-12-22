import LoginPage from '../../../pages/automationExercise/LoginPage';

Given('que estou na página de login do Automation Exercise', () => {
    LoginPage.visit();
});

When('insiro o email {string} e a senha {string}', (email, password) => {
    LoginPage.fillEmail(email);
    LoginPage.fillPassword(password);
    LoginPage.submit();
});

Then('{string}', (resultado) => {
    if (resultado === 'devo ser autenticado com sucesso') {
        LoginPage.validateLogo();
    } else if (resultado === 'devo ver uma mensagem de erro') {
        LoginPage.validateErrorMessage();
    } else {
        throw new Error(`Resultado inesperado: ${resultado}`);
    }
});
