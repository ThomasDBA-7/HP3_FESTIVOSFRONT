import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Festivo } from '../../core/entidades/Festivo';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FestivoService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.urlBase}Festivo/`;
  }

  public calcular(año: number): Observable<Festivo[]> {
    return this.http.get<Festivo[]>(`${this.url}calcular/${año}`);
  }

  public buscar(tipo: number, dato:string): Observable<Festivo[]> {
    return this.http.get<Festivo[]>(`${this.url}buscar/${tipo}/${dato}`);
  }

}
