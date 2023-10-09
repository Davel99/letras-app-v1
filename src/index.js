import './style.css';
import WordCounter from './JSModules/WordCounter';
import Formatter from './JSModules/Formatter';
import TextController from './JSModules/TextController';

new WordCounter();
new Formatter();
new TextController();

let yearSpan = document.querySelector('#yearSpan');
let year = new Date().getFullYear();
yearSpan.innerHTML = year;