import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { RespuestaCommon } from 'src/app/Models/respuesta';
import { ServicioAutomatizado } from 'src/app/Models/ServicioAutomatizado';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ServicioautomatizadoService {

  private urlServicioRest = 'http://localhost:8090/rest/Servicio';

  constructor(private httpClient: HttpClient) { }

  saveServiciodetalle(data: ServicioAutomatizado | null): Observable<RespuestaCommon>{
    return this.httpClient.post<RespuestaCommon>(this.urlServicioRest + '/agregar', data, httpOptions)
  }

}

