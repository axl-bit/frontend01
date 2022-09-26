import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RespuestaCommon } from 'src/app/Models/respuesta';
import { Tarifas } from 'src/app/Models/tarifa';
import { StorageService } from 'src/app/Service/Login/storage.service';
import { ServiceTarifaService } from 'src/app/Service/tarifa/service-tarifa.service';

@Component({
  selector: 'app-add-tarifa',
  templateUrl: './add-tarifa.component.html',
  styleUrls: ['./add-tarifa.component.css']
})
export class AddTarifaComponent implements OnInit {

  tarifaNueva: Tarifas = new Tarifas();
  respuesta!: RespuestaCommon;
  mensaje!: string;

  constructor(
    private tarifaService: ServiceTarifaService,
    private router: Router,
    private storagetoken: StorageService
  ) { }

  ngOnInit(): void {
    this.mensaje="";
  }

  regresar(){
    console.log("Navegando al componente listado");
    this.router.navigate(['/tarifas']);
  }

  creartarifa(){
    console.log("Invocando servicio para crear una tarifa")
    this.tarifaService.saveTarifa(this.tarifaNueva).subscribe( data =>{
      console.log("Esta llegando la data");
      this.respuesta = data;
      this.mensaje= this.respuesta.mensaje;
    },
    error => {
      console.log(error);
      this.mensaje = "Hubo un error creando la tarifa";

    })
  }


}
