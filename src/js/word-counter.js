import { exeptions } from './constants.js';

export function countNumber() {
    const number = document.querySelector('#number');
    const maxNumber = document.querySelector('#max-number');
    number.addEventListener('input', (event) => {
        const value = event.target.value;
        if (value.length > 0) {
            let maxCount = value;
            maxNumber.innerText = `${maxCount}`;
            return maxCount;
        }
    });

}
export class WordCounter {
    constructor(inputText) {
        this.inputText = inputText;
        this.inputText.addEventListener('input', () => {
            this.count();
        });
    }

    count() {
        let wordStat = this.getWordStat(this.inputText.value.trim());
        this.emitEvent(wordStat);
    }

    emitEvent(wordStat) {
        // Create count event
        let countEvent = new CustomEvent('count', {
            bubbles: true,
            cancelable: true,
            detail: {
                wordStat,

            }
        });
        // dispatch the count event
        this.inputText.dispatchEvent(countEvent);
    }

    getWordStat(str) {
        let matches = str.match(/\S+/g);
        for (const element of exeptions) {
            let newArray = matches.filter(function (f) {
                return f !== (element);
            }
            );
            matches = newArray;
        }

        return {
            words: matches ? matches.length : 0,
        };
    }
}
