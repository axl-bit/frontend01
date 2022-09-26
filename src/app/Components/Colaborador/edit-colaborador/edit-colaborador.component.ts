import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Colaborador } from 'src/app/Models/Colaborador';
import { TipoColaborador } from 'src/app/Models/TipoColaborador';
import { ColaboradorService } from 'src/app/Service/colaborador/colaborador.service';
import { TipocolaboradorService } from 'src/app/Service/TipoColaborador/tipocolaborador.service';

@Component({
  selector: 'app-edit-colaborador',
  templateUrl: './edit-colaborador.component.html',
  styleUrls: ['./edit-colaborador.component.css']
})
export class EditColaboradorComponent implements OnInit {

  ColaboradorActual !: Colaborador;
  tipocolaborador: TipoColaborador[] | undefined;
  mensaje!: string;

  constructor(
    private ColaboradorService: ColaboradorService,
    private TipoCService: TipocolaboradorService,
    private route : ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.mensaje = "";
    this.obtenerColaborador(this.route.snapshot.paramMap.get('id'));
    this.TipoCService.getTipoColaboradorList().subscribe(data =>{
      console.log(data);
      this.tipocolaborador = data;
    })
  }

  obtenerColaborador(id: string | null){
    console.log("Invocando servicio rest-findbyID");
    this.ColaboradorService.getColaboradorByID(id).subscribe(data =>{
      console.log(data);
      this.ColaboradorActual = data;
    },
    error => {
      console.log(error);
      this.mensaje = "No se puede acceder al distrito !!!";
    })
  }

  ActualizarColaborador()
  {
    console.log("Invocando servicio rest-updateByID");
    this.ColaboradorService.updateColaborador(this.ColaboradorActual.colaboradorID,this.ColaboradorActual).subscribe(data =>{
      console.log(data);
      this.mensaje = "Se actualizo correctamente el Colaborador";
    },
    error => {
      console.log(error);
      this.mensaje = "Hubo un error actualizando el Colaborador";
    })
  }
  regresar()
  {
  console.log("A la busqueda de Colaboradores");
  this.router.navigate(['/Colaborador']);
  }

}
