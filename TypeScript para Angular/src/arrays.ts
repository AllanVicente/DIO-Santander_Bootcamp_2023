/**
 * arrays
 */

let dados: string[] = ["Allan","João", "Maria"];
let dados2: Array<string> = ["Allan","João", "Maria"];

//Multi types
let infos: (string | number)[]=["Allan",18,"Maria"];

/**
 * Tuplas - os dados presentes no array tem umaordem pré determinada
 */
let boleto : [string, number, number] = ["água" , 44.60, 123456];

/**
 * arrays métodos,os mesmos presentes em javascript
 */

/**
 * Datas
 */

let aniversario:Date = new Date("2022-12-01 05:00");
console.log(aniversario.toString());


