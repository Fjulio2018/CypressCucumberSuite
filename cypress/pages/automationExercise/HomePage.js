class HomePage {

    static links = [];
    static totalLinks = [];

    validateHomePage() {
        cy.url().should('eq', 'https://www.automationexercise.com/');
    }

    validateLoggedUser(email) {
        if (!email) {
            throw new Error("Email is undefined");
        }
        const emailPrefix = email.split('@')[0];
        cy.contains(`Logged in as ${emailPrefix}`)
            .should('exist')
            .and('be.visible')
            .find('i.fa.fa-user')
            .should('exist')
            .and('be.visible');
    }

    navigateToProducts() {
        cy.get('a[href="/products"]').click();
        cy.url().should('include', '/products');
        cy.contains('All Products')
            .should('exist')
            .and('be.visible');
    }

    collectLinks() {
        this.links = [];
        let logoutLink = null;
        this.totalLinks = [];

        cy.get('a[href]')
            .each(($el) => {
                const href = Cypress.$($el).attr('href');
                this.totalLinks.push(href);
                if (href && !href.startsWith('javascript')) {
                    if (href === '/logout') {
                        logoutLink = href;
                    } else if (href !== '/delete_account') {
                        this.links.push(href);
                    }
                }
            })
            .then(() => {
                if (logoutLink) {
                    this.links.push(logoutLink);
                }
                cy.log('Links coletados (com logout por último e excluindo "Delete Account"):', this.links);
            });
    }


    captureLinks() {
        cy.get('a') // Seleciona todos os links da página
            .each(($el) => {
                const href = $el.attr('href'); // Pega o href de cada link
                if (href) { // Verifica se o link tem o atributo href
                    HomePage.links.push(href); // Adiciona o link à lista
                }
            }).then(() => {
            cy.log(`Links coletados: ${HomePage.links.length}`);
        });
    }




    validateLinks() {
        if (!this.links || this.links.length === 0) {
            throw new Error('Nenhum link coletado para validar.');
        }

        cy.log('Validando os links coletados:', this.links);

        this.links.forEach((link) => {
            cy.request(link).then((response) => {
                expect(response.status).to.eq(200);
                cy.log(`Link validado: ${link} (Status: ${response.status})`);
            });
        });
    }

    validateLinksFromFile() {
        cy.readFile('cypress/fixtures/links.json').then((dataFromFile) => {

            this.totalLinks.forEach((link) => {
                expect(dataFromFile.links).to.include(link);
            });


            expect(dataFromFile.count).to.eq(this.totalLinks.length);
            cy.log(`Validação concluída: ${dataFromFile.count} links comparados.`);
        });
    }
}

export default new HomePage();
