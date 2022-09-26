import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { RespuestaCommon } from 'src/app/Models/respuesta';
import { Serviciodetalle } from 'src/app/Models/ServicioDetalle';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class DetalleservicioService {

  private urlServicioRest = 'http://localhost:8090/rest/DetalleServicio';

  constructor(private httpClient: HttpClient) { }

  getServiciodetalleList(): Observable<Serviciodetalle[]>{
    return this.httpClient.get<Serviciodetalle[]>(this.urlServicioRest + '/listar', httpOptions);
  }

  getServiciodetalleByID(id: string | null): Observable<Serviciodetalle>{
    return this.httpClient.get<Serviciodetalle>(`${this.urlServicioRest}/buscar/${id}`, httpOptions);
  }

  saveServiciodetalle(data: Serviciodetalle | null): Observable<RespuestaCommon>{
    return this.httpClient.post<RespuestaCommon>(this.urlServicioRest + '/agregar', data, httpOptions)
  }

  updateServiciodetalle(id: string  | null, data: Serviciodetalle | null): Observable<RespuestaCommon>{
    return this.httpClient.put<RespuestaCommon>(`${this.urlServicioRest}/editar/${id}`, data, httpOptions);
  }
}
