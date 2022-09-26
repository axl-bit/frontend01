import { Distritos } from "./Distrito";
import { Motorizado } from "./Motorizado";
import { Paquete } from "./Paquete";

export class Ordenentrega{
  entrega_id!:string;
  dniRec!:string;
  nomComplReceptor!:string;
  celularRec!:string;
  fechaE!:Date;
  direccionE!:string;
  distritoE!:Distritos;
  motorizado_id!:Motorizado;
  paquete!:Paquete;

  constructor(){

    this.distritoE = new Distritos();
    this.motorizado_id = new Motorizado();
    this.paquete = new Paquete();

  }

}
