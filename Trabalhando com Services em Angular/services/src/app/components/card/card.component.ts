import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  name:string = "CHARMANDER"
  attributesTypes:string[]=['FIRE','ROCK']

  constructor(
    private service:PokemonService //injetando
  ){

  }

  ngOnInit():void{
      this.service.getPokemon("charizard").subscribe(
        {
          next: (res) => {
                            console.log(res)
                            console.log(res.id)
                            console.log(res.name)
                            console.log(res.sprites.front_default)
                            console.log(res.types)
                         },
          error: (err) => console.log(err)
        }
      )
  }

}

