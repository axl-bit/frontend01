import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { RespuestaCommon } from 'src/app/Models/respuesta';
import { Disponibilidad } from 'src/app/Models/Disponibilidad';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DisponibilidadService {

  private urlServicioRest = 'http://localhost:8090/rest/Disponibilidad';

  constructor(private httpClient: HttpClient) { }

  getMotorizadoList(): Observable<Disponibilidad[]>{
    return this.httpClient.get<Disponibilidad[]>(this.urlServicioRest + '/listar', httpOptions);
  }
}
