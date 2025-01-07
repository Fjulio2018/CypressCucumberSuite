import HomePage from '../../../pages/automationExercise/HomePage';


And('estou na Home Page', () => {
    HomePage.validateHomePage()
});

When('eu percorro a lista de links na Home Page', () => {
    HomePage.collectLinks();
});

And('clico em cada link', () => {
    HomePage.validateLinks();
});

Then('eu devo ser redirecionado para a página correta sem erros', () => {
    cy.log('Todos os links foram validados corretamente.');
});
