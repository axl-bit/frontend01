import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Distritos } from 'src/app/Models/Distrito';
import { DistritoService } from 'src/app/Service/distrito/distrito.service';

@Component({
  selector: 'app-list-distrito',
  templateUrl: './list-distrito.component.html',
  styleUrls: ['./list-distrito.component.css'],
})
export class ListDistritoComponent implements OnInit {
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

  borrardistrito(id: string) {
    console.log('Invocando servicio rest-delete');
    this.DistritoService.deleteDistrito(id).subscribe(
      (data) => {
        console.log(data);
        this.ngOnInit();
        this.router.navigate(['/distrito']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
