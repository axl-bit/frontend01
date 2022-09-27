import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Disponibilidad } from 'src/app/Models/Disponibilidad';
import { Motorizado } from 'src/app/Models/Motorizado';
import { Zona } from 'src/app/Models/Zona';
import { DisponibilidadService } from 'src/app/Service/disponibilidad/disponibilidad.service';
import { MotorizadoService } from 'src/app/Service/motorizado/motorizado.service';
import { ZonaService } from 'src/app/Service/zona/zona.service';

@Component({
  selector: 'app-edit-motorizado',
  templateUrl: './edit-motorizado.component.html',
  styleUrls: ['./edit-motorizado.component.css'],
})
export class EditMotorizadoComponent implements OnInit {
  //creamos las varibales para los datos
  motoActual !: Motorizado;
  disponibilidad: Disponibilidad[] | undefined;
  zona: Zona[] | undefined;
  mensaje!:string

  constructor(
    //traemos los servicios para los datos
    private motoservicio: MotorizadoService,
    private disposervicio: DisponibilidadService,
    private zonaservicio: ZonaService,

    //traemos las demas librerias
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    //incializamos el mensaje
    this.mensaje = '';

    //obtenemos los datos por id
    this.obtenerMotorizado(this.route.snapshot.paramMap.get('id'))

    //inicializamos los datos para la disponibilidad
    this.disposervicio.getMotorizadoList().subscribe((data_dispo) => {
      console.log(data_dispo);
      this.disponibilidad = data_dispo;
    });

    //inicializamos los datos para las zonas
    this.zonaservicio.getMotorizadoList().subscribe((data_zona) => {
      console.log(data_zona);
      this.zona = data_zona;
    });
  }

  obtenerMotorizado(id: string | null){
    console.log("Invocando servicio rest-findbyID")
    this.motoservicio.getMotorizadoByID(id).subscribe(data_moto =>{
      console.log(data_moto);
      this.motoActual = data_moto;
    })
  }

  ActualizarMoto(){
    console.log("Invocando servicio rest-updateByID");
    this.motoservicio.updateMotorizado(this.motoActual.motorizado_id, this.motoActual).subscribe(data_motoactual =>{

      console.log(data_motoactual);
      this.mensaje = "se actualizo correctamente el motorizado";

    },
    error =>{
      console.log(error);
      this.mensaje = "Hubo un error actualizando el motorizado"
    })
  }


  regresar() {
    console.log('Navegando al componete listado');
    this.router.navigate(['/Motorizado']);
  }
}
