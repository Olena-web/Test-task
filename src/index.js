
import addModal from './js/modal.js';
import { WordCounter, countNumber } from './js/word-counter.js';


const inputText = document.querySelector('#text');
const statElem = document.querySelector('#stat');
const inputNumber = document.querySelector('#number');


new WordCounter(inputText, inputNumber);
const render = (event) => {
    statElem.innerText = `${event.detail.wordStat.words} / `;

}

inputText.addEventListener('count', render);
addModal();
countNumber();