"use strict";
//interfaces (type x interfaces)
const bot1 = {
    id: 1,
    name: "megaman",
};
const bot2 = {
    id: 1,
    name: "megaman",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
console.log(bot1);
console.log(bot2);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `hello I'm ${this.name}`; //interpolação de string = junção texto(string) + variável.
    }
}
const p = new Pessoa(1, "gutsman");
console.log(p.sayHello());
//o readonly impede a alteração pelo mundo externo
//Exemplo console.log((bot1.id = 2));
