import { Injectable } from '@angular/core';
import { TipoAlmacenamiento } from '../models/tipoAlmacenamiento';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { GlobalService } from './global.service';

@Injectable()
export class TipoAlmacenamientoService {
  private urlEndPoint: string = '/api/tipoAlmacenamientos';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, private global: GlobalService) { }

  getTipoAlmacenamientos(): Observable<TipoAlmacenamiento[]> {
    return this.http.get(`${this.global.getRutaBase() + this.urlEndPoint}/listar`).pipe(
      map(response => response as TipoAlmacenamiento[])
    );
  }

  create(tipoAlmacenamiento: TipoAlmacenamiento) : Observable<TipoAlmacenamiento> {
    return this.http.post<TipoAlmacenamiento>(`${this.global.getRutaBase() + this.urlEndPoint}/`, tipoAlmacenamiento, {headers: this.httpHeaders})
  }

  getTipoAlmacenamiento(id: any): Observable<TipoAlmacenamiento>{
    return this.http.get<TipoAlmacenamiento>(`${this.global.getRutaBase() + this.urlEndPoint}/${id}`)
  }

  update(tipoAlmacenamiento: TipoAlmacenamiento): Observable<TipoAlmacenamiento>{
    return this.http.put<TipoAlmacenamiento>(`${this.global.getRutaBase() + this.urlEndPoint}/`, tipoAlmacenamiento, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<TipoAlmacenamiento>{
    return this.http.delete<TipoAlmacenamiento>(`${this.global.getRutaBase() + this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }

}