
import { addItemToCart } from '../local-storage-utils.js';

export function renderMusic(music){
    const li = document.createElement('li');
    li.classList.add(music.category);
    li.title = music.description;

    const h3 = document.createElement('h3');
    h3.textContent = music.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = `../assets/${music.image}`;
    img.alt = `${music.name} image`;
    li.appendChild(img);
    
    const p = document.createElement('p');
    p.classList.add('price');
    p.textContent = `$${music.price.toFixed(2)}`;

    const btn = document.createElement('button');
    btn.textContent = 'Add';
    btn.value = music.id;
    p.appendChild(btn);
    console.log(btn.value);

    btn.addEventListener('click', () => {
        addItemToCart(music.id);
        // console.log(musics.id);

    });

    li.appendChild(p);
    return li;
}