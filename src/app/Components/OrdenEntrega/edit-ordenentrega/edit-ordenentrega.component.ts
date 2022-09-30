import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Motorizado } from 'src/app/Models/Motorizado';
import { Ordenentrega } from 'src/app/Models/OrdenEntrega';
import { MotorizadoService } from 'src/app/Service/motorizado/motorizado.service';
import { OrdenentregaService } from 'src/app/Service/ordenentrega/ordenentrega.service';

@Component({
  selector: 'app-edit-ordenentrega',
  templateUrl: './edit-ordenentrega.component.html',
  styleUrls: ['./edit-ordenentrega.component.css']
})
export class EditOrdenentregaComponent implements OnInit {

  //creamos las variables
  ordenentregaActual !: Ordenentrega;
  motorizados: Motorizado[] | undefined;
  mensaje !:string;

  constructor(
    //traemos los servicio para los datos
    private ordenentregaservicio: OrdenentregaService,
    private motoservicio : MotorizadoService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    //inicializamos el mensaje
    this.mensaje = "";

    //obtenemos el id de la orden de recojo que se desea actualizar
    this.obtenerOE(this.route.snapshot.paramMap.get('id'));

    //obtenemos el listado para los motorizados
    this.motoservicio.getMotorizadoList().subscribe(data_moto =>{
      console.log(data_moto);
      this.motorizados = data_moto;
    })
  }

  obtenerOE(id: string | null){
    console.log("Invocando servicio rest-findByID");
    this.ordenentregaservicio.getOrdenentregaByID(id).subscribe(data =>{
      console.log(data);
      this.ordenentregaActual = data;
    },
    error =>{
      console.log(error);
      this.mensaje = "No se puede acceder a la orden de entrega"
    })
  }

  ActualizarOE(){
    console.log("Invocando servicio rest-updateByID")
    this.ordenentregaservicio.updateOrdenentrega(this.ordenentregaActual.entrega_id,this.ordenentregaActual).subscribe(data =>{
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
    this.router.navigate(['/OrdenEntrega'])
  }

}
