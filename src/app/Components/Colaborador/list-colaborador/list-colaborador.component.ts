import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Colaborador } from 'src/app/Models/Colaborador';
import { ColaboradorService } from 'src/app/Service/colaborador/colaborador.service';

@Component({
  selector: 'app-list-colaborador',
  templateUrl: './list-colaborador.component.html',
  styleUrls: ['./list-colaborador.component.css']
})
export class ListColaboradorComponent implements OnInit {

  //traemos el modelo para los colaboradores
  Colaboradores: Colaborador[] | undefined;


  constructor(
    private ColaboradorService : ColaboradorService,
    private router: Router
  ) { }

  ngOnInit(): void {

    console.log('Iniciando componente de listado');
    this.ListarColaboradores();
    console.log('fin de invocacion');
    console.log('fin de carga de componente');

  }

  ListarColaboradores() {
    console.log('Invocando servicio rest de distritos');
    this.ColaboradorService.getColaboradorList().subscribe((data) => {
      console.log('llego la data');
      console.log(data);
      this.Colaboradores = data;
      console.table(this.Colaboradores);
    });
  }

  borrarColaborador(id: string) {
    console.log('Invocando servicio rest-delete');
    this.ColaboradorService.deleteColaborador(id).subscribe(
      (data) => {
        console.log(data);
        this.ngOnInit();
        this.router.navigate(['/Colaborador']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
