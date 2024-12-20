import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroiService {

  private apiUrl = 'https://localhost:5001/api/herois';

  constructor(private http: HttpClient) { }

  // Função para criar um novo herói
  criarHeroi(heroi: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(this.apiUrl, heroi, { headers });
  }

  // Função para obter todos os heróis
  obterHerois(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
