class CardNews extends HTMLElement{
    constructor(){
        super();

        //criando um elemento customizável
        const shadow = this.attachShadow({mode:"open"}); //open todo js pode modificar
        shadow.innerHTML = "<h1>Hello World!!!<h1>"
    }
}

//definindo apelido e a classe que é molde desse elemto
customElements.define("card-news", CardNews); 