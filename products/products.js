import musics from '../data/music.js';
import { renderMusic } from './render-music.js';

const ul = document.getElementById('music');

for (const music of musics) {
    const el = renderMusic(music);
    ul.append(el);  
    console.log(el);
}


