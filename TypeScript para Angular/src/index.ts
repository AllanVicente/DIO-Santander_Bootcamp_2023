// decorators
/*function ExbirNome(target: any){
    console.log(target);
}

@ExbirNome //aplicar função decorarada função
class Funcionario {}*/

function apiVersion(version:string){
    return (target: any) =>{
        Object.assign(target.prototype,{__version: version});
    }

}

//attribute decorator
function minLenght(lenght: number){
    return(target:any, key: string)=>{
        let _value = target[key];

        const getter = () => "[play]" +  _value;
        const setter = (value: string) => {
            if(value.length < lenght){
                throw new Error(`Tamanho menor do que ${lenght}`);
            }else{
                _value = value;
            };
        };

        Object.defineProperty(target,key,{
            get:getter,
            set:setter,
        });
    }
}

class Api {
    @minLenght(10)
    name : string;

    constructor(name :string){
        this.name = name;
    }
}

const api = new Api("usuariossssssssssss");
console.log(api.name);




/*@apiVersion("1.10")
class Api{}


const api = new Api();
console.log(api.__version);*/