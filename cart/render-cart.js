import musics from '../data/music.js';
import { findById } from '../utils.js';
import cartItems from '../cart-items.js';
export function renderCartItem(cartItem) {
    const music = findById(musics, cartItem.id);
    
    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const priceTd = document.createElement('td');
    const totalTd = document.createElement('td');

    nameTd.textContent = music.name;
    quantityTd.textContent = cartItem.quantity;
    priceTd.textContent = music.price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const total = music.price * cartItem.quantity;

    totalTd.textContent = total.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    tr.append(nameTd, quantityTd, priceTd, totalTd);
    return tr;
    
}


export function getCartTotal() {
    let accumlator = 0;

    for (let item of cartItems) {
        const music = findById(musics, item.id);
        
        const total = item.quantity * music.price;

        accumlator = accumlator + total;
    }

    return accumlator;

    
}