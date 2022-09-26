import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Distritos } from 'src/app/Models/Distrito';
import { Provincia } from 'src/app/Models/Provincia';
import { Tarifas } from 'src/app/Models/tarifa';
import { DistritoService } from 'src/app/Service/distrito/distrito.service';
import { ProvinciaService } from 'src/app/Service/Provincia/provincia.service';
import { ServiceTarifaService } from 'src/app/Service/tarifa/service-tarifa.service';

@Component({
  selector: 'app-edit-distrito',
  templateUrl: './edit-distrito.component.html',
  styleUrls: ['./edit-distrito.component.css']
})
export class EditDistritoComponent implements OnInit {

  distritoActual !: Distritos;
  tarifas: Tarifas[] | undefined;
  provincias: Provincia[] | undefined;
  mensaje !: string;

  constructor(
    private distritoServicio: DistritoService,
    private tarifaservicio: ServiceTarifaService,
    private provinciaservicio: ProvinciaService,
    private route : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.mensaje = "";
    this.obtenerdistrito(this.route.snapshot.paramMap.get('id'));
    this.tarifaservicio.getTarifaList().subscribe(data =>{
      console.log(data);
      this.tarifas = data;
    })
    this.provinciaservicio.getProvinciaList().subscribe(data =>{
      console.log(data);
      this.provincias = data;
    })

  }

  obtenerdistrito(id: string | null){
    console.log("Invocando servicio rest-findbyID");
    this.distritoServicio.getDistritoByID(id).subscribe(data =>{
      console.log(data);
      this.distritoActual = data;
    },
    error => {
      console.log(error);
      this.mensaje = "No se puede acceder al distrito !!!";
    })
  }

  ActualizarDistrito()
  {
    console.log("Invocando servicio rest-updateByID");
    this.distritoServicio.updateDistrito(this.distritoActual.distritoID,this.distritoActual).subscribe(data =>{
      console.log(data);
      this.mensaje = "Se actualizo correctamente el distrito";
    },
    error => {
      console.log(error);
      this.mensaje = "Hubo un error actualizando el distrito";
    })
  }
  regresar()
  {
  console.log("A la busqueda de distritos");
  this.router.navigate(['/Distrito']);
  }

}
