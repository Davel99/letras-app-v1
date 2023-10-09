export default class TextController {
    constructor() {
        this.domLoader();
        this.events();
    }

    events() {
        this.delete_btn.addEventListener('click', () => {
            this.textArea.value = "";
            this.resetWCValues();
        });
        this.copy_btn.addEventListener('click', () => {
            navigator.clipboard.writeText(this.textArea.value.trim());
        })
    }

    domLoader() {
        this.textArea = document.querySelector('#letras-app');
        this.delete_btn = document.querySelector('#deleteTxt');
        this.copy_btn = document.querySelector('#copyTxt');
        this.word_counter = document.querySelector('#wordCount');
        this.char_counter = document.querySelector('#charCount');
    }

    resetWCValues(){
        this.word_counter.innerHTML = '0';
        this.char_counter.innerHTML = '0';
    }


}