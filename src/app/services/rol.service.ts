import { Injectable } from '@angular/core';
import { Rol } from '../models/rol';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { GlobalService } from './global.service';

@Injectable()
export class RolService {
  private urlEndPoint: string = '/api/roles';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, private global: GlobalService) { }

  getRolToSelect(): Observable<Rol[]> {

    return this.http.get(`${this.global.getRutaBase() + this.urlEndPoint}/listSelect`).pipe(
      map(response => response as Rol[])
    );
  }

  getRoles(): Observable<Rol[]> {
    return this.http.get(`${this.global.getRutaBase() + this.urlEndPoint}/listar`).pipe(
      map(response => response as Rol[])
    );
  }

  create(rol: Rol) : Observable<Rol> {
    return this.http.post<Rol>(`${this.global.getRutaBase() + this.urlEndPoint}/`, rol, {headers: this.httpHeaders})
  }

  getRol(id: any): Observable<Rol>{
    return this.http.get<Rol>(`${this.global.getRutaBase() + this.urlEndPoint}/${id}`)
  }

  update(rol: Rol): Observable<Rol>{
    return this.http.put<Rol>(`${this.global.getRutaBase() + this.urlEndPoint}/`, rol, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<Rol>{
    return this.http.delete<Rol>(`${this.global.getRutaBase() + this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }

}