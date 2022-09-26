import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { RespuestaCommon } from 'src/app/Models/respuesta';
import { Ordenentrega } from 'src/app/Models/OrdenEntrega';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class OrdenentregaService {

  private urlServicioRest = 'http://localhost:8090/rest/OrdenEntrega';

  constructor(private httpClient: HttpClient) { }

  getOrdenentregaList(): Observable<Ordenentrega[]>{
    return this.httpClient.get<Ordenentrega[]>(this.urlServicioRest + '/listar', httpOptions);
  }

  getOrdenentregaByID(id: string | null): Observable<Ordenentrega>{
    return this.httpClient.get<Ordenentrega>(`${this.urlServicioRest}/buscar/${id}`, httpOptions);
  }

  saveOrdenentrega(data: Ordenentrega | null): Observable<RespuestaCommon>{
    return this.httpClient.post<RespuestaCommon>(this.urlServicioRest + '/agregar', data, httpOptions)
  }

  updateOrdenentrega(id: string  | null, data: Ordenentrega | null): Observable<RespuestaCommon>{
    return this.httpClient.put<RespuestaCommon>(`${this.urlServicioRest}/editar/${id}`, data, httpOptions);
  }
}
