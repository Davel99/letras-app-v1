(()=>{"use strict";new class{constructor(){this.__chars=0,this.__words=0,this.domLoader(),this.events()}events(){this.contador.addEventListener("input",(()=>this.wordCount())),this.word_btn.addEventListener("click",(()=>{navigator.clipboard.writeText(this.__words)})),this.char_btn.addEventListener("click",(()=>{navigator.clipboard.writeText(this.__chars)}))}domLoader(){this.contador=document.querySelector("#letras-app"),this.word_counter=document.querySelector("#wordCount"),this.char_counter=document.querySelector("#charCount"),this.word_btn=document.querySelector("#copyWordsBtn"),this.char_btn=document.querySelector("#copyCharsBtn")}wordCount(){let t=this.contador.value.trim();t=t.replace(/(\n)+/g," "),t=t.replace(/(\t)+/g,""),t=t.trim(),this.__chars=t.length,this.__words=""===t?0:t.split(" ").length,this.word_counter.innerHTML=this.__words,this.char_counter.innerHTML=this.__chars}},new class{constructor(){this.formateo="",this.domLoader(),this.rules=[t=>t.replace(/(\t)+/g,""),t=>t.replace(/(\n)+/g,"\n"),t=>(t="\t"+t).replace(/\n/g,"\n\t")],this.events()}events(){this.btn.addEventListener("click",(()=>{let t=this.textArea.value.trim();t=this.rules[0](t),t=this.rules[1](t),t=this.rules[2](t),this.textArea.value=t,navigator.clipboard.writeText(t)}))}domLoader(){this.textArea=document.querySelector("#letras-app"),this.btn=document.querySelector("#formatter_btn")}},new class{constructor(){this.domLoader(),this.events()}events(){this.delete_btn.addEventListener("click",(()=>{this.textArea.value="",this.resetWCValues()})),this.copy_btn.addEventListener("click",(()=>{navigator.clipboard.writeText(this.textArea.value)}))}domLoader(){this.textArea=document.querySelector("#letras-app"),this.delete_btn=document.querySelector("#deleteTxt"),this.copy_btn=document.querySelector("#copyTxt"),this.word_counter=document.querySelector("#wordCount"),this.char_counter=document.querySelector("#charCount")}resetWCValues(){this.word_counter.innerHTML="0",this.char_counter.innerHTML="0"}};let t=document.querySelector("#yearSpan"),e=(new Date).getFullYear();t.innerHTML=e})();