import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarifas } from 'src/app/Models/tarifa';
import { StorageService } from 'src/app/Service/Login/storage.service';
import { ServiceTarifaService } from 'src/app/Service/tarifa/service-tarifa.service';

@Component({
  selector: 'app-list-tarifa',
  templateUrl: './list-tarifa.component.html',
  styleUrls: ['./list-tarifa.component.css']
})
export class ListTarifaComponent implements OnInit {

  //traemos el modelo para las tarifas
  tarifas: Tarifas[] | undefined;

  constructor(
    private tarifaService: ServiceTarifaService,
    private router: Router,
    private storagetoken: StorageService
  ) { }

  ngOnInit(): void {

    //este es el metodo donde se inician los componentes a cargar para la visualizacion

    console.log("Iniciando componente de listado")
    this.listarTarifas()
    console.log("fin de la invocacion")
    console.log("fin de carga de componentes")

  }

  listarTarifas() {
    console.log("Invocando servicio rest de tarifas")
    this.tarifaService.getTarifaList().subscribe(data => {
      console.log("llegaron los datos")
      console.log(data);
      this.tarifas = data;
      console.table(this.tarifas);
    })
  }

  borrartarifa(id: string) {
    console.log("Invocando servicio rest-delete");
    this.tarifaService.deleteTarifa(id).subscribe(data => {
      console.log(data);
      this.ngOnInit();
      this.router.navigate(['/tarifas']);

    },
      error => {
        console.log(error);
      })
  }

}
