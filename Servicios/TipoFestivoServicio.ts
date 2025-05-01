import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoFestivo } from './tipo-festivo.model';

@Injectable({
  providedIn: 'root'
})
export class TipoFestivoService {

  private apiUrl = 'https://localhost:5001/api/tiposfestivo'; 
  constructor(private http: HttpClient) { }

  obtenerTodos(): Observable<TipoFestivo[]> {
    return this.http.get<TipoFestivo[]>(`${this.apiUrl}`);
  }

  obtener(id: number): Observable<TipoFestivo> {
    return this.http.get<TipoFestivo>(`${this.apiUrl}/${id}`);
  }

  agregar(tipoFestivo: TipoFestivo): Observable<TipoFestivo> {
    return this.http.post<TipoFestivo>(`${this.apiUrl}`, tipoFestivo);
  }

  modificar(tipoFestivo: TipoFestivo): Observable<TipoFestivo> {
    return this.http.put<TipoFestivo>(`${this.apiUrl}/${tipoFestivo.id}`, tipoFestivo);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}