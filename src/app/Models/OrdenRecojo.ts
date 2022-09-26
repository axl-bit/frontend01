import { Distritos } from "./Distrito";
import { Motorizado } from "./Motorizado";
import { Paquete } from "./Paquete";

export class Ordenrecojo{
  recojo_id!:string
  dniEm!:string;
  nomComplEmisor!:string;
  celularEm!:string;
  fechaR!:Date;
  direccionR!:string;
  distritoR!:Distritos;
  motorizado_id!:Motorizado;
  paquete!:Paquete;

  constructor(){

    this.distritoR = new Distritos();
    this.motorizado_id = new Motorizado();
    this.paquete = new Paquete();

  }

}
