import { Colaborador } from "./Colaborador";
import { Disponibilidad } from "./Disponibilidad";
import { Zona } from "./Zona";

export class Motorizado{
  motorizado_id!:string;
  codigoSoat!:string;
  nroMatricula!:string;
  ultimaRT!:string;
  colaborador_id!:Colaborador;
  disponibilidad!:Disponibilidad;
  zona!:Zona;

  constructor(){
    this.colaborador_id = new Colaborador();
    this.disponibilidad = new Disponibilidad();
    this.zona = new Zona();
  }
}
