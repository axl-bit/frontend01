import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Serviciodetalle } from 'src/app/Models/ServicioDetalle';
import { DetalleservicioService } from 'src/app/Service/detalleservicio/detalleservicio.service';

@Component({
  selector: 'app-list-ordenservicio',
  templateUrl: './list-ordenservicio.component.html',
  styleUrls: ['./list-ordenservicio.component.css']
})
export class ListOrdenservicioComponent implements OnInit {

  //tramemos el modelo para el detalle de servicio
  DetalleServiocios : Serviciodetalle[] | undefined;

  constructor(
    private ServiciodetalleServicio : DetalleservicioService,
    private router: Router
  ) { }

  ngOnInit(): void {

    console.log('Iniciando componente de listado');
    this.listarOrdenes();
    console.log('fin de invocacion');
    console.log('fin de carga de componente');

  }

  listarOrdenes(){
    console.log('Invocando servicio rest de detalle de servicios')
    this.ServiciodetalleServicio.getServiciodetalleList().subscribe((data) =>{
      console.log('llego la data');
      console.log(data);
      this.DetalleServiocios = data;
      console.table(this.DetalleServiocios);
    })
  }

}
