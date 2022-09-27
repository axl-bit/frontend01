import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Colaborador } from 'src/app/Models/Colaborador';
import { Disponibilidad } from 'src/app/Models/Disponibilidad';
import { Motorizado } from 'src/app/Models/Motorizado';
import { RespuestaCommon } from 'src/app/Models/respuesta';
import { Zona } from 'src/app/Models/Zona';
import { ColaboradorService } from 'src/app/Service/colaborador/colaborador.service';
import { DisponibilidadService } from 'src/app/Service/disponibilidad/disponibilidad.service';
import { MotorizadoService } from 'src/app/Service/motorizado/motorizado.service';
import { ZonaService } from 'src/app/Service/zona/zona.service';

@Component({
  selector: 'app-add-motorizado',
  templateUrl: './add-motorizado.component.html',
  styleUrls: ['./add-motorizado.component.css']
})
export class AddMotorizadoComponent implements OnInit {

  //instanciando el nuevo motorizado
  motorizadonuevo : Motorizado = new Motorizado();

  //creamos las variables para los datos de otras tablas
  colaboradores : Colaborador[] |undefined;
  disponibilidad : Disponibilidad [] | undefined;
  zona : Zona[] | undefined;

  //cramos las variables de mensajes
  respuesta!: RespuestaCommon;
  mensaje !: string;

  constructor(

    //tramemos los servicios para los datos
    private motoservicio: MotorizadoService,
    private colaboradorservicio : ColaboradorService,
    private disposervicio: DisponibilidadService,
    private zonaservicio: ZonaService,

    //traemos librerias
    private router: Router
  ) { }

  ngOnInit(): void {

    //incializamos el mensaje
    this.mensaje = "";

    //inicializamos los datos para los colaboradores
    this.colaboradorservicio.getColaboradorList().subscribe(data_colab =>{
      console.log(data_colab);
      this.colaboradores = data_colab;
    })

    //inicializamos los datos para la disponibilidad
    this.disposervicio.getMotorizadoList().subscribe(data_dispo =>{
      console.log(data_dispo);
      this.disponibilidad = data_dispo;
    })

    //inicializamos los datos para las zonas

    this.zonaservicio.getMotorizadoList().subscribe(data_zona =>{
      console.log(data_zona);
      this.zona = data_zona;
    })

  }

  regresar(){
    console.log("Navegando al componete listado")
    this.router.navigate(['/Motorizado'])
  }

  crearMotorizado(){
    console.log("Invocando servicio para crear un Motorizado")
    this.motoservicio.saveMotorizado(this.motorizadonuevo).subscribe(data_moto =>{
      this.respuesta = data_moto;
      this.mensaje = this.respuesta.mensaje;
    },
    error =>{
      this.mensaje = "Hubo un error creando el motorizado"
    })
  }

}
