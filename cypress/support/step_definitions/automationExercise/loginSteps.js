// cypress/support/step_definitions/automationExercise/loginSteps.js

import LoginPage from '../../../pages/automationExercise/LoginPage';

Given('que estou na página de login do Automation Exercise', () => {
    LoginPage.visit();
});

When('insiro o email {string} e a senha {string}', (email, password) => {
LoginPage.login(email,password)
});

Then('devo ser autenticado com sucesso', () => {
    LoginPage.validateLogo();
    LoginPage.validaUsuarioLogado();
});

Then('devo ver uma mensagem de erro', () => {
    LoginPage.validateErrorMessage();
});
