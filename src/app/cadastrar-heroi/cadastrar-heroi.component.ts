import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroiService } from '../heroi.service';


@Component({
  selector: 'app-cadastrar-heroi',
  standalone: false,

  templateUrl: './cadastrar-heroi.component.html',
  styleUrl: './cadastrar-heroi.component.css'
})
export class CadastrarHeroiComponent {
  nome: string = '';
  nomeHeroi: string = '';
  superPoderes: string = '';
  dataNascimento: string = '';
  altura: number = 0;
  peso: number = 0;

  constructor(private router: Router) { }

  cancelar() {
    this.router.navigate(['/']);
  }

}
