// cypress/support/state.js

let product = '';
let price = '';

export const setProduct = (prod) => {
    product = prod;
};

export const getProduct = () => {
    return product;
};

export const setPrice = (val) => {
    price = val;
};

export const getPrice = () => {
    return price;
};
