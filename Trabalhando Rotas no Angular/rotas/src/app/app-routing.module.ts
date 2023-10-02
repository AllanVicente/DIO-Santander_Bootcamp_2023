import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portfolio/card/card.component';

const routes: Routes = [
  {path: '', component: TitleComponent, pathMatch:'full'},
  //portfolio
    //portfolio:/1
      //portfolio:/1/abc
  {path:'portfolio', component: CardComponent, children: [
    {path:':id', component: CardComponent},
    {path:':id', component: CardComponent}
  ] }, //cria uma variável chamada id
  {path:'**', redirectTo:''}// se o usuário digitar uma URL que não existe, exemplo http://localhost:4200/sobre, retorna a página principal
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
