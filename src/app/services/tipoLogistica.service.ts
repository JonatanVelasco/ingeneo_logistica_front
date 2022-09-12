import { Injectable } from '@angular/core';
import { TipoLogistica } from '../models/tipoLogistica';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { GlobalService } from './global.service';

@Injectable()
export class TipoLogisticaService {
  private urlEndPoint: string = '/api/tipoLogisticas';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, private global: GlobalService) { }

  getTipoLogisticas(): Observable<TipoLogistica[]> {
    return this.http.get(`${this.global.getRutaBase() + this.urlEndPoint}/listar`).pipe(
      map(response => response as TipoLogistica[])
    );
  }

  create(tipoLogistica: TipoLogistica) : Observable<TipoLogistica> {
    return this.http.post<TipoLogistica>(`${this.global.getRutaBase() + this.urlEndPoint}/`, tipoLogistica, {headers: this.httpHeaders})
  }

  getTipoLogistica(id: any): Observable<TipoLogistica>{
    return this.http.get<TipoLogistica>(`${this.global.getRutaBase() + this.urlEndPoint}/${id}`)
  }

  update(tipoLogistica: TipoLogistica): Observable<TipoLogistica>{
    return this.http.put<TipoLogistica>(`${this.global.getRutaBase() + this.urlEndPoint}/`, tipoLogistica, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<TipoLogistica>{
    return this.http.delete<TipoLogistica>(`${this.global.getRutaBase() + this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }

}