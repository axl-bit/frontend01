import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { RespuestaCommon } from 'src/app/Models/respuesta';
import { Zona } from 'src/app/Models/Zona';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ZonaService {

  private urlServicioRest = 'http://localhost:8090/rest/Zona';

  constructor(private httpClient: HttpClient) { }

  getMotorizadoList(): Observable<Zona[]>{
    return this.httpClient.get<Zona[]>(this.urlServicioRest + '/listar', httpOptions);
  }

}
