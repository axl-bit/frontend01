import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Distritos } from 'src/app/Models/Distrito';
import { Ordenentrega } from 'src/app/Models/OrdenEntrega';
import { Ordenrecojo } from 'src/app/Models/OrdenRecojo';
import { Paquete } from 'src/app/Models/Paquete';
import { RespuestaCommon } from 'src/app/Models/respuesta';
import { Serviciodetalle } from 'src/app/Models/ServicioDetalle';
import { Tipopqt } from 'src/app/Models/Tipopqt';
import { DetalleservicioService } from 'src/app/Service/detalleservicio/detalleservicio.service';
import { DistritoService } from 'src/app/Service/distrito/distrito.service';
import { OrdenentregaService } from 'src/app/Service/ordenentrega/ordenentrega.service';
import { OrdenrecojoService } from 'src/app/Service/ordenrecojo/ordenrecojo.service';
import { PaqueteService } from 'src/app/Service/paquete/paquete.service';
import { TipopqtService } from 'src/app/Service/tipopqt/tipopqt.service';

@Component({
  selector: 'app-add-ordenservicio',
  templateUrl: './add-ordenservicio.component.html',
  styleUrls: ['./add-ordenservicio.component.css'],
})
export class AddOrdenservicioComponent implements OnInit {
  //variables para la creacion de los objetos
  paquetenuevo: Paquete = new Paquete();
  ordenrecojonuevo: Ordenrecojo = new Ordenrecojo();
  ordenentreganuevo: Ordenentrega = new Ordenentrega();
  serviciodetallenuevo: Serviciodetalle = new Serviciodetalle();

  //variable para buscar los datos
  paqueteb: Paquete = new Paquete();
  ordenrecojob: Ordenrecojo = new Ordenrecojo();
  ordenentregab: Ordenentrega = new Ordenentrega();

  //para guardar en orden de recojo y entrega
  paquete!: Paquete[] | Paquete;

  //obteniendo datos para los input-select
  tipopqt: Tipopqt[] | undefined;
  distrito: Distritos[] | undefined;

  //respuesta y mensajes
  respuesta!: RespuestaCommon;
  mensajeordenrecojo!: string;
  mensajeordenentrega!: string;
  mensajeDS!: string;
  mensajepaquete!: string;

  constructor(
    //servicios de creacion
    private paqueteservice: PaqueteService,
    private ordenrecojoservicio: OrdenrecojoService,
    private ordenentregaservicio: OrdenentregaService,
    private detalleservicio: DetalleservicioService,

    //datos de select
    private tipoqtservice: TipopqtService,
    private ditritoservice: DistritoService,

    //demas
    private router: Router
  ) {}

  ngOnInit(): void {
    //iniciamos el mensaje como vacio
    this.mensajepaquete = '';
    this.mensajeordenrecojo = '';
    this.mensajeordenentrega = '';
    this.mensajeDS = '';

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

  crearOrdenServicio() {
    this.crearordenrecojo(this.paqueteb.paquete_id);
    this.crearordenentrega(this.paqueteb.paquete_id);
  }

  crearpaquete() {
    console.log('Invocando servicio para crear un paquete');
    this.paqueteservice.savePaquete(this.paquetenuevo).subscribe((data) => {
      console.log('Esta llegando la data');
      this.respuesta = data;
      this.mensajepaquete = this.respuesta.mensaje;
    });
  }

  crearordenrecojo(paqueteID: string) {
    //obtenemos los datos del paquete
    this.paqueteservice.getPaqueteByID(paqueteID).subscribe((data) => {
      console.log('esta llegando la data');

      //añadimos los datos del paquete a la orden de recojo
      this.ordenrecojonuevo.paquete = data;

      //añadimos los datos del motorizado a la orden de recojo
      this.ordenrecojonuevo.motorizadorecojo === null;

      //procedemos a crear la orden de recojo con todos los datos
      console.log('Invocando servicio para crear una orden de recojo');
      this.ordenrecojoservicio
        .saveOrdenrecojo(this.ordenrecojonuevo)
        .subscribe((data) => {
          console.log('Esta llegando la data');
          this.respuesta = data;
          this.mensajeordenrecojo = this.respuesta.mensaje;
        });
    });
  }

  crearordenentrega(paqueteID: string) {
    //obtenemos los datos del paquete
    this.paqueteservice.getPaqueteByID(paqueteID).subscribe((data) => {
      console.log('esta llegando la data');

      //añadimos los datos del paquete a la orden de entrega
      this.ordenentreganuevo.paquete = data;

      //añadimos los datos del motorizado a la orden de entrega
      this.ordenentreganuevo.motorizadoentrega === null;

      //procedemos a crear la orden de entrega con todos los datos
      console.log('Invocando servicio para crear una orden de recojo');
      this.ordenentregaservicio
        .saveOrdenentrega(this.ordenentreganuevo)
        .subscribe((data) => {
          console.log('Esta llegando la data');
          this.respuesta = data;
          this.mensajeordenentrega = this.respuesta.mensaje;
        });
    });
  }

  crearDS(){
    this.creardetalleservicio(this.ordenrecojob.recojo_id, this.ordenentregab.entrega_id);
  }

  creardetalleservicio(ordenrecojo: string, ordenentrega: string) {



    //obtenemos los datos de la orden de recojo
    this.ordenrecojoservicio.getOrdenrecojoByID(ordenrecojo).subscribe(data_recojo =>{
      console.log("esta llegando la data de la orden de recojo")

      //añadimos los datos de la orden de recojo
      this.serviciodetallenuevo.ordenrecojo = data_recojo;

      this.serviciodetallenuevo.estado === null;

      //obtenemos los datos de la orden de entrega
      this.ordenentregaservicio.getOrdenentregaByID(ordenentrega).subscribe(data_entrega =>{
        console.log("esta llegando la data de la orden de entrega")
        //añadimos los datos del estado

        //añadimos los dataos de la orden de entrega
        this.serviciodetallenuevo.ordenentrega = data_entrega;

        //procedemos a crear el detalle servicio con todos los datos
        console.log("Invocanco servicio para crear un detalle servicio")
        this.detalleservicio.saveServiciodetalle(this.serviciodetallenuevo).subscribe(data_ds =>{
          console.log("Esta llegando la data");
          this.respuesta = data_ds;
          this.mensajeDS = this.respuesta.mensaje;
        })


      })

    })

  /*
    this.ordenrecojoservicio
      .getOrdenrecojoByID(ordenrecojo)
      .subscribe((data_recojo) => {
        console.log('esta llegando la data de la orden de recojo');

        //añadimos los datos de la orden de recojo
        this.serviciodetallenuevo.ordenrecojo = data_recojo;

        //añadimos los datos del estado
      });
    //obtenemos los datos de la orden de entrega
    this.ordenentregaservicio
      .getOrdenentregaByID(ordenentrega)
      .subscribe((data_entrega) => {
        console.log('esta llegando la data de la orden de entrega');
        //añadimos los dataos de la orden de entrega
        this.serviciodetallenuevo.ordenentrega = data_entrega;
        this.serviciodetallenuevo.estado === null;
      });
    console.log('Invocanco servicio para crear un detalle servicio');
    this.detalleservicio
      .saveServiciodetalle(this.serviciodetallenuevo)
      .subscribe((data_ds) => {
        console.log('Esta llegando la data');
        this.respuesta = data_ds;
        this.mensajeDS = this.respuesta.mensaje;
      });*/
  }
/*
  buscarordenrecojo(ordenrecojo: string) {
    this.ordenrecojoservicio
      .getOrdenrecojoByID(ordenrecojo)
      .subscribe((data_recojo) => {
        console.log('esta llegando la data de la orden de recojo');

        //añadimos los datos de la orden de recojo
        this.serviciodetallenuevo.ordenrecojo = data_recojo;
      });
  }

  buscarordenentrega(ordenentrega: string) {
    this.ordenentregaservicio
      .getOrdenentregaByID(ordenentrega)
      .subscribe((data_entrega) => {
        console.log('esta llegando la data de la orden de entrega');
        //añadimos los datos del estado
        this.serviciodetallenuevo.estado === null;
        //añadimos los dataos de la orden de entrega
        this.serviciodetallenuevo.ordenentrega = data_entrega;
      });
  }
  */
}
