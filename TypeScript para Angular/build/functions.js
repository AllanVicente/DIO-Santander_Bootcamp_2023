"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//funções - é possível tipar os parâmetros e os retornos, e se não houver tipagem do retorno retornará odado conformo o tipo passado no return.
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(4, 7); //o tipo da variável que recebe a função precisa ser do mesmo tipo
console.log(soma);
function addToHello(name) {
    return 'Hello ${name}';
}
console.log(addToHello("Felipe"));
function CallToPhone(phone) {
    return phone;
}
console.log(CallToPhone(15000000000));
//é possível controlar também o tipo de dado que a função retornará
function CallToPhone2(phone) {
    return phone;
}
//Função assincrona
function getOFDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Allan";
    });
}
