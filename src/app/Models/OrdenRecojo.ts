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
  motorizadorecojo!:Motorizado;
  paquete!:Paquete;

  constructor(){

    this.distritoR = new Distritos();
    this.motorizadorecojo = new Motorizado();
    this.paquete = new Paquete();

  }

}
