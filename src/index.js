
import addModal from './js/modal.js';
import { WordCounter, countNumber } from './js/word-counter.js';
import { ARTICLES, CONJUNCTIONS, PREPOSITIONS } from './js/constants.js';

addModal();
countNumber();

const inputText = document.querySelector('#text');
const statElem = document.querySelector('#stat');
const maxNumber = document.querySelector('#max-number');

const number = document.querySelector('#number');


new WordCounter(inputText);
const render = (event) => {
    statElem.innerText = `${event.detail.wordStat.words} / `;
}

const preventInput = (event) => {
    event.preventDefault();
    const maxLength = Number(maxNumber.innerText);
    const allWords = Number(statElem.innerText.slice(0, -2));
    if (allWords > maxLength) {
        event.target.value = event.target.value.slice(0, -1);
        statElem.innerText = `${maxLength} / `;
        alert("Sorry, you only " + maxLength + " words are allowed")
    };
}

const removeWords = (event) => {
    event.preventDefault();
    const maxLength = Number(maxNumber.innerText);
    const allWords = Number(statElem.innerText.slice(0, -2));
    if (allWords > maxLength) {
        const countWords = allWords - maxLength;
        inputText.addEventListener('keyup', (event) => {
            event.target.value.slice(0, -`${countWords}`);
        });
    };
}

inputText.addEventListener('keyup', preventInput);
inputText.addEventListener('count', render);
number.addEventListener('input', removeWords);




