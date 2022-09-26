import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Colaborador } from 'src/app/Models/Colaborador';
import { RespuestaCommon } from 'src/app/Models/respuesta';
import { TipoColaborador } from 'src/app/Models/TipoColaborador';
import { ColaboradorService } from 'src/app/Service/colaborador/colaborador.service';
import { TipocolaboradorService } from 'src/app/Service/TipoColaborador/tipocolaborador.service';

@Component({
  selector: 'app-add-colaborador',
  templateUrl: './add-colaborador.component.html',
  styleUrls: ['./add-colaborador.component.css']
})
export class AddColaboradorComponent implements OnInit {

  Colaboradornuevo: Colaborador = new Colaborador();
  tipocolaborador: TipoColaborador[] | undefined;
  respuesta!: RespuestaCommon;
  mensaje!: string;

  constructor(
    private ColaboradorService: ColaboradorService,
    private TipoCService: TipocolaboradorService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.mensaje="";
    this.TipoCService.getTipoColaboradorList().subscribe(data =>{
      console.log(data);
      this.tipocolaborador = data;
    })
  }

  regresar(){
    console.log("Navegando al componente listado");
    this.router.navigate(['/Colaborador']);
  }

  crearColaborador(){
    console.log("Invocando servicio para crear un Colaborador")
    this.ColaboradorService.saveColaborador(this.Colaboradornuevo).subscribe( data =>{
      console.log("Esta llegando la data");
      this.respuesta = data;
      this.mensaje= this.respuesta.mensaje;
    },
    error => {
      console.log(error);
      this.mensaje = "Hubo un error creando el Colaborador";
    })
  }

}
