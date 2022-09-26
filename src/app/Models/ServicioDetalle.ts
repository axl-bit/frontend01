import { Estado } from "./Estado";
import { Ordenentrega } from "./OrdenEntrega";
import { Ordenrecojo } from "./OrdenRecojo";


export class Serviciodetalle{
  detalleservicio_id!:string;
  ordenrecojo!:Ordenrecojo;
  ordenentrega!:Ordenentrega;
  estado!:Estado;

  constructor(){

    this.ordenrecojo = new Ordenrecojo();
    this.ordenentrega = new Ordenentrega();
    this.estado = new Estado();

  }

}
