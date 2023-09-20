//funções - é possível tipar os parâmetros e os retornos, e se não houver tipagem do retorno retornará odado conformo o tipo passado no return.
function addNumber(x:number,y:number){
    return x + y;
}

let soma:number = addNumber(4,7);  //o tipo da variável que recebe a função precisa ser do mesmo tipo
console.log(soma);

function addToHello(name: string){
    return 'Hello ${name}';
}

console.log(addToHello("Felipe"));



function CallToPhone (phone: number | string){
    return phone;
}

console.log(CallToPhone(15000000000));

//é possível controlar também o tipo de dado que a função retornará
function CallToPhone2 (phone: number | string): number|string{
    return phone;
}


//Função assincrona

async function getOFDatabase(id : number): Promise<string> {
    return "Allan";
}