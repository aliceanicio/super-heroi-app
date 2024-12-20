import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-banco-herois',
  standalone: false,

  templateUrl: './banco-herois.component.html',
  styleUrl: './banco-herois.component.css'
})
export class BancoHeroisComponent implements OnInit {
  herois = [
    {
      nome: 'Bruce Wayne',
      nomeHeroi: 'Batman',
      superPoderes: 'Inteligência, Combate corpo a corpo, Gadgets',
      dataNascimento: '1985-02-19',
      altura: 188,
      peso: 95,
      showDetails: false
    },
    {
      nome: 'Clark Kent',
      nomeHeroi: 'Superman',
      superPoderes: 'Força sobre-humana, Visão de calor, Voo',
      dataNascimento: '1978-06-01',
      altura: 191,
      peso: 98,
      showDetails: false
    },
    {
      nome: 'Diana Prince',
      nomeHeroi: 'Mulher-Maravilha',
      superPoderes: 'Força, Velocidade, Imortalidade',
      dataNascimento: '1980-07-01',
      altura: 180,
      peso: 75,
      showDetails: false
    }
  ];

  searchTerm: string = ''; // Valor da pesquisa
  heroisFiltrados = this.herois; // Inicialmente todos os heróis

  constructor(private router: Router) { }

  ngOnInit(): void { }

  filtrarHerois() {
    this.heroisFiltrados = this.herois.filter(heroi =>
      heroi.nome.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      heroi.nomeHeroi.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      heroi.superPoderes.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  toggleDetails(heroi: any) {
    heroi.showDetails = !heroi.showDetails;
  }

  voltar() {
    this.router.navigate(['/'])
  }

}
