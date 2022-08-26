
import addModal from './js/modal.js';


function countNumber() {
    const number = document.querySelector('#number');
    //const numberValue = number.value;
    number.addEventListener('input', (event) => {
        const value = event.target.value;
        if (value.length > 0) {
            let maxCount = value;
            console.log(maxCount);
            return maxCount;
        }
    });

}
class WordCounter {
    constructor(inputText, inputNumber) {
        this.inputText = inputText;
        this.inputNumber = inputNumber;

        this.inputText.addEventListener('input', () => {
            this.count();
        });
        this.inputNumber.addEventListener('input', () => {
            this.countNumber();
        }
        );

    }
    count() {
        let wordStat = this.getWordStat(this.inputText.value.trim());
        let numberStat = this.countNumber(this.inputNumber.value.trim());
        this.emitEvent(wordStat, numberStat);
    }

    countNumber(str) {
        if (str) {
            let maxCount = str;
            console.log(maxCount);
            return maxCount;
        }
    }

    emitEvent(wordStat, numberStat) {
        // Create count event
        let countEvent = new CustomEvent('count', {
            bubbles: true,
            cancelable: true,
            detail: {
                wordStat,
                numberStat
            }
        });
        // dispatch the count event
        this.inputText.dispatchEvent(countEvent);
        this.inputNumber.dispatchEvent(countEvent);

    }
    getWordStat(str) {
        let matches = str.match(/\S+/g);
        return {
            characters: str.length,
            words: matches ? matches.length : 0,
        };
    }
}
const inputText = document.querySelector('#text');
const statElem = document.querySelector('#stat');
const inputNumber = document.querySelector('#number');

new WordCounter(inputText, inputNumber);
const render = (event) => {
    statElem.innerHTML = `<p><span class="highlight">${event.detail.wordStat.words}</span> / <span class="highlight">${event.detail.numberStat.maxCount}</span> 
       </p>`;
}

inputText.addEventListener('count', render);
addModal();