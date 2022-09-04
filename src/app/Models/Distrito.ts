import { Tarifas } from "src/app/Models/tarifa";
import { Provincia } from "src/app/Models/Provincia";

export class Distritos {
  distritoID!: string;
  distrito!: string;
  tarifa!:Tarifas;
  provincia!: Provincia;

  constructor(){
    this.tarifa = new Tarifas();
    this.provincia = new Provincia();
  }
}
