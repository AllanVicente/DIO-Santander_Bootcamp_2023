//generics
function  concatArray<T>(...itens : T[]):T[]{//'...' = spread operator T é para informar que mais a frente deve ser informado o tipo de dado que retornará
    return new Array().concat(...itens)
};

const numArray = concatArray<number[]>([1,5],[3]);
const stgArray = concatArray<string[]>(["João", "Goku"],["Vegeta"]);

//problema, vetor de número pode receber um texto
//numArray.push("saitama") não é mais permitido

console.log(numArray);
console.log(stgArray);

