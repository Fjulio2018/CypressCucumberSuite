let response;

Given('que eu envie uma requisição GET para {string}', (url) => {
    cy.request({
        method: 'GET',
        url: url,
    }).then((res) => {
        response = res;
        // Log para imprimir a resposta completa
        cy.log('Response:', JSON.stringify(response));
    });
});

Then('o código de status deve ser {int}', (statusCode) => {
    expect(response.status).to.eq(statusCode);
});

Then('o nome deve estar presente', () => {

    const listName = response.body?.data?.list?.name;


    expect(listName).to.exist;
    expect(listName).to.be.a('string').and.not.be.empty;

    cy.log(`List Name: ${listName}`);
});
