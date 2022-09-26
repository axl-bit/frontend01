import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { RespuestaCommon } from 'src/app/Models/respuesta';
import { Tipopqt } from 'src/app/Models/Tipopqt';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TipopqtService {

  private urlServicioRest = 'http://localhost:8090/rest/TipoPQT';

  constructor(private httpClient: HttpClient) { }

  getTipoPQTList(): Observable<Tipopqt[]>{
    return this.httpClient.get<Tipopqt[]>(this.urlServicioRest + '/listar', httpOptions);
  }

  getTipoPQTByID(id: string | null): Observable<Tipopqt>{
    return this.httpClient.get<Tipopqt>(`${this.urlServicioRest}/buscar/${id}`, httpOptions);
  }

  saveTipoPQT(data: Tipopqt | null): Observable<RespuestaCommon>{
    return this.httpClient.post<RespuestaCommon>(this.urlServicioRest + '/agregar', data, httpOptions)
  }

  updateTipoPQT(id: string  | null, data: Tipopqt | null): Observable<RespuestaCommon>{
    return this.httpClient.put<RespuestaCommon>(`${this.urlServicioRest}/editar/${id}`, data, httpOptions);
  }

  deleteTipoPQT(id: string | null): Observable<RespuestaCommon>{
    console.log("Invocando metodo de eliminación");
    console.log(`${this.urlServicioRest}/borrar/${id}`)
    return this.httpClient.delete<RespuestaCommon>(`${this.urlServicioRest}/borrar/${id}`, httpOptions);
  }


}
