import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ordenrecojo } from 'src/app/Models/OrdenRecojo';
import { OrdenrecojoService } from 'src/app/Service/ordenrecojo/ordenrecojo.service';

@Component({
  selector: 'app-list-ordenrecojo',
  templateUrl: './list-ordenrecojo.component.html',
  styleUrls: ['./list-ordenrecojo.component.css']
})
export class ListOrdenrecojoComponent implements OnInit {

  //traemos el modelo para la orden de recojo
  Ordenrecojo : Ordenrecojo[] | undefined;

  constructor(
    //traemos el servicio de recojo para el listado de datos
    private Ordenrecojoservicio : OrdenrecojoService,

    //otros servicios
    private router: Router
  ) { }

  ngOnInit(): void {

    //iniciamos la carga de datos con el inicio del componente
    console.log('Iniciando componente de listado')
    this.listarOrdenrecojo();
    console.log('fin de la invocacion')
    console.log('fin de carga de componente')
  }

  listarOrdenrecojo(){

    //realizamos invacion del servicio
    console.log('Invocando servicio rest de orden de recojo')
    this.Ordenrecojoservicio.getOrdenrecojoList().subscribe(data_or =>{
      console.log('llego la data');
      console.log(data_or);
      this.Ordenrecojo = data_or;
      console.table(this.Ordenrecojo);
    })
  }

}
