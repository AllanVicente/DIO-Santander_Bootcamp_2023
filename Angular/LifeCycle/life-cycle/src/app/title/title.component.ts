import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() nome: string = ''

  constructor() {
    console.log(`Construtor ${this.nome}`)
  }

  ngOnInit(): void {
    //this.nome=`olá ${this.nome}`
    this.nome = this.nome + "x"
    console.log(`OnInit ${this.nome}`)
  }

  ngOnChanges(): void {//esta atrelado ao input
    console.log(`OnChanges ${this.nome}`)
  }

}
