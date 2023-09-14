class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:'open'});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
        
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

            const cardLeft = document.createElement("div");
            cardLeft.setAttribute("class", "card__left");

                const autor = document.createElement("span");
                autor.textContent = "By " +  (this.getAttribute("autor") || "Anonymous");

                const linkTitle = document.createElement("a");
                linkTitle.textContent = this.getAttribute("title");
                linkTitle.href = this.getAttribute("link-url");

                const newsContent = document.createElement("p")
                newsContent.textContent = this.getAttribute("content");

                cardLeft.appendChild(autor);
                cardLeft.appendChild(linkTitle);
                cardLeft.appendChild(newsContent);
                

            const cardRight = document.createElement("div");
            cardRight.setAttribute("class", "card__right");

                const newsImage = document.createElement("img");
                newsImage.src = this.getAttribute("photo") || "assets/default-noticia.png";
                newsImage.alt= " Foto da notícia"

                cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles(){
        const style =document.createElement("style");
        style.textContent=`
        .card{
            width: 80%;
            display: flex;
            flex-direction: row; 
            -webkit-box-shadow: 9px 9px 29px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 9px 9px 29px 0px rgba(0,0,0,0.75);
            box-shadow: 9px 9px 29px 0px rgba(0,0,0,0.75);
            justify-content: space-between;
        }
        
        
        .card__left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card__left a{
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }
        
        .card__left p{
            color: gray;
        }
        
        .card__left span{
            font-weight: 400;
        }
        
        .card__right img{
            display: flex;
        }
        `

        return style;
    }
    
}

customElements.define("card-news", CardNews);

/*esqueleto de um elemento mais profissinal

class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:open});
        
    }

    build(){}

    styles(){}
    
}

customElements.define("card-news", CardNews);
*/



/*class CardNews extends HTMLElement{
    constructor(){
        super();

        //criando um elemento customizável
        const shadow = this.attachShadow({mode:"open"}); //open todo js pode modificar
        shadow.innerHTML = "<h1>Hello World!!!<h1>"
    }
}

//definindo apelido e a classe que é molde desse elemto
customElements.define("card-news", CardNews);*/