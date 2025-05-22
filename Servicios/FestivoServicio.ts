import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Festivo } from './festivo.model';

@Injectable({
  providedIn: 'root'
})
export class FestivoService {

  private apiUrl = 'https://localhost:5001/api/festivos'; 

  constructor(private http: HttpClient) { }

  obtenerTodos(): Observable<Festivo[]> {
    return this.http.get<Festivo[]>(`${this.apiUrl}`);
  }

  obtener(id: number): Observable<Festivo> {
    return this.http.get<Festivo>(`${this.apiUrl}/${id}`);
  }

  agregar(festivo: Festivo): Observable<Festivo> {
    return this.http.post<Festivo>(`${this.apiUrl}`, festivo);
  }

  modificar(festivo: Festivo): Observable<Festivo> {
    return this.http.put<Festivo>(`${this.apiUrl}/${festivo.id}`, festivo);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  buscar(tipo: number, dato: string): Observable<Festivo[]> {
    return this.http.get<Festivo[]>(`${this.apiUrl}/buscar?tipo=${tipo}&dato=${dato}`);
  }

  validarFecha(dia: number, mes: number, anio: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/validarfecha?dia=${dia}&mes=${mes}&anio=${anio}`);
  }
}
