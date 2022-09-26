import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Provincia } from 'src/app/Models/Provincia';
import { RespuestaCommon } from 'src/app/Models/respuesta'

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  private urlServicioRest = 'http://localhost:8090/rest/Provincia';

  constructor(private httpClient: HttpClient) { }

  getProvinciaList(): Observable<Provincia[]>{
    return this.httpClient.get<Provincia[]>(this.urlServicioRest + '/listar');
  }

  getProvinciaByID(id: string | null): Observable<Provincia>{
    return this.httpClient.get<Provincia>(`${this.urlServicioRest}/buscar/${id}`);
  }

  saveProvincia(data: Provincia | null): Observable<RespuestaCommon>{
    return this.httpClient.post<RespuestaCommon>(this.urlServicioRest + '/agregar', data)
  }

  updateProvincia(id: string  | null, data: Provincia | null): Observable<RespuestaCommon>{
    return this.httpClient.put<RespuestaCommon>(`${this.urlServicioRest}/editar/${id}`, data);
  }

  deleteProvincia(id: string | null): Observable<RespuestaCommon>{
    console.log("Invocando metodo de eliminación");
    console.log(`${this.urlServicioRest}/borrar/${id}`)
    return this.httpClient.delete<RespuestaCommon>(`${this.urlServicioRest}/borrar/${id}`);
  }

}
