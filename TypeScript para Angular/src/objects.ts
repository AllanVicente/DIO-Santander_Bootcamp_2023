//objet - precisa receber um objeto sem restrições quanto as propriedades, ou seja, sem previsibilidade;

let produto : object = { 
    name: "Allan",
    cidade: "Sorocaba",
    idade: 18,
};

//objeto tipado - com previsibilidade - 'sheipado'
type ProdutoLoja = {
    nome : string;
    preco : number;
    unidades: number;
}

let meuProduto: ProdutoLoja = {
    nome: "tenis",
    preco: 89.99,
    unidades: 5,
}

/*type heroi={

    name:string;
    vulgo:string;
};

function printaObjetos(pessoa: heroi){
    console.log(pessoa);
}

printaObjetos({
    name: "bruce wayne",
    vulgo: "batman"
});

console.log("Hello world!");*/

