import { findById } from './utils.js';

const CART = 'CART';
export function getCart() {
    const stringCart = localStorage.getItem(CART);
    const parsedCart = JSON.parse(stringCart);

    if (parsedCart) {
        return parsedCart;
    } else {
        return [];
    }
}

export function setCart(someCart) {
    const stringCart = JSON.stringify(someCart);
    localStorage.setItem(CART, stringCart);
}

export function addItemToCart(productId) {
    const cart = getCart();
    console.log(cart, productId,);
    const cartItem = findById(cart, productId);
    console.log(cartItem);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        const newItem = {
            id: productId,
            quantity: 1,
        };

        cart.push(newItem);
    }
    setCart(cart);
}