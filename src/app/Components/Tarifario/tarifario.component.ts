import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Distritos } from 'src/app/Models/Distrito';
import { DistritoService } from 'src/app/Service/distrito/distrito.service';

@Component({
  selector: 'app-tarifario',
  templateUrl: './tarifario.component.html',
  styleUrls: ['./tarifario.component.css']
})
export class TarifarioComponent implements OnInit {

//traemos el modelo para los distritos
Distritos: Distritos[] | undefined;

constructor(
  private DistritoService: DistritoService,
  private router: Router
) {}
  ngOnInit(): void {

    console.log('Iniciando componente de listado');
    this.ListarDistritos();
    console.log('fin de invocacion');
    console.log('fin de carga de componente');

  }

  ListarDistritos() {
    console.log('Invocando servicio rest de distritos');
    this.DistritoService.getDistritoList().subscribe((data) => {
      console.log('llego la data');
      console.log(data);
      this.Distritos = data;
      console.table(this.Distritos);
    });
  }

  //google map
  display: any;
  center: google.maps.LatLngLiteral = {
      lat: 24,
      lng: 12
  };
  zoom = 4;
  moveMap(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.center = (event.latLng.toJSON());
  }
  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
  }

}
