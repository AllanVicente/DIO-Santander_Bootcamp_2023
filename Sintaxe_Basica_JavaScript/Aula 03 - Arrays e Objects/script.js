//o que são vetores e arrays

//como declarar um array
let array = ['string', 1 ,true];
console.log(array);

//pode guardar vários tipos de dados
let array2 = ['string', 1 , true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array2);

//foEach()

array.forEach(function(item, index){console.log(item, index)})

//adiciona um item no final do array
array.push('novo item');
console.log(array);

//retira um item do final do array
array.pop();
console.log(array);

//retira um item do inicio do array
array.shift();
console.log(array);

//adiciona um item no inicio
array.unshift('novo item');
console.log(array);

//informa o indice do item
console.log(array.indexOf(true));

//apaga os índices informados
//array.splice(0,3);
//console.log(array);

//criar um novo array a partir de um existente 
let novoArray = array.slice(0,1);
console.log(novoArray);



let object = {string:'string', number : 1, boolean : true , array:["array"], objectInterno: {objectInterno: 'Objeto Interno'} };
console.log(object.objectInterno);

var string = object.string;
console.log(string);

var arrayInterno =  object.array;
console.log(arrayInterno);

var { string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);