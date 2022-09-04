import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Tarifas } from 'src/app/Models/tarifa';
import { RespuestaCommon } from 'src/app/Models/respuesta';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class ServiceTarifaService {

  private urlServicioRest = 'http://localhost:8090/rest/Tarifa';

  constructor(private httpClient: HttpClient) { }



  getTarifaList(): Observable<Tarifas[]>{
    return this.httpClient.get<Tarifas[]>(this.urlServicioRest + '/listar', httpOptions);
  }

  getTarifaByID(id: string | null): Observable<Tarifas>{
    return this.httpClient.get<Tarifas>(`${this.urlServicioRest}/buscar/${id}`, httpOptions);
  }

  saveTarifa(data: Tarifas | null): Observable<RespuestaCommon>{

    return this.httpClient.post<RespuestaCommon>(this.urlServicioRest + '/agregar', data, httpOptions)
  }

  updateTarifa(id: string  | null, data: Tarifas | null): Observable<RespuestaCommon>{
    return this.httpClient.put<RespuestaCommon>(`${this.urlServicioRest}/editar/${id}`, data, httpOptions);
  }

  deleteTarifa(id: string | null): Observable<RespuestaCommon>{
    console.log("Invocando metodo de eliminación");
    console.log(`${this.urlServicioRest}/borrar/${id}`)
    return this.httpClient.delete<RespuestaCommon>(`${this.urlServicioRest}/borrar/${id}`, httpOptions);
  }

}
