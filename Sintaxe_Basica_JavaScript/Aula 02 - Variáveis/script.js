//tipo primitivos

//boolean
var vOuf = false;
console.log(typeof(vOuf));

//number

var number = 1;
console.log(typeof(number));

// string
var string = 'Allan';
console.log(typeof(string));

// function
var funcao = function() {}
console.log(typeof(funtion));

//variável

var variavel;
console.log(typeof(variavel));

let variavel2;
console.log(typeof(variavel2));

const constante = "Ana";
//constante = "João";
console.log(typeof(constante));

var escopoGlobal = 'Global'
console.log(escopoGlobal);

function escopolocal(){
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}
escopolocal();

//atribuição
var atribuicao = 'diana';

//comparação
var comparacao ='0' ==0;
console.log(comparacao);

//comparação identica
var comparacaoidentica ='0'===0;
console.log(comparacaoidentica);

//adição
var adicao = 1 + 2;
console.log(adicao);

//subtração
var subtracao = 3 - 2;
console.log(subtracao);

//multiplicação
var multiplicacao = 3 * 2;
console.log(multiplicacao);

//divisão real
var divReal = 6 * 2;
console.log(divReal);

//divisão inteira
var divInteira = 5 % 2;
console.log(divInteira);

//potenciação
var potenciacao = 5 ** 2;
console.log(potenciacao);

//Maior que
var maiorQue =  5>2;
console.log(maiorQue);

//Maior que
var menorQue =  5<2;
console.log(menorQue);

//Maior ou igual
var maiorIgual =  5>=2;
console.log(maiorIgual);

//Menor ou igual
var menorIgual =  5<=2;
console.log(menorIgual);

//&& e
var e = true && true;
console.log(e);

//|| ou
var ou = false || false;
console.log(ou);

//! não = inverte
var nao =!true;
console.log(nao);