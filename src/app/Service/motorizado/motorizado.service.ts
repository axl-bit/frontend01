import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { RespuestaCommon } from 'src/app/Models/respuesta';
import { Motorizado } from 'src/app/Models/Motorizado';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MotorizadoService {

  private urlServicioRest = 'http://localhost:8090/rest/Motorizado';

  constructor(private httpClient: HttpClient) { }



  getMotorizadoList(): Observable<Motorizado[]>{
    return this.httpClient.get<Motorizado[]>(this.urlServicioRest + '/listar', httpOptions);
  }

  getMotorizadoByID(id: string | null): Observable<Motorizado>{
    return this.httpClient.get<Motorizado>(`${this.urlServicioRest}/buscar/${id}`, httpOptions);
  }

  saveMotorizado(data: Motorizado | null): Observable<RespuestaCommon>{

    return this.httpClient.post<RespuestaCommon>(this.urlServicioRest + '/agregar', data, httpOptions)
  }

  updateMotorizado(id: string  | null, data: Motorizado | null): Observable<RespuestaCommon>{
    return this.httpClient.put<RespuestaCommon>(`${this.urlServicioRest}/editar/${id}`, data, httpOptions);
  }

  deleteMotorizado(id: string | null): Observable<RespuestaCommon>{
    console.log("Invocando metodo de eliminación");
    console.log(`${this.urlServicioRest}/borrar/${id}`)
    return this.httpClient.delete<RespuestaCommon>(`${this.urlServicioRest}/borrar/${id}`, httpOptions);
  }
}
