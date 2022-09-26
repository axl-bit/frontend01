import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estado } from 'src/app/Models/Estado';
import { Serviciodetalle } from 'src/app/Models/ServicioDetalle';
import { DetalleservicioService } from 'src/app/Service/detalleservicio/detalleservicio.service';
import { EstadoService } from 'src/app/Service/estado/estado.service';

@Component({
  selector: 'app-edit-ordenservicio',
  templateUrl: './edit-ordenservicio.component.html',
  styleUrls: ['./edit-ordenservicio.component.css']
})
export class EditOrdenservicioComponent implements OnInit {

  detalleservicioActual !: Serviciodetalle;
  estados: Estado[] | undefined;
  mensaje !: string;

  constructor(
    private detalleservicio : DetalleservicioService,
    private EstadoServicio : EstadoService,
    private route : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    //inicializamos el mensaje
    this.mensaje = "";

    //obtenemos el id del DS que deseamos actualizar
    this.obtenerDS(this.route.snapshot.paramMap.get('id'));

    //obtenemos el listado de estados
    this.EstadoServicio.getEstadoList().subscribe(data =>{
      console.log(data);
      this.estados = data;
    })


  }

  obtenerDS(id: string | null){
    console.log("Invocando servicio rest-findByID");
    this.detalleservicio.getServiciodetalleByID(id).subscribe(data =>{
      console.log(data);
      this.detalleservicioActual = data;
    },
    error =>{
      console.log(error);
      this.mensaje = "No se puede acceder al DS"
    })
  }

  ActualizarDS(){
    console.log("Invocando servicio rest-updateByID")
    this.detalleservicio.updateServiciodetalle(this.detalleservicioActual.detalleservicio_id,this.detalleservicioActual).subscribe(data =>{
      console.log(data);
      this.mensaje = "Se actualizo correctamente el DS";
    },
    error =>{
      console.log(error);
      this.mensaje = "Hubo un Error al actualizar el DS"
    })
  }

  regresar(){
    console.log("A la busqueda de DS")
    this.router.navigate(['/OrdenServicio'])
  }


}
