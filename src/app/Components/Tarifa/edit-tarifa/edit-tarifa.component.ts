import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarifas } from 'src/app/Models/tarifa';
import { ServiceTarifaService } from 'src/app/Service/tarifa/service-tarifa.service';

@Component({
  selector: 'app-edit-tarifa',
  templateUrl: './edit-tarifa.component.html',
  styleUrls: ['./edit-tarifa.component.css']
})
export class EditTarifaComponent implements OnInit {

  tarifaActual !:  Tarifas;
  mensaje !: string;

  constructor(
    private tarifaService: ServiceTarifaService,
    private route : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.mensaje = "";
    this.obtenertarifa(this.route.snapshot.paramMap.get('id'));

  }

  obtenertarifa(id: string | null){
    console.log("Invocando servicio rest-findbyID");
    this.tarifaService.getTarifaByID(id).subscribe(data =>{
      console.log(data);
      this.tarifaActual = data;
    },
    error => {
      console.log(error);
      this.mensaje = "No se puede acceder a la tarifa !!!";
    })
  }

  Actualizartarifa()
  {
    console.log("Invocando servicio rest-updateByID");
    this.tarifaService.updateTarifa(this.tarifaActual.tarifaID,this.tarifaActual).subscribe(data =>{
      console.log(data);
      this.mensaje = "Se actualizo correctamente la tarifa";
    },
    error => {
      console.log(error);
      this.mensaje = "Hubo un error actualizando la tarifa";
    })
  }
  regresar()
  {
  console.log("A la busqueda de tarifas");
  this.router.navigate(['/tarifas']);
  }

}
