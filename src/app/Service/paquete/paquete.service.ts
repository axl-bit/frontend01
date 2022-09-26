import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { RespuestaCommon } from 'src/app/Models/respuesta';
import { Paquete } from 'src/app/Models/Paquete';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PaqueteService {

  private urlServicioRest = 'http://localhost:8090/rest/Paquete';

  constructor(private httpClient: HttpClient) { }

  getPaqueteList(): Observable<Paquete[]>{
    return this.httpClient.get<Paquete[]>(this.urlServicioRest + '/listar', httpOptions);
  }

  getPaqueteByID(id: string | null): Observable<Paquete>{
    return this.httpClient.get<Paquete>(`${this.urlServicioRest}/buscar/${id}`, httpOptions);
  }

  savePaquete(data: Paquete | null): Observable<RespuestaCommon>{
    return this.httpClient.post<RespuestaCommon>(this.urlServicioRest + '/agregar', data, httpOptions)
  }

  updatePaquete(id: string  | null, data: Paquete | null): Observable<RespuestaCommon>{
    return this.httpClient.put<RespuestaCommon>(`${this.urlServicioRest}/editar/${id}`, data, httpOptions);
  }

}
