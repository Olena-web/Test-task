
import addModal from './js/modal.js';
import { WordCounter, countNumber } from './js/word-counter.js';

const inputText = document.querySelector('#text');
const statElem = document.querySelector('#stat');
const maxNumber = document.querySelector('#max-number');
const label = document.querySelector("form > label:nth-child(3)");
const number = document.querySelector('#number');
let newMessage = [];


const preventInput = (event) => {
  event.preventDefault();

  const maxLength = Number(maxNumber.innerText);
  const allWords = Number(statElem.innerText.slice(0, -2));
  const removeCount = allWords - maxLength;

  let result = newMessage.reduce(function (sum, elem) {
    return sum + elem;
  }, 0);
  console.log(result)

  if (allWords > maxLength && result === 0) {
    event.target.value = event.target.value.slice(0, -`${removeCount}`);
    statElem.innerText = `${maxLength} / `;
    label.innerText = 'Sorry, you only' + ` ${maxLength}` + ' words are allowed';
    label.classList.add('error');

  } else if (allWords > maxLength && result > 0) {
    event.target.value = event.target.value.slice(0, -`${result}`);
    statElem.innerText = `${maxLength} / `;
    label.innerText = 'Sorry, you only' + ` ${maxLength}` + ' words are allowed';
    label.classList.add('error');
  } else
    label.innerText = 'Type your text';
  label.classList.remove('error')
}

const removeWords = (event) => {
  const maxLength = event.target.value;
  const allWords = Number(statElem.innerText.slice(0, -2));
  if (allWords > maxLength) {
    const text = inputText.value;
    const newText = text.split(' ');
    const lastWordLength = newText[newText.length - 1].length;
    console.log(lastWordLength);
    newMessage.push(lastWordLength);
  }

}

new WordCounter(inputText);
const render = (event) => {
  statElem.innerText = `${event.detail.wordStat.words} / `;
}

addModal();
countNumber();
$("input[type=number]").bind('keyup input', removeWords);

//number.addEventListener('change', removeWords);
inputText.addEventListener('keyup', preventInput);
inputText.addEventListener('count', render);






