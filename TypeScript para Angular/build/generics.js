"use strict";
//generics
function concatArray(...itens) {
    return new Array().concat(...itens);
}
;
const numArray = concatArray([1, 5], [3]);
const stgArray = concatArray(["João", "Goku"], ["Vegeta"]);
//problema, vetor de número pode receber um texto
//numArray.push("saitama") não é mais permitido
console.log(numArray);
console.log(stgArray);
