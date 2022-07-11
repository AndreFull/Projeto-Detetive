var prompt = require('prompt-sync')();
console.log('Hello World!');

let pergunta1 = prompt('responda: sim ou nao? ');
let pergunta2 = prompt('responda: sim ou nao? ');
let pergunta3 = prompt('responpa: sim ou nao? ');
let pergunta4 = prompt('responpa: sim ou nao? ');
let pergunta5 = prompt('responpa: sim ou nao? ');

const resposta = [pergunta1, pergunta2, pergunta3, pergunta4, pergunta5];
//console.log(resposta);
respostas = resposta.filter(function (item) {
    if (item === 'sim') {
        return 'sim';
    }
});
console.log(`Voce respondeu ${respostas.length}x a palavra 'sim' `);

if (respostas.length >= 4) {
    console.log('culpado!');
} else if (respostas.length == 3) {
    console.log('suspeito!');
} else if (respostas.length <= 2) {
    console.log(' inocente!');
}
