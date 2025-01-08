
import 'cypress-real-events/support';
import 'cypress-real-events';

import HomePage from '../pages/automationExercise/HomePage';


Cypress.Commands.add('saveLinksToFile', () => {
    const dataToWrite = {
        count: HomePage.links.length, // Conta o número de links encontrados
        links: HomePage.links // Armazena os links encontrados
    };

    // Escreve o objeto no arquivo .json
    cy.writeFile('cypress/fixtures/links.json', dataToWrite);
    cy.log(`Links encontrados: ${HomePage.links.length}. Links salvos no arquivo links.json`);
});


