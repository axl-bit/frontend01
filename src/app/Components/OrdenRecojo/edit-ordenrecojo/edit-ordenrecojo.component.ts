import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Motorizado } from 'src/app/Models/Motorizado';
import { Ordenrecojo } from 'src/app/Models/OrdenRecojo';
import { MotorizadoService } from 'src/app/Service/motorizado/motorizado.service';
import { OrdenrecojoService } from 'src/app/Service/ordenrecojo/ordenrecojo.service';

@Component({
  selector: 'app-edit-ordenrecojo',
  templateUrl: './edit-ordenrecojo.component.html',
  styleUrls: ['./edit-ordenrecojo.component.css']
})
export class EditOrdenrecojoComponent implements OnInit {

  //creamos las variables
  ordenrecojoActual !: Ordenrecojo;
  motorizados: Motorizado[] | undefined;
  mensaje !:string;


  constructor(
    //traemos los servicio para los datos
    private ordenrecojoservicio: OrdenrecojoService,
    private motoservicio : MotorizadoService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {

    //inicializamos el mensaje
    this.mensaje = "";

    //obtenemos el id de la orden de recojo que se desea actualizar
    this.obtenerOR(this.route.snapshot.paramMap.get('id'));

    //obtenemos el listado para los motorizados
    this.motoservicio.getMotorizadoList().subscribe(data_moto =>{
      console.log(data_moto);
      this.motorizados = data_moto;
    })

  }

  obtenerOR(id: string | null){
    console.log("Invocando servicio rest-findByID");
    this.ordenrecojoservicio.getOrdenrecojoByID(id).subscribe(data =>{
      console.log(data);
      this.ordenrecojoActual = data;
    },
    error =>{
      console.log(error);
      this.mensaje = "No se puede acceder a la orden de recojo"
    })
  }

  ActualizarOR(){
    console.log("Invocando servicio rest-updateByID")
    this.ordenrecojoservicio.updateOrdenrecojo(this.ordenrecojoActual.recojo_id,this.ordenrecojoActual).subscribe(data =>{
      console.log(data);
      this.mensaje = "Se actualizo correctamente la orden de recojo";
    },
    error =>{
      console.log(error);
      this.mensaje = "Hubo un Error al actualizar la orden de recojo";
    })
  }

  regresar(){
    console.log("A la busqueda de DS")
    this.router.navigate(['/OrdenRecojo'])
  }

}
