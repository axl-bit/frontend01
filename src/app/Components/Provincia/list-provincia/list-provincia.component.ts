import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Provincia } from 'src/app/Models/Provincia';
import { ProvinciaService } from 'src/app/Service/Provincia/provincia.service';

@Component({
  selector: 'app-list-provincia',
  templateUrl: './list-provincia.component.html',
  styleUrls: ['./list-provincia.component.css']
})
export class ListProvinciaComponent implements OnInit {

  //traemos el modelo para las provincias
  provincia: Provincia[] | undefined;

  constructor(
    private provinciaService: ProvinciaService,
    private router: Router
  ) { }

  ngOnInit(): void {

    //este es el metodo donde se inician los componentes a cargar para la visualizacion
    console.log("Iniciando componente de listado")
    this.listarProvincias()
    console.log("fin de la invocacion")
    console.log("fin de carga de componentes")

  }

  listarProvincias(){
    console.log("Invocando servicio rest de provincias")
    this.provinciaService.getProvinciaList().subscribe(data =>{
      console.log("llegaron los datos")
      console.log(data);
      this.provincia = data;
      console.table(this.provincia);
    })
  }

  borrarTarifa(id: string){
    console.log("Invocando servicio rest-delete");
    this.provinciaService.deleteProvincia(id).subscribe(data =>{
      console.log(data);
      this.ngOnInit();
      this.router.navigate(['']);
    },
    error =>{
      console.log(error);
    }
    )
  }

}
