import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ordenentrega } from 'src/app/Models/OrdenEntrega';
import { OrdenentregaService } from 'src/app/Service/ordenentrega/ordenentrega.service';

@Component({
  selector: 'app-list-ordenentrega',
  templateUrl: './list-ordenentrega.component.html',
  styleUrls: ['./list-ordenentrega.component.css']
})
export class ListOrdenentregaComponent implements OnInit {

  //traemos el modelo para la orden de entrega
  Ordenentrega : Ordenentrega[] | undefined;

  constructor(
    //traemos el servicio de recojo para el listado de datos
    private Ordenentregaservicio : OrdenentregaService,

    //otros servicios
    private router: Router
  ) { }

  ngOnInit(): void {
    //iniciamos la carga de datos con el inicio del componente
    console.log('Iniciando componente de listado')
    this.listarOrdenentrega();
    console.log('fin de la invocacion')
    console.log('fin de carga de componente')
  }

  listarOrdenentrega(){

    //realizamos invacion del servicio
    console.log('Invocando servicio rest de orden de recojo')
    this.Ordenentregaservicio.getOrdenentregaList().subscribe(data_oe =>{
      console.log('llego la data');
      console.log(data_oe);
      this.Ordenentrega = data_oe;
      console.table(this.Ordenentrega);
    })
  }

}
