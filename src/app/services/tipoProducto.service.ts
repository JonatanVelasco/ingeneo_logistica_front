import { Injectable } from '@angular/core';
import { TipoProducto } from '../models/tipoProducto';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { GlobalService } from './global.service';

@Injectable()
export class TipoProductoService {
  private urlEndPoint: string = '/api/tipoProductos';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, private global: GlobalService) { }

  getTipoProductos(): Observable<TipoProducto[]> {
    return this.http.get(`${this.global.getRutaBase() + this.urlEndPoint}/listar`).pipe(
      map(response => response as TipoProducto[])
    );
  }

  create(tipoProducto: TipoProducto) : Observable<TipoProducto> {
    return this.http.post<TipoProducto>(`${this.global.getRutaBase() + this.urlEndPoint}/`, tipoProducto, {headers: this.httpHeaders})
  }

  getTipoProducto(id: any): Observable<TipoProducto>{
    return this.http.get<TipoProducto>(`${this.global.getRutaBase() + this.urlEndPoint}/${id}`)
  }

  update(tipoProducto: TipoProducto): Observable<TipoProducto>{
    return this.http.put<TipoProducto>(`${this.global.getRutaBase() + this.urlEndPoint}/`, tipoProducto, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<TipoProducto>{
    return this.http.delete<TipoProducto>(`${this.global.getRutaBase() + this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }

}