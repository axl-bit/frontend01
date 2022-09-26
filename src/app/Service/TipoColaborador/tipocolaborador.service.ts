import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RespuestaCommon } from 'src/app/Models/respuesta';
import { TipoColaborador } from 'src/app/Models/TipoColaborador';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TipocolaboradorService {

  private urlServicioRest = 'http://localhost:8090/rest/TipoColaborador';

  constructor(private httpClient: HttpClient) { }

  getTipoColaboradorList(): Observable<TipoColaborador[]>{
    return this.httpClient.get<TipoColaborador[]>(this.urlServicioRest + '/listar', httpOptions);
  }

  getTipoColaboradorByID(id: string | null): Observable<TipoColaborador>{
    return this.httpClient.get<TipoColaborador>(`${this.urlServicioRest}/buscar/${id}`, httpOptions);
  }

  saveTipoColaborador(data: TipoColaborador | null): Observable<RespuestaCommon>{
    return this.httpClient.post<RespuestaCommon>(this.urlServicioRest + '/agregar', data, httpOptions)
  }

  updateTipoColaborador(id: string  | null, data: TipoColaborador | null): Observable<RespuestaCommon>{
    return this.httpClient.put<RespuestaCommon>(`${this.urlServicioRest}/editar/${id}`, data, httpOptions);
  }

  deleteTipoColaborador(id: string | null): Observable<RespuestaCommon>{
    console.log("Invocando metodo de eliminación");
    console.log(`${this.urlServicioRest}/borrar/${id}`)
    return this.httpClient.delete<RespuestaCommon>(`${this.urlServicioRest}/borrar/${id}`, httpOptions);
  }
}
