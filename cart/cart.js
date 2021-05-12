import { getCart } from '../local-storage-utils.js';
import { renderCartItem, getCartTotal } from './render-cart.js';

const cartItems = getCart();

const anchor = document.querySelector('tbody');
const total = document.getElementById('total');
const orderBtn = document.querySelector('#order');


for (let item of cartItems){
    const tableRow = renderCartItem(item);

    anchor.append(tableRow);
}

const totalPrice = getCartTotal() ;

total.textContent = totalPrice.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
});

orderBtn.addEventListener('click',() =>{
    alert(`your order has been placed $${totalPrice}`);
    localStorage.clear();
    location.replace('../');
});