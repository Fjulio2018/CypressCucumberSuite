class ProductPage {



    validateProductPage() {
        cy.url().should('include', '/products');
        cy.contains('All Products').should('exist').and('be.visible');
    }

    searchProduct(productName) {
        cy.get('input[data-qa="search-product"]').type(productName);
        cy.get('button[data-qa="search-button"]').click();
    }

    validateSearchResults(productName) {
        cy.contains(productName)
            .should('exist')
            .and('be.visible');
    }

    addProductToCart(productName) {
        cy.contains(productName)
            .parent()
            .find('button[data-qa="add-to-cart"]')
            .click();
    }

    validateProductInCart(productName) {
        cy.get('a[href="/view_cart"]').click();
        cy.contains(productName).should('exist').and('be.visible');
    }
}

export default new ProductPage();
