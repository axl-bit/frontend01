import { Tipopqt } from "./Tipopqt";

export class Paquete{
  paquete_id!:string;
  descripcionpqt!:string;
  cantidadpqt!:number;
  tipopqt!: Tipopqt;

  constructor(){
    this.tipopqt = new Tipopqt();
  }
}
