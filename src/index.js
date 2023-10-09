import './style.css';
import WordCounter from './JSModules/WordCounter';
import Formatter from './JSModules/Formatter';

new WordCounter();
new Formatter();

let yearSpan = document.querySelector('#yearSpan');
let year = new Date().getFullYear();
yearSpan.innerHTML = year;