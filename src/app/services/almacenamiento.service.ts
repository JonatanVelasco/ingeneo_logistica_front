import { Injectable } from '@angular/core';
import { Almacenamiento } from '../models/almacenamiento';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { GlobalService } from './global.service';

@Injectable()
export class AlmacenamientoService {
  private urlEndPoint: string = '/api/almacenamientos';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, private global: GlobalService) { }

  getAlmacenamientos(): Observable<Almacenamiento[]> {
    //return of(CLIENTES);
    return this.http.get(`${this.global.getRutaBase() + this.urlEndPoint}/listar`).pipe(
      map(response => response as Almacenamiento[])
    );
  }

  create(almacen: Almacenamiento) : Observable<Almacenamiento> {
    return this.http.post<Almacenamiento>(`${this.global.getRutaBase() + this.urlEndPoint}/`, almacen, {headers: this.httpHeaders})
  }

  getAlmacenamiento(id: any): Observable<Almacenamiento>{
    return this.http.get<Almacenamiento>(`${this.global.getRutaBase() + this.urlEndPoint}/${id}`)
  }

  update(almacen: Almacenamiento): Observable<Almacenamiento>{
    return this.http.put<Almacenamiento>(`${this.global.getRutaBase() + this.urlEndPoint}/`, almacen, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<Almacenamiento>{
    return this.http.delete<Almacenamiento>(`${this.global.getRutaBase() + this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }

}