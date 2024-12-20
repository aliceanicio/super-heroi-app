import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botao',
  standalone: false,

  templateUrl: './botao.component.html',
  styleUrl: './botao.component.css'
})
export class BotaoComponent {
  constructor(private router: Router) { }

  irParaCadastroHeroi() {
    this.router.navigate(['/cadastrar-heroi'])
  }

  acessarBancoHerois() {
    this.router.navigate(['/banco-herois']);
  }

}
