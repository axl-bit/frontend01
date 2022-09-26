import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Colaborador } from 'src/app/Models/Colaborador';
import { RespuestaCommon } from 'src/app/Models/respuesta';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  private urlServicioRest = 'http://localhost:8090/rest/Colaborador';

  constructor(private httpClient: HttpClient) { }

  getColaboradorList(): Observable<Colaborador[]>{
    return this.httpClient.get<Colaborador[]>(this.urlServicioRest + '/listar', httpOptions);
  }

  getColaboradorByID(id: string | null): Observable<Colaborador>{
    return this.httpClient.get<Colaborador>(`${this.urlServicioRest}/buscar/${id}`, httpOptions);
  }

  saveColaborador(data: Colaborador | null): Observable<RespuestaCommon>{
    return this.httpClient.post<RespuestaCommon>(this.urlServicioRest + '/agregar', data, httpOptions)
  }

  updateColaborador(id: string  | null, data: Colaborador | null): Observable<RespuestaCommon>{
    return this.httpClient.put<RespuestaCommon>(`${this.urlServicioRest}/editar/${id}`, data, httpOptions);
  }

  deleteColaborador(id: string | null): Observable<RespuestaCommon>{
    console.log("Invocando metodo de eliminación");
    console.log(`${this.urlServicioRest}/borrar/${id}`)
    return this.httpClient.delete<RespuestaCommon>(`${this.urlServicioRest}/borrar/${id}`, httpOptions);
  }
}

