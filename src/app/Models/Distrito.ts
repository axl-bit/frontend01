import { Tarifas } from "src/app/Models/tarifa";
export class Distritos {
  distritoID!: string;
  distrito!: string;
  tarifa!:Tarifas;

  constructor(){
    this.tarifa = new Tarifas();
  }
}
