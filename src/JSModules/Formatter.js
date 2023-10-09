export default class Formatter {
    constructor() {
        this.formateo = "";
        this.domLoader();
        this.rules = [
            (text) => {
                return text.replace(/(\t)+/g, "");
            },
            (text) => {
                return text.replace(/(\n)+/g, "\n");
            },
            (text) => {
                text = "\t" + text;
                return text.replace(/\n/g, "\n\t");
            }
        ]
        this.events();
    }

    events() {
        this.btn.addEventListener('click', () => {
            let text = this.textArea.value.trim();
            text = this.rules[0](text);
            text = this.rules[1](text);
            text = this.rules[2](text);
            this.textArea.value = text;
            navigator.clipboard.writeText(text);
        });
    }

    domLoader() {
        this.textArea = document.querySelector('#wordCounter-app');
        this.btn = document.querySelector('#formatter_btn');
    }


}