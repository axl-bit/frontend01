import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Distritos } from 'src/app/Models/Distrito';
import { RespuestaCommon } from 'src/app/Models/respuesta';
import { ServicioAutomatizado } from 'src/app/Models/ServicioAutomatizado';
import { Tipopqt } from 'src/app/Models/Tipopqt';
import { DistritoService } from 'src/app/Service/distrito/distrito.service';
import { ServicioautomatizadoService } from 'src/app/Service/servicioautomatizado/servicioautomatizado.service';
import { TipopqtService } from 'src/app/Service/tipopqt/tipopqt.service';

@Component({
  selector: 'app-add-ordenservicioautomatizado',
  templateUrl: './add-ordenservicioautomatizado.component.html',
  styleUrls: ['./add-ordenservicioautomatizado.component.css']
})
export class AddOrdenservicioautomatizadoComponent implements OnInit {

  //generamos la variable para el formulario
  servautonuevo : ServicioAutomatizado = new ServicioAutomatizado();

  //obteniendo datos para los input-select
  tipopqt: Tipopqt[] | undefined;
  distrito: Distritos[] | undefined;

  //respuesta y mensajes
  respuesta!: RespuestaCommon;
  mensaje!: string;

  constructor(
    //servicios de creacion
    private servautoservicio: ServicioautomatizadoService,

    //datos de select
    private tipoqtservice: TipopqtService,
    private ditritoservice: DistritoService,

    //demas
    private router: Router
  ) { }

  ngOnInit(): void {
    //iniciamos el mensaje como vacio
    this.mensaje = '';

    //iniciamos los datos del select de tipopqt
    this.tipoqtservice.getTipoPQTList().subscribe((data) => {
      console.log(data);
      this.tipopqt = data;
    });

    //iniciamos los datos del selet de distrito
    this.ditritoservice.getDistritoList().subscribe((data) => {
      console.log(data);
      this.distrito = data;
    });
  }

  crearServicio(){

    //incializamos los datos del detalle
    //this.servautonuevo.serviciodetalle === null;

    console.log("Invocando servicio para crear una orden de detalle")
    this.servautoservicio.saveServiciodetalle(this.servautonuevo).subscribe(data =>{
      console.log("esta llegando la data");
      this.respuesta = data;
      this.mensaje = this.respuesta.mensaje;
    },
    error =>{
      console.log(error);
      this.mensaje = "Hubo un error creando la orden de detalle";
    })
  }

}
