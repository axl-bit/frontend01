import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Motorizado } from 'src/app/Models/Motorizado';
import { MotorizadoService } from 'src/app/Service/motorizado/motorizado.service';

@Component({
  selector: 'app-list-motorizado',
  templateUrl: './list-motorizado.component.html',
  styleUrls: ['./list-motorizado.component.css']
})
export class ListMotorizadoComponent implements OnInit {

  //traemos el modelo para los Motorizados
  Motorizados : Motorizado [] | undefined;

  constructor(
    private Motorizadoservice : MotorizadoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('Iniciando componente de listado');
    this.listarMotorizados();
    console.log('fin de invocacion');
    console.log('fin de carga de componente');
  }

  listarMotorizados(){
    console.log('Invocar servicio rest de motorizados');
    this.Motorizadoservice.getMotorizadoList().subscribe((data) =>{
      console.log(data);
      this.Motorizados = data;
      console.table(this.Motorizados);
    })
  }

    borrarMotorizado(id: string){
      console.log('Invocando servicio rest-delete');
      this.Motorizadoservice.deleteMotorizado(id).subscribe(
        (data) =>{
          console.log(data);
          this.ngOnInit();
          this.router.navigate(['/Motorizado'])
        }
      )
    }

}
