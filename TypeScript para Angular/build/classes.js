"use strict";
//classes
/**
 * data modifiers:
 * public já é o default
 * private, só pode ser acessado dentro da classe
 * protected dentro da classe ou classe que o herdem
 */
class Character {
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    //data modifiers podem ser utilizados em métodos, para validação,tratamento e outros que nãoprecisam ser expostos
    attack() {
        console.log(`Attack with ${this.strength} points`);
    }
}
//Character: superclass
//Magician:subclass
class Magician extends Character {
    constructor(name, strength, skill, magicPoints) {
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }
}
const p1 = new Character("Ryu", 10, 98);
const p2 = new Magician("Mago", 9, 30, 100);
p1.attack();
p2.attack();
// p1.strength =2; não é possível alterar devido ao readonly
