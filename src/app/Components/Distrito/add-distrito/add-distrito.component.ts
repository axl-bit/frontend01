import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Distritos } from 'src/app/Models/Distrito';
import { Provincia } from 'src/app/Models/Provincia';
import { RespuestaCommon } from 'src/app/Models/respuesta';
import { Tarifas } from 'src/app/Models/tarifa';
import { DistritoService } from 'src/app/Service/distrito/distrito.service';
import { ProvinciaService } from 'src/app/Service/Provincia/provincia.service';
import { ServiceTarifaService } from 'src/app/Service/tarifa/service-tarifa.service';

@Component({
  selector: 'app-add-distrito',
  templateUrl: './add-distrito.component.html',
  styleUrls: ['./add-distrito.component.css']
})
export class AddDistritoComponent implements OnInit {

  distritosnuevo: Distritos = new Distritos();
  tarifas: Tarifas[] | undefined;
  provincias: Provincia[] | undefined;
  respuesta!: RespuestaCommon;
  mensaje!: string;

  constructor(
    private distritoServicio: DistritoService,
    private router: Router,
    private tarifaservicio: ServiceTarifaService,
    private provinciaservicio: ProvinciaService
  ) { }

  ngOnInit(): void {

    this.mensaje="";
    this.tarifaservicio.getTarifaList().subscribe(data =>{
      console.log(data);
      this.tarifas = data;
    })
    this.provinciaservicio.getProvinciaList().subscribe(data =>{
      console.log(data);
      this.provincias = data;
    })

  }

  regresar(){
    console.log("Navegando al componente listado");
    this.router.navigate(['/Distrito']);
  }

  creardistrito(){
    console.log("Invocando servicio para crear un distrito")
    this.distritoServicio.saveDistrito(this.distritosnuevo).subscribe( data =>{
      console.log("Esta llegando la data");
      this.respuesta = data;
      this.mensaje= this.respuesta.mensaje;
    },
    error => {
      console.log(error);
      this.mensaje = "Hubo un error creando el distrito";
    })
  }

}
