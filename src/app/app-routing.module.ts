import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarHeroiComponent } from './cadastrar-heroi/cadastrar-heroi.component';
import { BotaoComponent } from './botao/botao.component';
import { BancoHeroisComponent } from './banco-herois/banco-herois.component';


const routes: Routes = [
  { path: '', component: BotaoComponent },
  { path: 'cadastrar-heroi', component: CadastrarHeroiComponent },
  { path: 'banco-herois', component: BancoHeroisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
