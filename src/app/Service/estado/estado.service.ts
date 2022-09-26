import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { RespuestaCommon } from 'src/app/Models/respuesta';
import { Estado } from 'src/app/Models/Estado';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private urlServicioRest = 'http://localhost:8090/rest/Estado';

  constructor(private httpClient: HttpClient) { }



  getEstadoList(): Observable<Estado[]>{
    return this.httpClient.get<Estado[]>(this.urlServicioRest + '/listar', httpOptions);
  }

  getEstadoByID(id: string | null): Observable<Estado>{
    return this.httpClient.get<Estado>(`${this.urlServicioRest}/buscar/${id}`, httpOptions);
  }

  saveEstado(data: Estado | null): Observable<RespuestaCommon>{

    return this.httpClient.post<RespuestaCommon>(this.urlServicioRest + '/agregar', data, httpOptions)
  }

  updateEstado(id: string  | null, data: Estado | null): Observable<RespuestaCommon>{
    return this.httpClient.put<RespuestaCommon>(`${this.urlServicioRest}/editar/${id}`, data, httpOptions);
  }

  deleteEstado(id: string | null): Observable<RespuestaCommon>{
    console.log("Invocando metodo de eliminación");
    console.log(`${this.urlServicioRest}/borrar/${id}`)
    return this.httpClient.delete<RespuestaCommon>(`${this.urlServicioRest}/borrar/${id}`, httpOptions);
  }
}
