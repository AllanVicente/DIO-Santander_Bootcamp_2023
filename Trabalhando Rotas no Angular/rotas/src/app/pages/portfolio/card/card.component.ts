import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  constructor(
    private activeRoute : ActivatedRoute,
    private navegador: Router){

    //http://localhost:4200/portfolio/{1}
    this.activeRoute.params.subscribe(
      res => console.log(res)
    )
    //http://localhost:4200/portfolio/1?{name=felipe&token=123}
    this.activeRoute.firstChild?.queryParams.subscribe(
      res => console.log(res)
    )
    this.activeRoute.queryParams.subscribe(
      res => console.log(res)
    )
  }

  //Força o componente a fazer um navegação, no caso, retorna para a página anterior depois de 5s

  ngOnInit(): void{
    setInterval(()=>{
      this.navegador.navigate(['/'])
    },5000)
  }

}
