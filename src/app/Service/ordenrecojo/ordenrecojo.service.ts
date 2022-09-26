import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { RespuestaCommon } from 'src/app/Models/respuesta';
import { Ordenrecojo } from 'src/app/Models/OrdenRecojo';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OrdenrecojoService {

  private urlServicioRest = 'http://localhost:8090/rest/OrdenRecojo';

  constructor(private httpClient: HttpClient) { }

  getOrdenrecojoList(): Observable<Ordenrecojo[]>{
    return this.httpClient.get<Ordenrecojo[]>(this.urlServicioRest + '/listar', httpOptions);
  }

  getOrdenrecojoByID(id: string | null): Observable<Ordenrecojo>{
    return this.httpClient.get<Ordenrecojo>(`${this.urlServicioRest}/buscar/${id}`, httpOptions);
  }

  saveOrdenrecojo(data: Ordenrecojo | null): Observable<RespuestaCommon>{
    return this.httpClient.post<RespuestaCommon>(this.urlServicioRest + '/agregar', data, httpOptions)
  }

  updateOrdenrecojo(id: string  | null, data: Ordenrecojo | null): Observable<RespuestaCommon>{
    return this.httpClient.put<RespuestaCommon>(`${this.urlServicioRest}/editar/${id}`, data, httpOptions);
  }
}
