// cypress/pages/automationExercise/ProductPage.js

class ProductPage {

    productQuantity = 0;

    visit() {
        cy.visit('/products');
        this.validateProductPage();
    }

    validateProductPage() {
        cy.get('img#sale_image')
            .should('be.visible')
            .and('have.attr', 'src', '/static/images/shop/sale.jpg')
            .and('have.attr', 'alt', 'Website for practice');

        cy.get('input#search_product')
            .should('be.visible')
            .and('have.attr', 'placeholder', 'Search Product');

        cy.get('button#submit_search')
            .should('be.visible')
            .within(() => {
                cy.get('i.fa.fa-search').should('exist');
            });
    }

    addToCart() {
        cy.get('.single-products')
            .first()
            .trigger('mouseover');

        cy.get('.single-products .productinfo .add-to-cart', { timeout: 5000 })
            .should('be.visible')
            .click();

        cy.get('.modal-content')
            .should('contain.text', 'Added!')
            .and('be.visible');
    }

    validateProductInCart(productName, productPrice) {
        cy.log('Product Price', productPrice);

        cy.visit('/view_cart');

        cy.get('.cart_description h4 a')
            .should('contain.text', productName)
            .and('be.visible');

        cy.get('.cart_price')
            .should('contain.text', 'Rs.', productPrice)
            .and('be.visible');

        cy.get('.cart_quantity')
            .should('be.visible')
            .invoke('text')
            .then((quantity) => {
                this.productQuantity = parseInt(quantity, 10);
                cy.log('Quantity', this.productQuantity);

                const numericProductPrice = parseFloat(productPrice.replace('Rs. ', ''));
                cy.log('Product Price', numericProductPrice);

                const expectedTotal = this.productQuantity * numericProductPrice;
                cy.log('Expected Total', expectedTotal.toFixed(2));

                cy.get('.cart_total_price')
                    .should('contain.text', expectedTotal);
            });
    }

    searchProduct(productName) {
        cy.get('input[name="search"]')
            .should('be.visible')
            .type(productName);

        cy.get('#submit_search > .fa')
            .should('be.visible')
            .click();

        cy.contains('Searched Products')
            .should('be.visible')
            .and('contain.text', 'Searched Products');
    }

    validateProductDetails(productName, productPrice) {
        cy.get('.single-products').within(() => {

            cy.get('img')
                .should('have.attr', 'src')
                .and('include', '/get_product_picture/');

            cy.contains('h2', productPrice)
                .should('be.visible');

            cy.contains('p', productName)
                .should('be.visible');

            cy.get('a.add-to-cart')
                .should('have.attr', 'data-product-id')
                .and('match', /^[0-9]+$/);
        });
    }

    navigateToCheckout() {
        cy.get('.col-sm-6 > .btn')
            .should('be.visible')
            .click();
    }
}

export default new ProductPage();
